# CLC Retail Group - Marketing Website

## Overview

A production-ready marketing website for CLC Retail Group, a retail architecture studio that partners with founders, franchise operators, and private equity teams to launch concept stores. The application is built with React 18, TypeScript, and Tailwind CSS, featuring a glassmorphic design system with dark charcoal backgrounds and rose-gold accents.

The website serves as the primary digital presence for showcasing services (franchise scouting, site selection, supply chain, launch marketing), company values, blog content, and consultation scheduling. It emphasizes accessibility (WCAG 2.2 Level AA), performance optimization, and a trust-building aesthetic.

## User Preferences

Preferred communication style: Simple, everyday language.
Email notifications: Form submissions are sent to `NOTIFICATION_EMAIL` (env var, default `hello@clcretail.com`) using Resend. Required secrets: `RESEND_API_KEY`. Optional env vars: `NOTIFICATION_EMAIL` (recipient), `RESEND_FROM_EMAIL` (sender, default `onboarding@resend.dev`). To send to addresses other than the Resend account owner's signup email, the user must verify a sending domain at https://resend.com/domains and set `RESEND_FROM_EMAIL` to an address on that domain. Email failures are logged but never fail the form submission for the visitor.

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

---

## Operations Guide

### 1. How Forms Work Across the Site

The website uses a unified form system built with **React Hook Form**, **Zod**, and **TanStack Query**.

**Workflow:**
1.  **Validation**: When a user fills out a form (e.g., Contact Us or Newsletter), the data is validated instantly on the frontend using a Zod schema (defined in `shared/schema.ts`).
2.  **Submission**: On valid submission, the `apiRequest` utility sends a POST request to the Express backend (e.g., `/api/contact`).
3.  **Backend Handling**: The server re-validates the data for security and then stores it. Currently, it uses `MemStorage` (in-memory), which means submissions are logged to the console and stored in temporary arrays.
4.  **Feedback**: The user receives a visual confirmation via the `useToast` hook (success or error message).

### 2. How to Set Up the Project

**Initial Setup:**
1.  **Environment Variables**: Ensure you have a `.env` file or secrets configured for:
    - `VITE_SCHEDULER_PROVIDER`: "cal" or "calendly" (optional)
    - `VITE_SCHEDULER_URL`: Your scheduling link (optional)
2.  **Install Dependencies**: Run `npm install`.
3.  **Development Mode**: Run `npm run dev` to start both the frontend (Vite) and backend (Express).

**Production Deployment**:
The site is built as a single artifact.
1.  **Build**: `npm run build`.
2.  **Run**: `npm start`.

### 3. How to Manage Blog Posts

Blog posts are MDX files in `content/blog/`. Each file has a frontmatter block followed by the article body in Markdown.

**Steps to add a post:**
1.  Create a new file `content/blog/<short-name>.mdx`.
2.  Add frontmatter (between `---` lines):
    ```yaml
    ---
    slug: my-new-post-slug
    title: "Article title"
    excerpt: "One-sentence summary shown on the listing page."
    category: "Operations"   # or Marketing, Site Selection, etc.
    date: "2026-05-01"
    readTime: "6 min read"
    image: "https://images.unsplash.com/..."   # hero image URL
    ---
    ```
3.  Write the body in Markdown below the frontmatter. Headings (`##`, `###`), lists, links, and tables (via remark-gfm) are all rendered.
4.  Save. The server picks it up automatically — the post appears on `/blog` and at `/blog/<slug>`.

The legacy hardcoded posts in `server/content/blog.ts` are only used as a fallback if the MDX directory cannot be read.

---

## External Dependencies

### Core Dependencies

**Frontend:**
- react, wouter, lucide-react, framer-motion, @tanstack/react-query

**UI:**
- shadcn/ui (Radix UI primitives), tailwindcss

**Backend:**
- express, zod, drizzle-orm
