# CLC Retail Group - Design Guidelines

## Design Approach
**Glassmorphic Modern Design** - Professional, trust-building aesthetic combining dark sophistication with warm rose gold accents and frosted glass effects throughout.

## Core Design Elements

### A. Color Palette
**Primary Colors:**
- Background/Primary: Dark Gray/Charcoal (#2C2E3A / 235 20% 20%)
- Accent: Rose Gold/Copper (#B08A7C / 20 28% 60%)
- Text Primary: White (#FFFFFF)
- Text Secondary: Light Gray (#F5F5F5)

**Dark Mode:** Native dark theme with consistent glassmorphism

### B. Typography
**Font Families:**
- Headings: Montserrat or Poppins (bold, semi-bold weights)
- Body Text: Open Sans or Lato (regular, medium weights)

**Hierarchy:**
- H1: 48-56px, bold (hero headlines)
- H2: 36-42px, semi-bold (section headings)
- H3: 28-32px, medium (subsections)
- Body: 16-18px, regular

### C. Layout System
**Spacing:** Consistent padding using py-12, py-16, py-20, py-24 for sections
**Container:** max-w-7xl for main content areas
**Grid Systems:** 3-column for features/services, 2-column for contact/about content

### D. Component Library

**Glassmorphism Cards:**
- Frosted glass backgrounds with blur effects
- Subtle borders with opacity
- Shadow: soft, elevated appearance
- Hover: slight scale or glow effect

**Navigation Header:**
- Logo left, navigation center-right, CTA button far right
- Semi-transparent background with backdrop blur on scroll
- Rose gold CTA: "Start Your Business"

**Buttons:**
- Primary: Rose gold background, white text, smooth hover scale
- Outline (on images): Blurred background, rose gold border, no custom hover
- Rounded corners (8-12px)

**Footer:**
- Multi-column layout (logo/about, navigation, contact, social)
- Dark background with rose gold accent links
- Copyright centered bottom

### E. Visual Effects
**Glassmorphism Implementation:**
- Backdrop blur filters on cards and sections
- Semi-transparent backgrounds (rgba with 0.1-0.3 opacity)
- Subtle light borders for definition

**Animations:**
- Fade-in on scroll for content sections
- Smooth hover scale (1.02-1.05) on cards and buttons
- Subtle parallax on hero sections
- Transition duration: 300-400ms ease-in-out

## Page-Specific Layouts

### Home Page
**Hero:** Full-viewport with background image/video, centered headline + subheadline + CTA
**Trust Grid:** 3-4 glassmorphic icon cards (Partnership, Expertise, Complete Solution)
**Services Preview:** 3-column grid with glassmorphic cards linking to Services
**Final CTA:** Full-width section with rose gold accent

### About Page  
**Hero:** Professional group photo background
**Mission:** Single column with max-w-4xl prose layout
**Values Grid:** 5 glassmorphic cards in responsive grid (2-3 columns)

### Services Page
**Hero:** Headline + subheadline on subtle background
**Services Grid:** 4 glassmorphic cards with icons (storefront, map pin, box, megaphone)

### Contact Page
**Split Layout:** Form (left) + Info/Map (right) on desktop
**Form:** Glassmorphic container with rose gold submit button
**Map:** Embedded Google Maps with glassmorphic overlay

### Blog Page
**Hero:** Simple headline section
**Blog Grid:** 3-column responsive grid with post cards (image, headline, date, excerpt)
**Newsletter CTA:** Glassmorphic signup section at bottom

## Images

**Large Hero Images Required:**
- Home: Modern retail store scene with people managing business
- About: Professional team/group photo
- Services: Business partnership or retail setup imagery
- Contact: Office/consultation space (optional, can use gradient)
- Blog: Industry-related header image or pattern

**Icon Usage:** Font Awesome or Heroicons for service/feature icons

## SEO & Accessibility
- Semantic HTML5 structure (proper H1-H3 hierarchy)
- Meta titles and descriptions for all pages
- Alt text on all images
- ARIA labels for navigation and forms
- Mobile-first responsive breakpoints

## Performance
- Optimized images (WebP format preferred)
- Minified assets
- Fast loading times (<3s)
- Smooth 60fps animations