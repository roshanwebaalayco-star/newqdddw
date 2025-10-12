# CLC Retail Group - Modern Marketing Website

A production-ready, accessible, and responsive marketing website for CLC Retail Group built with React, TypeScript, and Tailwind CSS.

## 🚀 Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom design tokens
- **UI Components**: Radix UI primitives
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Form Validation**: React Hook Form + Zod
- **Routing**: Wouter (lightweight client-side routing)
- **Backend**: Express.js (Node.js)

## 🎨 Design System

### Brand Colors
- **Primary (Dark Charcoal)**: `#2C2E3A`
- **Accent (Rose-Gold/Copper)**: `#B08A7C`
- **Text**: `#FFFFFF` / `#F5F5F5`

### Typography
- **Headings**: Montserrat, Poppins (fallback)
- **Body Text**: Open Sans, Lato (fallback)

### Design Tokens
All brand colors and design tokens are defined in CSS variables in `client/src/index.css`:
```css
--color-clc-bg: #2C2E3A;
--color-clc-fg: #F5F5F5;
--color-clc-accent: #B08A7C;
--radius-xl: 1.25rem;
--shadow-ambient: 0 4px 24px -4px rgba(44, 46, 58, 0.12);
```

## 📄 Pages

1. **Home** (`/`) - Hero section, trust indicators, services preview, testimonials, CTA
2. **About** (`/about`) - Company story, mission, values, timeline
3. **Services** (`/services`) - Complete service offerings with detailed features
4. **Blog** (`/blog`) - Blog posts grid with pagination
5. **Contact** (`/contact`) - Contact form with validation, contact info, map

## 🏗️ Project Structure

```
/app
├── client/                 # Frontend React app
│   ├── public/            # Static assets (logo, images)
│   ├── src/
│   │   ├── components/    # Reusable React components
│   │   ├── pages/         # Page components
│   │   ├── hooks/         # Custom React hooks
│   │   ├── lib/           # Utilities and helpers
│   │   └── index.css      # Global styles and design tokens
│   └── index.html         # HTML entry point
├── server/                # Express backend
│   ├── index.ts          # Server entry point
│   ├── routes.ts         # API routes
│   └── vite.ts           # Vite dev server config
└── package.json          # Dependencies and scripts
```

## 🛠️ Getting Started

### Installation

```bash
# Install dependencies
npm install

# Development mode (with hot reload)
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

The application will be available at `http://localhost:5000`

## 🎯 Key Features

### Accessibility (WCAG 2.2 AA Compliant)
- ✅ Semantic HTML landmarks
- ✅ Proper heading hierarchy
- ✅ Labeled form controls
- ✅ Keyboard navigation support
- ✅ Focus visible indicators
- ✅ Color contrast ratios meet AA standards
- ✅ Motion-reduced support for animations
- ✅ Comprehensive `data-testid` attributes for testing

### Performance Optimizations
- ✅ Lazy-loaded images from Unsplash CDN
- ✅ Code splitting with Vite
- ✅ Optimized bundle size
- ✅ Responsive images with proper aspect ratios
- ✅ Font preloading (Google Fonts)
- ✅ Efficient animations (Framer Motion with reduced motion support)

### Responsive Design
Breakpoints tested:
- Mobile: 360px, 375px, 414px
- Tablet: 768px, 1024px
- Desktop: 1280px, 1536px, 1920px

### SEO
- ✅ Meta tags (title, description)
- ✅ Open Graph tags for social sharing
- ✅ Semantic HTML structure
- ✅ Descriptive alt text for images
- ✅ Clean URL structure with Wouter routing

## 📝 Content Management

### Adding Blog Posts

Blog posts are defined in `/app/client/src/pages/Blog.tsx`. To add a new post:

```typescript
{
  id: "unique-id",
  title: "Your Blog Post Title",
  excerpt: "A brief 2-3 sentence summary...",
  date: "January 15, 2025",
  image: "https://images.unsplash.com/photo-...",
  slug: "url-friendly-slug",
}
```

### Updating Contact Information

Edit `/app/client/src/pages/Contact.tsx` and `/app/client/src/components/Footer.tsx` to update:
- Phone number
- Email address
- Physical address
- Social media links

### Changing Brand Colors

Update CSS variables in `/app/client/src/index.css`:
```css
:root {
  --color-clc-bg: #2C2E3A;     /* Primary color */
  --color-clc-fg: #F5F5F5;     /* Text color */
  --color-clc-accent: #B08A7C; /* Accent color */
}
```

## 🧩 Reusable Components

### Core Components
- `<Header />` - Sticky navigation with mobile menu
- `<Footer />` - Site footer with links and contact info
- `<HeroSection />` - Hero sections with background images
- `<Logo />` - Brand logo component
- `<AnimatedSection />` - Wrapper for scroll animations
- `<BackToTop />` - Scroll-to-top button
- `<StickyCTA />` - Floating call-to-action button

### Content Components
- `<TrustGrid />` - Trust indicators with icons
- `<ServicesGrid />` - Service offerings grid
- `<ServicesPreview />` - Services preview cards
- `<ValuesCard />` - Company values display
- `<BlogCard />` - Blog post card
- `<EnhancedContactForm />` - Contact form with validation
- `<TestimonialsSlider />` - Testimonials carousel
- `<Timeline />` - Company history timeline
- `<Newsletter />` - Email newsletter signup

## 🧪 Testing

All interactive elements include `data-testid` attributes for testing:

```typescript
// Example usage
<Button data-testid="button-cta-header">Start Your Business</Button>
<input data-testid="input-fullName" name="fullName" />
```

## 📊 Performance Checklist

- ✅ Images optimized and lazy-loaded
- ✅ Minimal JavaScript bundle
- ✅ CSS-in-JS avoided (Tailwind CSS used)
- ✅ Preconnect to external domains
- ✅ Font loading optimized
- ✅ Motion-reduced support

## ♿ Accessibility Checklist

- ✅ All form fields have labels
- ✅ Interactive elements have visible focus states
- ✅ Color contrast meets WCAG AA (4.5:1 for text, 3:1 for UI)
- ✅ Semantic HTML landmarks (header, nav, main, footer)
- ✅ Keyboard navigation works throughout
- ✅ Motion reduced for users who prefer it
- ✅ Alt text provided for all images
- ✅ ARIA labels for icon-only buttons

## 🔧 Configuration Files

- `tailwind.config.ts` - Tailwind CSS configuration
- `vite.config.ts` - Vite build configuration
- `tsconfig.json` - TypeScript configuration
- `postcss.config.js` - PostCSS configuration
- `components.json` - Radix UI components configuration

## 📦 Production Deployment

1. Build the application:
   ```bash
   npm run build
   ```

2. The build output will be in `/dist` folder

3. Start production server:
   ```bash
   npm start
   ```

4. Environment variables:
   - `PORT` - Server port (default: 5000)
   - `NODE_ENV` - Environment (development/production)

## 🎨 Customization

### Changing Hero Images

Hero images are defined at the top of each page component. Replace the Unsplash URLs with your own:

```typescript
const heroImage = "https://images.unsplash.com/photo-...";
```

### Modifying Services

Edit the `services` array in `/app/client/src/pages/Services.tsx`:

```typescript
const services = [
  {
    title: "Service Name",
    description: "Service description",
    icon: IconComponent,
    features: ["Feature 1", "Feature 2"]
  }
];
```

### Updating Company Values

Edit the `values` array in `/app/client/src/pages/About.tsx`.

## 🐛 Troubleshooting

**Issue**: Images not loading
- Check that image URLs are accessible
- Verify `/app/client/public/` contains the logo.jpeg file

**Issue**: Styles not applying
- Run `npm install` to ensure Tailwind is installed
- Check that `index.css` is imported in `main.tsx`

**Issue**: Build errors
- Clear node_modules: `rm -rf node_modules && npm install`
- Check TypeScript errors: `npm run check`

## 📄 License

Copyright © 2025 CLC Retail Group. All rights reserved.

## 🤝 Support

For questions or support, contact:
- Email: info@clcretailgroup.com
- Phone: (555) 123-4567

---

Built with ❤️ for CLC Retail Group
