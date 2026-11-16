# Performance Remaining Issues

## Summary
The repo is now in a better state for LCP and critical rendering, but there are still non-blocking issues to address if the team wants to push further into a top-tier mobile performance baseline.

## Remaining items

### 1) Existing lint warnings from `react-refresh/only-export-components`
The project still emits 15 warnings from ESLint. They are warnings, not errors, and do not block the build. These warnings are associated with the component-export pattern used across UI and animation utilities.

### 2) External Google Fonts remain a network dependency
The homepage still makes a request to Google Fonts. This is not a blocking issue, but it remains a remote dependency that can affect text rendering timing for some users.

### 3) No live field-performance dataset was captured here
The repository and environment do not support a true production mobile field-run trace. A live Lighthouse or Chrome trace against the deployed site would be the correct next step for final WPIL and Core Web Vitals confirmation.

## Recommended next steps
1. Capture a Lighthouse mobile test for the live production URL.
2. Measure the real LCP, FCP, and INP on a throttled iPhone profile.
3. Consider self-hosting or reducing the Google Font payload further if a branding review allows it.
4. Audit any additional above-the-fold images beyond the hero and the secondary visual panels.
5. Re-run the post-optimization profile after deployment to validate the actual user experience.

## Conclusion
The implementation removed the clearest performance blockers in the critical path and verified that the app still builds successfully. The remaining items are optimization opportunities rather than rescue-level blockers.
