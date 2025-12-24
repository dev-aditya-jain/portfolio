# Design Guidelines for Aditya Jain's Professional Portfolio

## Design Approach
**System**: Modern professional tech aesthetic drawing from Linear's clean typography and GitHub's technical credibility, combined with Tailwind's utility-first patterns. This creates a polished, scannable experience optimized for recruiter evaluation.

## Typography System
- **Headings**: Inter or DM Sans - weights 700 (main headings), 600 (subheadings), 500 (section labels)
- **Body**: Inter or System UI stack - weight 400 (body), 500 (emphasis)
- **Code/Technical**: JetBrains Mono or Fira Code for tech stack tags
- **Hierarchy**: 
  - Hero name: text-5xl lg:text-6xl
  - Section headings: text-3xl lg:text-4xl
  - Job titles: text-xl lg:text-2xl
  - Body text: text-base lg:text-lg
  - Labels/metadata: text-sm

## Layout System
**Spacing Primitives**: Use Tailwind units of 4, 6, 8, 12, 16, 24 for consistency (p-4, mb-8, gap-6, etc.)

**Container Structure**:
- Max width: max-w-6xl for content sections
- Section padding: py-16 lg:py-24
- Inner spacing: gap-8 lg:gap-12 between major elements
- Card padding: p-6 lg:p-8

**Grid Patterns**:
- Skills grid: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4
- Contact info: flex with gap-6 for horizontal layout on desktop
- Timeline: Single column with left border accent

## Component Library

### Hero Section
- Full-width section with max-w-6xl container
- Two-column layout on desktop: Professional headshot (left, ~30% width) + content (right, ~70%)
- Mobile: Stack vertically, headshot centered with moderate size
- Content includes: Name (large), title/role, one-line value proposition, contact links (email, phone, LinkedIn), CTA button for resume download
- Professional headshot: rounded corners (rounded-xl), subtle shadow

### Professional Summary
- Single column, max-w-4xl centered
- Lead paragraph with increased line-height (leading-relaxed)
- Background card with subtle border

### Work Experience Timeline
- Vertical timeline with visual connector line (left border with dots at each position)
- Each position card includes:
  - Company name + role (bold hierarchy)
  - Date range (muted text)
  - 3-4 key achievements as bulleted list
  - Tech stack as pill-style tags with monospace font
- Cards have subtle border and hover elevation effect

### Skills Section
- Category-based organization (DevOps, Cloud, Monitoring, etc.)
- Grid layout with skill category cards
- Each card: Category heading + list of technologies
- Tech items as inline badges/pills with icon (if applicable from Heroicons)

### Education Section
- Compact card format
- Degree, institution, years, specialization
- Can be single or two-column depending on content amount

### Navigation (if sticky header)
- Clean horizontal nav with name/logo left, links right
- Download Resume button prominently placed
- Smooth scroll to sections

### Buttons & CTAs
- Primary CTA: Download Resume (solid background with blur when over images)
- Secondary: Contact links (outline style)
- Rounded corners: rounded-lg
- Padding: px-6 py-3 for primary actions

### Cards & Containers
- Border: 1px solid with subtle color
- Border radius: rounded-lg for cards, rounded-xl for hero image
- Shadow: Minimal shadow on cards, slightly elevated on hover (transition-all duration-300)

## Images

**Hero Headshot**: 
- Professional portrait of Aditya Jain
- Placement: Left side of hero section (desktop), centered above content (mobile)
- Treatment: Rounded corners (rounded-xl), aspect ratio 1:1 or 4:5
- Size: ~300-400px width on desktop, ~200px on mobile
- Description: Professional headshot with neutral/office background, business casual attire, conveying technical professionalism

**No other images required** - this is content-focused, text and data-driven

## Interactions & Animations
- Smooth scroll behavior for navigation
- Subtle hover states on cards (slight elevation, border color change)
- Timeline dots animate in on scroll (optional enhancement)
- NO distracting animations - maintain professional restraint

## Accessibility & Responsiveness
- Clear focus indicators for keyboard navigation
- Semantic HTML (section, article, nav)
- Proper heading hierarchy (h1 for name, h2 for sections, h3 for subsections)
- Mobile-first breakpoints: base (mobile), md (tablet ~768px), lg (desktop ~1024px)
- Touch-friendly tap targets (minimum 44px)

## Icons
**Library**: Heroicons (outline style for consistency)
- Location pin for contact info
- Envelope for email
- Phone icon
- External link for LinkedIn
- Download icon for resume button
- Check marks or badge icons for achievements

## Page Structure Flow
1. Hero (viewport height on desktop, auto on mobile)
2. Professional Summary (py-16)
3. Work Experience (py-20, most content-heavy section)
4. Skills (py-16, organized grid)
5. Education (py-12, compact)
6. Footer (py-8, minimal with copyright/links)

**Visual Rhythm**: Consistent section spacing creates scannable, professional hierarchy recruiters expect from technical portfolios.