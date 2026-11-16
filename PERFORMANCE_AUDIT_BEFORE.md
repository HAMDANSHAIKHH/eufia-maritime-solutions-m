# Performance Audit Before

## Scope
This audit covers the live code in the repository as of the current working state, with emphasis on the homepage and the core delivery path that affects First Paint and Largest Contentful Paint (LCP) on mobile.

## Observed bottlenecks

### 1) Hero content was being delayed by JavaScript-driven motion
The homepage hero in [src/pages/Landing.tsx](src/pages/Landing.tsx) used `framer-motion` wrappers (`Reveal`, `SplitHeading`, `motion.div`) around the headline, eyebrow, and call-to-action stack. Those wrappers delay the principal hero content until the animation system and viewport detection are active.

This is not a theoretical issue. It is a real performance cost because the main content is not immediately visible in the first render path; it waits for scroll/animation logic to begin and then resolves into view.

### 2) Production entry imported a dev/runtime helper in the main bundle path
The application entry at [src/main.tsx](src/main.tsx) was importing the VLY toolbar integration unconditionally. This is not a user-facing page dependency and is a poor fit for the critical path. The bundle also included the corresponding runtime path even when the integration was not required for the production experience.

### 3) Font delivery was broad and heavier than necessary
The root document in [index.html](index.html) loads Google Fonts through a CSS request that included multiple font families and many weights. This adds network cost and can delay text rendering even when the app markup is ready.

### 4) Critical images did not have explicit responsive sizing and eager priority
The homepage used image elements without explicit `width`, `height`, or eager priority and without explicit first-viewport intent. That leaves layout and decoding to the browser and adds more uncertainty for critical path rendering.

### 5) The app includes a large animation library in the initial bundle path
The build output shows `framer-motion` as a substantial chunk in the production bundle. On mobile, large animation libraries are a meaningful contributor to JavaScript execution cost, especially when the initial viewport is heavy and the page is still above the fold.

## Measured build findings
The following figures were captured from the production build output in this environment:

- Total transformed modules: 2306
- Main JS bundle: 427.72 kB uncompressed / 134.37 kB gzip
- `framer-motion` chunk: 144.83 kB uncompressed / 48.26 kB gzip
- `forms` chunk: 92.43 kB uncompressed / 27.75 kB gzip
- `react-vendor` chunk: 38.15 kB uncompressed / 13.78 kB gzip

These values are build-time measurements, not field Core Web Vitals, and they are useful for identifying actual payload contributors.

## Root cause summary
The homepage LCP problem is not caused simply by the paragraph element being the last DOM node. The actual performance issue is the combination of:

- JavaScript-driven hero motion delaying immediate hero visibility
- unnecessary runtime integration in the main entry path
- a broad, heavy font request in the document head
- no explicit eager handling for critical above-the-fold imagery
- large animation and form libraries in the first delivery path

## Files reviewed
- [src/pages/Landing.tsx](src/pages/Landing.tsx)
- [src/components/anim/primitives.tsx](src/components/anim/primitives.tsx)
- [src/components/art/HeroScene.tsx](src/components/art/HeroScene.tsx)
- [src/main.tsx](src/main.tsx)
- [src/index.css](src/index.css)
- [index.html](index.html)
- [vite.config.ts](vite.config.ts)
- [src/components/layout/SiteLayout.tsx](src/components/layout/SiteLayout.tsx)
- [src/components/CustomCursor.tsx](src/components/CustomCursor.tsx)

## Limitations of the audit
This environment did not provide a live Lighthouse or Chrome trace session against the production URL. No field Core Web Vitals numbers were fabricated. The findings above are based on the repo code, the actual build output, and the observed architecture of the homepage critical path.
