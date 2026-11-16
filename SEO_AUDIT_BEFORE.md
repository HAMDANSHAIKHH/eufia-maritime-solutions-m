# SEO Audit Before Implementation

## 1. Current implementation

The repository is a Vite + React + TypeScript single-page app deployed via Vercel. The app uses `BrowserRouter` and a client-side route tree, with valid public paths handled in `src/main.tsx` and SEO metadata managed through `src/lib/seo.ts`.

The site already includes:

- A public static `robots.txt`.
- A public static `sitemap.xml`.
- A React-based metadata hook that sets title, description, canonical, Open Graph and JSON-LD on route change.
- A `NotFound` experience for invalid client routes.
- Service data and route metadata in `src/data/services.ts` and `src/data/site.ts`.
- Vercel rewrite configuration in `vercel.json`.

## 2. Existing strengths

- The app has a defined public route architecture and a service-driven information architecture.
- The homepage and key pages already include route-aware metadata and a central SEO utility.
- `sitemap.xml` is present and contains a production domain, which is a strong starting point.
- Several service pages are defined dynamically and the main brand is present across the application.

## 3. Problems identified before implementation

### Route and SPA routing risk

- The production Vercel config is a broad SPA rewrite, which is common for React apps but can miss edge cases if asset or static-resource handling is not carefully constrained.
- The current invalid-service handling in `ServiceDetail.tsx` redirects to `/service-not-found`, which is not a real route and is not an ideal 404 strategy for direct HTTP requests.
- The app relies on client-side routing for valid pages, so the server-side fallback must be carefully configured and verified with direct HTTP requests.

### Canonical and crawl metadata

- The root `index.html` has a homepage title and description, but it does not include an absolute canonical URL, and some social metadata is still using a relative URL pattern instead of a production URL.
- The SEO system is centralised but does not yet cover every page with consistent structured-data patterns or a clearer canonical/metadata model.
- There is no explicit `llms.txt` resource for AI crawler consumption.

### Static technical SEO files

- `robots.txt` is present but is minimal and does not clearly distinguish public crawlability from AI crawler expectations or explain the official sitemap resource.
- The current `sitemap.xml` contains a valid set of URLs, but it should be reviewed against the actual live route set and aligned with the canonical production domain and route naming.

### Content and authority gaps

- The existing site is visually rich and commercially coherent, but it still needs stronger entity clarity, deeper service differentiation, and a more explicit FAQ / answer-engine content strategy to support AI and search discovery.
- There is no dedicated resources or insights layer and no editorial system around maritime knowledge content.
- Some copy is useful but would benefit from more precise search-intent targeting and a clearer distinction between general educational content and direct service offerings.

### Structured data and GEO/AEO readiness

- The homepage and some pages produce Organization and WebSite JSON-LD, but the site does not yet implement a more complete, page-by-page structured-data model for key landing pages, service pages, breadcrumbs and contact pages.
- The current metadata strategy is serviceable but not yet strong enough for AI discovery and answer-engine summarisation across all major entities.
- The site does not currently publish a dedicated machine-readable overview for AI systems.

## 4. Missing elements and gaps

- A more explicit Vercel SPA fallback strategy for valid route requests and static assets.
- Stronger `robots.txt` rules with clear sitemap reference and crawler intent.
- A more consistent canonical URL and metadata pattern across pages.
- A complete `llms.txt` overview for AI systems.
- Stronger page-level structured data for key business entities and contact surfaces.
- A clear keyword-to-page architecture and internal-link map for the service and editorial structure.
- A more explicit audit and validation trail for route requests, canonical tags and direct HTTP checks.

## 5. Recommended implementation priorities

1. Fix the direct-route and Vercel SPA fallback strategy.
2. Tighten canonical, Open Graph and JSON-LD consistency.
3. Publish a clearer `robots.txt` and `llms.txt` policy.
4. Review and refine service page SEO metadata and practical search-intent targeting.
5. Improve internal linking and topical clarity for discoverability.
6. Validate route accessibility and production build quality before sign-off.

## 6. Conclusion

The repository has a credible foundation for SEO, but the route-level fallback, metadata completeness, crawler policies and structured-data depth need to be tightened before deployment confidence is meaningful. The next phase will focus on implementing the technical fixes and documenting the final SEO and GEO status with evidence from a production build and route validation.
