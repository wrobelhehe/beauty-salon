# Serene Atelier — Luxury Beauty Salon Landing (Next.js App Router)

## 1) Creative Direction Document
### Brand Essence & Tone
- **Mood:** Cinematic calm, tactile softness, confident femininity, crafted for Awwwards/FWA/CSSDA juries.
- **Visual DNA:** Warm neutrals, blush haze, soft gold glints, deep ink-black framing. Organic curved panels with matte glassmorphism and gentle grain overlays.
- **Photography:** Soft-focus editorial close-ups, skin glow macro shots, tactile linen backdrops, bokeh candlelight. Color-graded to warm blush with muted highlights.
- **Typography:**
  - Headings: Modern luxury serif (e.g., `Canela/Editorial New` alternative via self-hosted variable luxury serif). Wide tracking at large sizes, tight at body.
  - Body/UI: Refined grotesk sans (e.g., `Söhne/Inter Tight` alt). Uppercase micro-labels with letterspacing for navigation.
- **Color System (Hex):**
  - Blush Veil `#F7E9E3`
  - Sandstone `#E5D7CB`
  - Oyster Matte `#D8CCC2`
  - Soft Gold `#C9A56A`
  - Velvet Rose `#B67A74`
  - Deep Noir `#0C0A0A`
  - Mist Glow (gradient stop) `rgba(255, 255, 255, 0.22)` for glassmorphism.
- **Materiality:** Matte glass panels with subtle blur (backdrop-filter), faint grain texture overlay, soft inner shadows. Curved wave dividers hinting at silk drapery.
- **Iconography:** Minimal line icons with rounded terminals, soft gold strokes; micro-dots and thin divider hairlines in `rgba(255,255,255,0.08)` on dark.

### Interaction Philosophy
- **Cinematic pacing:** Orchestrated scene transitions with ScrollTrigger; text reveals cascade like breathing. Slow parallax to evoke airy calm.
- **Micro-elegance:** Hover lifts with soft gold sheen and shadow bloom; click compress + spring back (GSAP). Cursor-follow aura on CTAs.
- **Reduced motion:** Prefers-reduced-motion falls back to fade/slide with no parallax or morphs.
- **Soundless luxury:** No sound, pure visual tactility.

### Mood & Storytelling Strategy
- **Narrative arc:**
  1. **Arrival (Hero):** Introduce “Serene Atelier” with layered photography, poetic strapline, and appointment CTA.
  2. **Atmosphere:** Describe the sensorial environment—materials, scent, ritual.
  3. **Treatments:** Modular service tiles with editorial imagery and price clarity.
  4. **Testimonials:** Floating cards, softly animated stars, human tone.
  5. **Gallery:** Horizontal slow-scroll reel with subtle depth.
  6. **Pricing & Packages:** Modular grid with lighting gradients.
  7. **CTA Footer:** Minimal, gold underline on hover, micro-animated social icons.

## 2) Landing Page Structure & Layout
- **Grid:** Mobile-first 4-column fluid grid → 12-column at 1024px+. Max width 1200–1320px with generous 80–120px padding on desktop; 24px gutters mobile.
- **Spacing Scale:** 8px base rhythm with expanded luxury spacers (24/32/48/64px). Section vertical rhythm: mobile 80–120px, desktop 140–200px.
- **Section Blueprint:**
  1. **Hero (Scene 01):**
     - Full-height viewport with layered parallax: background gradient + blurred photo; mid-layer floating petals; foreground serif headline + CTA pair (primary blush pill, secondary ghost). Animated cursor-follow glow on CTA.
     - Side micro-nav dots for desktop with ScrollTrigger syncing.
  2. **Atmosphere Story (Scene 02):** Split panel with curved mask photo + narrative copy; soft gold rule and mini facts (duration, signature scent, therapist count).
  3. **Services (Scene 03):** Three-up cards on desktop (carousel on mobile). Each card: image with inset gradient, service name, time, price tag chip, microcopy. Hover: tilt/parallax + gold sheen.
  4. **Benefits / Ritual Philosophy (Scene 04):** Floating organic tiles around centered heading; slow floating animation; icons in soft gold linework.
  5. **Testimonials (Scene 05):** Horizontal cards with subtle glass, floating stars, magnetic hover; backdrop dark with blush gradient beams.
  6. **Pricing & Packages (Scene 06):** Modular pricing grid with gentle spotlight gradient behind each tile; toggle for single session vs packages.
  7. **Gallery (Scene 07):** Horizontal scroll with GSAP scrub; parallax depth + grain overlay. On mobile, snap scroll.
  8. **CTA + Appointment (Scene 08):** Minimal form teaser with pill CTA opening overlay sidebar booking.
  9. **Footer (Scene 09):** Elegant micro-animations: social icons with gold underline, contact details, micro brand monogram.

## 3) GSAP Animation Blueprint
- **Global Settings:** Use `gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, Draggable)` inside client-only providers. Respect `prefers-reduced-motion` to disable advanced effects.
- **Hero Animations:**
  - **Layered Parallax:** Background photo `yPercent: -6 → 0`, mid-layer petals `yPercent: -12 → 6`, foreground headline `y: 40 → 0`, `opacity: 0 → 1`, `ease: power3.out`, `duration: 1.4` staggered.
  - **Text Reveal:** Split lines (SplitType) or manual wrappers; `stagger: 0.08`, `clipPath` wipe + `opacity` fade.
  - **Perspective Zoom:** On first scroll/interaction: hero container scales `0.98 → 1` with `transformOrigin: 'center center'`, `duration: 1.2`, `ease: expo.out`.
- **ScrollTrigger Sequences:**
  - Atmosphere section pins for 40% viewport; gradient morph from blush to gold tied to scroll progress.
  - Services cards reveal per row: `y: 40 → 0`, `opacity: 0 → 1`, `duration: 0.9`, `stagger: 0.12`.
  - Benefits tiles float with `y: -12/12` oscillation via `gsap.to` with `repeat: -1`, `yoyo: true`, `ease: sine.inOut`.
  - Testimonials horizontal scroll: container `ScrollTrigger` with `horizontal: true`, `pin: true`, `scrub: 1` for depth.
  - Pricing spotlight: radial gradient overlay animated via CSS custom props; ScrollTrigger scrubs `--glow-x/y` to mouse position.
  - Gallery parallax: multi-layer images `xPercent` offsets; slow scrub for cinematic feel.
- **Micro Interactions:**
  - Hover lift: `y: -6`, `boxShadow: '0 20px 40px rgba(0,0,0,0.14)'`, `duration: 0.32`, `ease: power2.out`.
  - Gold sheen on hover: pseudo-element gradient animated with GSAP keyframes across button surface.
  - Click compression: `scale: 0.97` then spring to `1` with `ease: elastic.out(1, 0.6)`.
  - Cursor aura: custom cursor component tracking mouse, with GSAP `quickSetter` for 60fps.
- **Sidebar / Hamburger:**
  - Morph hamburger to close via SVG path morph (GSAP MorphSVG). Sidebar slides from right with `duration: 0.6`, `ease: power3.out`, and nav items staggered `0.08` blur → sharp.

## 4) Next.js Implementation Plan (App Router + TypeScript)
### Tech Choices
- **Styling:** Tailwind CSS with layered design tokens via CSS variables (for palette, shadows, radii) + `@layer components` for glass panels. Tailwind chosen for rapid responsive grid + consistency; custom utilities for grain overlay and gradients. Critical bespoke styles via CSS Modules for complex masks when needed.
- **Fonts:** Self-hosted variable serif & grotesk via `next/font/local`, preloaded for hero/heading. Fallback stack defined.
- **Images:** `<Image>` with blurDataURL placeholders; art-directed sources per breakpoint; `priority` for hero.
- **State/Animation:** GSAP loaded only in client components; dynamic import heavy sequences (`import('gsap/dist/ScrollTrigger')`). Context for reduced-motion preference.

### Folder Structure
```
/app
  layout.tsx           # metadata, fonts, base styles
  page.tsx             # server component assembling sections
  /(components)
    /ui                # buttons, cards, badges, chips
    /layout            # header, footer, sidebar, grids
    /animations        # gsap hooks, cursor, scroll components (client)
  /sections            # hero, atmosphere, services, benefits, testimonials, pricing, gallery, cta
  /styles              # tailwind config extensions, global css
  /lib                 # content models, animation configs, constants
  /api                 # form endpoints if needed
```

### Component Responsibilities
- **Server Components:** Section shells, data fetching (services, testimonials), metadata, static content to minimize JS.
- **Client Components:**
  - `HeroMotion`: handles GSAP hero timeline.
  - `ScrollScenes`: wraps ScrollTrigger setup for sections; lazy-loaded.
  - `InteractiveCard`: hover/click micro-interactions.
  - `SidebarMenu`: hamburger morph + slide-in.
  - `CursorAura`: custom cursor effects (hidden on touch devices).

### Performance & SEO
- Prefetch critical assets; `priority` hero image; `preconnect` to font domains; `export const metadata` with OG/Twitter + `openGraph.images` optimized.
- Code-splitting: `dynamic(() => import('../components/animations/ScrollScenes'), { ssr: false })` for heavy GSAP.
- Use `Suspense` for non-critical carousels.
- Lazy-load gallery images, set proper `sizes`.
- Optimize for 60fps: use `will-change`, `transform` animations, avoid layout thrash; GSAP `quickSetter` for cursor.

### Accessibility
- Semantic landmarks (`header`, `main`, `section`, `nav`, `footer`).
- Keyboard-friendly: focus-visible styles, escape-to-close sidebar.
- `prefers-reduced-motion` hook to disable parallax/morph; ensure color contrast (AA) by testing palette pairs.
- ARIA labels for hamburger, carousel controls, testimonials rating.

## 5) Visual System Tokens
- **Radii:** xs 8px, sm 14px, md 22px, lg 32px (for glass panels/pills). Organic masks via clip-path on hero panels.
- **Shadows:**
  - Soft Lift: `0 24px 60px rgba(0,0,0,0.18)`
  - Glow: `0 0 0 1px rgba(255,255,255,0.08), 0 10px 30px rgba(201,165,106,0.25)`
- **Gradients:** `linear-gradient(135deg, rgba(247,233,227,0.9) 0%, rgba(182,122,116,0.25) 45%, rgba(12,10,10,0.9) 100%)`; spotlight radial `radial-gradient(circle at var(--glow-x,50%) var(--glow-y,50%), rgba(201,165,106,0.35), rgba(12,10,10,0.9) 60%)`.
- **Texture:** Subtle grain layer via pseudo-element using `background-image: url('/textures/grain.png'); mix-blend-mode: soft-light; opacity: 0.25`.

## 6) Content Blocks (Copy Hooks)
- **Hero:** “Serene Atelier — Where ritual becomes radiance.” CTA primary “Reserve a Ritual”, secondary “View Menu”.
- **Atmosphere:** “Matte light, warm stone, and rosewood—space that slows your breath.”
- **Services:** Massage / Facial / Body Polish / Brow Atelier / Glow IV. Price tags as chips.
- **Testimonials:** “Loved by women who choose calm.” Floating star rating.
- **Pricing:** “Memberships crafted for continuity.” Toggle for single vs ritual series.
- **CTA:** “Book a signature ritual — we’ll tailor every detail to you.”

## 7) Implementation Steps (High-Level)
1. Scaffold Next.js App Router project with Tailwind + TypeScript; set `experimental` features as needed.
2. Add `fonts.ts` with `next/font/local` for serif & sans; wire into `layout.tsx` classes.
3. Define `design-tokens.css` in `/app/styles` with CSS variables for colors, radii, shadows, gradients.
4. Build base UI primitives: `Button`, `Pill`, `Card`, `Chip`, `Badge`, `GlassPanel` using Tailwind + tokens.
5. Build layout components: `Header` (transparent to solid on scroll), `SidebarMenu`, `Footer`, `CursorAura` (client).
6. Compose sections in `/app/sections` as server components; inject client animation wrappers where needed.
7. Implement GSAP hooks in `/app/components/animations`: `useHeroParallax`, `useScrollScenes`, `useHoverSheen`, `useMagnetic`.
8. Add reduced-motion hook and apply conditional classes/animations.
9. Optimize images with `<Image>` and `sizes`; preload hero.
10. Configure metadata in `layout.tsx`; add structured data (LocalBusiness) in `page.tsx` via JSON-LD.
11. QA for accessibility (tab order, focus states, ARIA) and performance (Lighthouse/Next.js analytics).

## 8) Testing & QA Notes
- Run `npm run lint` and `npm run test` (if configured).
- Use `next dev` for interactive check of animations; ensure no hydration mismatch by isolating GSAP to client components.
- Validate contrast with tooling; test reduced-motion preference.

---
This blueprint combines luxury creative direction with a modern, performant Next.js implementation ready for an Awwwards-level launch.
