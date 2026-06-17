## Highway Setu — Premium Product Showcase Site

A multi-route, cinematic marketing site built on the existing TanStack Start + Tailwind v4 + shadcn stack. Dark premium theme, glassmorphism, animated gradients, scroll-triggered Framer Motion animations. All CTAs are visual; "Watch Demo" opens a styled modal with a swappable placeholder video.

### Tech choices
- **Framer Motion** (`motion`) for scroll reveals, parallax, counters, timeline, staggered cards.
- **Tailwind v4 tokens** in `src/styles.css` — define the dark palette and per-role accent gradients (blue / purple / orange / green) plus glow + glass utilities.
- **lucide-react** for SVG icons (already available), shadcn `dialog` for the demo modal.
- Self-contained animated mockups (CSS + Motion) for all "dashboard previews" — no real backend, no external data.
- Smooth scrolling via CSS `scroll-behavior` + Motion `useScroll` parallax.

### Routes (file-based, each with its own SEO head())
```
src/routes/
  __root.tsx            -> add fonts, sticky nav, footer, page-load + route transitions
  index.tsx             -> Home: hero, problem, solution ecosystem, role teasers,
                           how-it-works, platform features, dashboard, why, tech,
                           testimonials, CTA
  drivers.tsx           -> Truck Driver (blue)
  mechanics.tsx         -> Mechanic (purple)
  dhaba.tsx             -> Dhaba Owner (orange)
  fleet.tsx             -> Fleet Manager (green)
```
Each role route reuses a shared `RolePage` template (headline, animated illustration band, feature grid, dashboard mockup, CTA) parameterized by an accent theme.

### Shared components (`src/components/`)
- `layout/Navbar.tsx` — sticky glass nav with role dropdown, links to all routes, scroll-aware background.
- `layout/Footer.tsx` — premium footer: nav, contact, socials, privacy/terms.
- `layout/PageTransition.tsx` + `LoadingScreen.tsx` — page-load animation and section fade transitions.
- `ui/GlowCursor.tsx` — interactive glowing cursor (desktop only, disabled on touch).
- `ui/TiltCard.tsx`, `ui/GlassCard.tsx`, `ui/GradientText.tsx`, `ui/AnimatedCounter.tsx`, `ui/Marquee.tsx`, `ui/Reveal.tsx` (scroll-trigger wrapper), `ui/NoiseOverlay.tsx`, `ui/AnimatedBackground.tsx` (floating gradient blobs).
- `ui/DemoModal.tsx` — shadcn dialog with placeholder `<video>` (swappable src) + glass framing.

### Home sections (in order)
1. **Hero** — headline "Connecting Every Mile of India's Highway Ecosystem", subheadline, Explore Platform + Watch Demo buttons, parallax night-highway background (layered CSS gradients + animated glowing road lines, moving truck-light streaks, parallax mountain silhouettes, floating UI mockup cards).
2. **Problem** — animated storytelling cards for the 8 listed pain points, staggered reveal.
3. **Solution** — animated ecosystem diagram (Driver ⇄ Fleet ⇄ Mechanic ⇄ Dhaba) with SVG connection lines that draw in on scroll.
4. **Role teasers** — four glass cards (one per role, accent-colored) linking to role routes.
5. **How It Works** — vertical animated timeline (Choose Role → Register → Verification → Dashboard → Manage → Grow).
6. **Platform Features** — interactive grid (12 features); hover opens a premium detail modal/popover.
7. **Interactive Dashboard** — animated preview with counters (Revenue, Drivers, Vehicles, Trips, Maintenance, Fuel, Notifications, Expenses) and charts that grow on scroll.
8. **Why Highway Setu** — animated comparison table (Traditional vs Highway Setu) with animated checks/crosses.
9. **Tech Stack** — animated cards (Frontend, Backend, Cloud, Database, Security, Maps, Analytics).
10. **Testimonials** — premium auto-advancing carousel across the four personas.
11. **CTA** — "Ready to Transform Highway Operations?" with Get Started + Book a Demo.

### Role pages (full template per role)
Each: themed hero with role headline + animated illustration (e.g. truck moving on scroll for drivers, car-into-workshop for mechanics, food/order cards for dhaba, dashboard widgets for fleet), full feature grid from the spec, animated dashboard mockup, and a CTA. Accent color and illustration vary by role; structure stays consistent.

### Design tokens (added to `src/styles.css`)
- Base background `#050816` (oklch), foreground near-white, glass surface tokens.
- Accent gradient tokens: `--accent-blue`, `--accent-purple`, `--accent-emerald`, `--accent-orange` + matching glow shadows.
- `@utility` helpers: `.glass`, `.glow-*`, `.text-gradient`, animated-gradient background, noise overlay.
- Web font via `<link>` in `__root.tsx` head (e.g. a clean geometric sans like Sora/Space Grotesk for display + body) — referenced through `@theme` `--font-*` tokens (no URL `@import` in CSS).

### Responsiveness & polish
- Mobile-first: nav collapses to a sheet, grids reflow, parallax/glow-cursor disabled on touch, heavy animations reduced with `prefers-reduced-motion`.
- Each route gets distinct title / description / og metadata.

### Notes / out of scope
- No real Lottie JSON files (avoids large binary deps) — "Lottie-style" illustrations are implemented as looping SVG/CSS+Motion animations. Real `.lottie` assets can be added later if desired.
- Demo video is a placeholder element with an easily swappable `src`.
- No backend; all data is static in the components.

I'll build the design system and shared layout first, then the home page, then the four role pages, and verify in the preview.
