# SEO Implementation Plan

Scope: Technical SEO, on-page SEO, off-page SEO for the existing Next.js app. No behavior or contract changes. Minimal UI changes only when required for SEO.

## Phase 1: Critical Technical Fixes
- Files affected (existing):
  - app/layout.tsx
  - app/page.tsx
  - app/about/page.tsx
  - app/contact/page.tsx
  - app/services/page.tsx
  - app/blog/page.tsx
  - app/blog/[id]/page.tsx
  - components/Navbar.tsx
  - components/Footer.tsx
- New files (to be created):
  - App router sitemap route file
  - App router robots route file
- Expected SEO benefit: Indexability, crawlability, better rendering of metadata for all pages.
- Risk level: Low.
- Rollback strategy: Revert to prior layout/page structure and remove new route files.

## Phase 2: Metadata and Structured Data
- Files affected (existing):
  - app/layout.tsx
  - app/page.tsx
  - app/about/page.tsx
  - app/services/page.tsx
  - app/blog/page.tsx
  - app/blog/[id]/page.tsx
- New files (to be created):
  - Sitewide JSON-LD helper (location TBD)
- Expected SEO benefit: Improved SERP appearance, social previews, and entity understanding.
- Risk level: Low.
- Rollback strategy: Remove metadata exports and JSON-LD helper usage.

## Phase 3: Content Optimization
- Files affected (existing):
  - app/page.tsx
  - app/about/page.tsx
  - app/services/page.tsx
  - app/blog/page.tsx
  - app/blog/[id]/page.tsx
  - components/Footer.tsx
- Expected SEO benefit: Better topical relevance, improved heading hierarchy, reduced thin content.
- Risk level: Medium (copy changes).
- Rollback strategy: Revert text and heading structure to previous content.

## Phase 4: Internal Linking
- Files affected (existing):
  - components/Navbar.tsx
  - app/page.tsx
  - app/blog/page.tsx
  - app/blog/[id]/page.tsx
  - components/Footer.tsx
- Expected SEO benefit: Improved crawl paths and page authority distribution.
- Risk level: Low.
- Rollback strategy: Revert link edits.

## Phase 5: Performance and Image Optimization
- Files affected (existing):
  - app/page.tsx
  - app/blog/page.tsx
  - app/blog/[id]/page.tsx
  - app/globals.css
  - next.config.ts
- Expected SEO benefit: Better Core Web Vitals and LCP.
- Risk level: Medium (rendering changes for images).
- Rollback strategy: Revert to original image and layout handling.

## Phase 6: Off-Page Recommendations
- Files affected: None (strategy only).
- Expected SEO benefit: Increased authority and referral traffic.
- Risk level: None.
- Rollback strategy: Not applicable.
