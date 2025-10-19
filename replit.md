# CLC Retail Group - Marketing Website

## Overview

A production-ready marketing website for CLC Retail Group, a retail architecture studio that partners with founders, franchise operators, and private equity teams to launch concept stores. The application is built with React 18, TypeScript, and Tailwind CSS, featuring a glassmorphic design system with dark charcoal backgrounds and rose-gold accents.

The website serves as the primary digital presence for showcasing services (franchise scouting, site selection, supply chain, launch marketing), company values, blog content, and consultation scheduling. It emphasizes accessibility (WCAG 2.2 Level AA), performance optimization, and a trust-building aesthetic.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Tooling:**
- React 18 with TypeScript for type safety and modern React features
- Vite as the build tool for fast development and optimized production builds
- Wouter for lightweight client-side routing (alternative to React Router)
- Path aliases configured (`@/` for client/src, `@shared/` for shared code)

**State Management:**
- TanStack Query (React Query) for server state, caching, and data fetching
- Local component state with React hooks (useState, useForm)
- No global state management library (Redux, Zustand) - deliberate choice for simplicity

**Styling & Design System:**
- Tailwind CSS with extensive customization via CSS variables
- Glassmorphism design pattern: frosted glass backgrounds, backdrop blur, subtle borders
- Custom design tokens in `client/src/index.css` for brand colors (dark charcoal #2C2E3A, rose-gold #B08A7C)
- shadcn/ui component library (Radix UI primitives) for accessible, unstyled components
- Framer Motion for animations and scroll-based reveals

**Component Architecture:**
- Reusable presentation components (BlogCard, CardGlass, HeroSection, etc.)
- Layout components (MarketingLayout) for consistent page structure
- Form components with React Hook Form + Zod validation
- Lazy-loaded page components via React.lazy for code splitting

**Accessibility Features:**
- Semantic HTML5 elements with proper ARIA roles
- Keyboard navigation support throughout
- Focus-visible styles for interactive elements
- Skip-to-content functionality via proper document structure
- Mobile drawer with scroll lock and escape key handling

### Backend Architecture

**Server Framework:**
- Express.js (Node.js) serving both API endpoints and static assets
- Development mode: Vite middleware for HMR and fast refresh
- Production mode: Pre-built static files served from dist/public

**API Design:**
- RESTful endpoints under `/api` prefix
- Content endpoints: `/api/content/home`, `/api/blog/posts`, `/api/posts`
- Form submission endpoints: `/api/contact`, `/api/newsletter`
- In-memory storage for form submissions (MemStorage implementation)
- Zod schema validation on both client and server

**Content Management:**
- Static content served from server/content directory
- MDX blog posts with frontmatter parsing (title, excerpt, date, category, etc.)
- Fallback mechanisms: bundled content used when API fetch fails
- Safe fetch utilities (`fetchTextSafe`, `fetchJsonSafe`) to prevent rendering of error HTML

**Build Process:**
- Client: Vite builds React SPA to dist/public
- Server: esbuild bundles server code to dist/index.js
- Single production artifact runs both API server and serves static assets

### Data Storage Solutions

**Current Implementation:**
- In-memory storage (MemStorage class) for development/demo purposes
- Contact form submissions and newsletter subscriptions stored in arrays
- User schema defined with Drizzle ORM but not actively used

**Database Configuration:**
- Drizzle ORM configured for PostgreSQL (drizzle.config.ts)
- Schema defined in shared/schema.ts (users table with id, username, password)
- Migration support via drizzle-kit
- Neon serverless PostgreSQL driver configured but not currently utilized
- Database can be added later without significant refactoring

**Data Flow:**
- Forms validate client-side with React Hook Form + Zod
- Submissions sent to API endpoints with JSON payloads
- Server validates again with same Zod schemas (shared validation)
- Success/error feedback via toast notifications

### Authentication & Authorization

**Current State:**
- No authentication implemented
- User schema exists (username/password) but not in use
- Contact and newsletter forms are public, no login required

**Session Infrastructure:**
- connect-pg-simple package installed for future PostgreSQL session store
- Express session middleware not currently configured
- Ready for authentication implementation when needed

### Performance Optimizations

**Image Optimization:**
- Unsplash CDN with query parameters (w=width, q=quality, fm=webp)
- Lazy loading for below-the-fold images
- Responsive image sizing (1920px for heroes, 800px for cards)
- WebP format for better compression

**Code Splitting:**
- Lazy-loaded route components with React.lazy
- Suspense boundaries with LoadingScreen fallback
- Separate vendor and application bundles

**Caching Strategy:**
- TanStack Query cache with 5-minute stale time for content
- HTTP cache headers on blog post responses (max-age=300)
- Static asset caching via Vite build

**Bundle Optimization:**
- Tree shaking via ES modules
- Tailwind CSS purging in production
- Source maps for debugging (via @jridgewell/trace-mapping)

### SEO & Metadata

**Meta Tags:**
- Seo component for per-page title, description, and Open Graph tags
- Canonical URLs configured for each page
- Twitter Card support for social sharing

**Structured Data:**
- JSON-LD schemas implemented: Organization, BreadcrumbList, HowTo, FAQPage, LocalBusiness
- Schema validation via Zod for type safety

**Sitemap & Robots:**
- Static robots.txt allowing all crawlers
- Sitemap reference in robots.txt
- Clean URL structure (/, /about, /services, /blog, /contact)

### Third-Party Integrations

**Scheduler Integration:**
- Conditional rendering for Cal.com or Calendly embeds
- Environment variable configuration (VITE_SCHEDULER_PROVIDER, VITE_SCHEDULER_URL)
- Fallback UI with email/phone contact when scheduler unavailable
- SchedulerModal and SchedulerEmbed components for inline and overlay displays

**Analytics Readiness:**
- data-analytics attributes on CTA buttons for event tracking
- No analytics library currently installed (ready for Google Analytics, Plausible, etc.)

**Email Service:**
- Contact form and newsletter submissions logged server-side
- No email sending service integrated (ready for SendGrid, Mailgun, etc.)
- Toast notifications confirm submissions to users

## External Dependencies

### Core Dependencies

**Frontend Framework:**
- react (v18): UI library with hooks and concurrent features
- react-dom (v18): DOM rendering for React
- typescript: Type safety and developer experience

**Build & Development:**
- vite: Fast build tool with HMR
- @vitejs/plugin-react: React integration for Vite
- esbuild: Server code bundling

**Backend Framework:**
- express: Web server for API and static file serving
- @neondatabase/serverless: PostgreSQL driver (configured but not used)

**UI Component Libraries:**
- @radix-ui/react-*: 20+ headless accessible components (dialog, dropdown, accordion, etc.)
- lucide-react: Icon library with 1000+ icons
- framer-motion: Animation and gesture library
- embla-carousel-react: Touch-friendly carousel

**Form & Validation:**
- react-hook-form: Form state management and validation
- @hookform/resolvers: Zod integration for react-hook-form
- zod: Schema validation for forms and API responses

**Data Fetching:**
- @tanstack/react-query: Server state management with caching

**Database & ORM:**
- drizzle-orm: TypeScript ORM for PostgreSQL
- drizzle-kit: Migration toolkit
- drizzle-zod: Zod schema generation from Drizzle schemas
- connect-pg-simple: PostgreSQL session store (not active)

**Styling:**
- tailwindcss: Utility-first CSS framework
- tailwind-merge: Merge Tailwind classes without conflicts
- clsx: Conditional class names
- class-variance-authority: Component variant styling
- postcss & autoprefixer: CSS processing

**Routing:**
- wouter: Minimal client-side router (2KB alternative to React Router)

**Utilities:**
- date-fns: Date manipulation and formatting
- nanoid: Unique ID generation

### Development Dependencies

**Type Checking:**
- @types/node: Node.js type definitions
- vite/client types: Vite environment types

**Replit Plugins:**
- @replit/vite-plugin-runtime-error-modal: Error overlay in development
- @replit/vite-plugin-cartographer: Code navigation (conditional, dev only)
- @replit/vite-plugin-dev-banner: Development banner (conditional, dev only)

### Service Dependencies

**Image CDN:**
- Unsplash: All imagery served via Unsplash CDN with optimization parameters

**Font Hosting:**
- Google Fonts: Montserrat, Poppins (headings), Open Sans, Lato (body text)
- Preconnect configured for fonts.googleapis.com and fonts.gstatic.com

**Potential Future Integrations:**
- PostgreSQL database (Neon serverless configured)
- Email service (SendGrid, Mailgun, Resend)
- Analytics (Google Analytics, Plausible)
- Scheduler (Cal.com, Calendly) - infrastructure ready
- Error tracking (Sentry)
- Monitoring (Datadog, New Relic)