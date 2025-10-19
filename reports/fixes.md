# CLC Retail Group — Fixes & Enhancements Summary

## Latest insights feed
- Swapped the failing remote fetch for a resilient MDX-backed `/api/posts` query with a static fallback so the home, services, and blog pages always render cards or an empty state.
- Removed the previous 404/retry panels and replaced them with a friendly “Insights coming soon” message that links to the blog and consultation scheduler.

## Consultation scheduling
- Introduced a reusable `SchedulerEmbed` that reads `VITE_SCHEDULER_PROVIDER` / `VITE_SCHEDULER_URL` (also compatible with `NEXT_PUBLIC_*`) to embed Cal.com or Calendly if configured, or surface polished mail/tel fallbacks when no provider is set.
- Added a `SchedulerModal` for inline launches (used by the sticky CTA) and linked all “Schedule a consultation” buttons to `/contact#schedule`.
- Expanded the Contact page with a dedicated scheduler section and iframe, plus consistent tel/mail links for accessibility.

## Visual, contrast, and accessibility refinements
- Boosted contrast on services, values, and case-study cards with brighter body copy, stronger glass borders, and clearer headings to meet WCAG targets.
- Repositioned hero imagery captions to stay inside the rounded frame, centered image cropping, and ensured CTA pills never wrap on small screens.
- Preserved focus treatments, added analytics markers to schedule CTAs, and kept existing SEO/JSON-LD metadata intact.
