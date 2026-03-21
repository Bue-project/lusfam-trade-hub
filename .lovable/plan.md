

## Make the Site More Interactive and Dynamic

The current site has basic fade-in animations but lacks engagement. Here's a plan to add life and interactivity across all homepage sections.

### Changes

**1. Hero Section — Animated counter + typing effect**
- Add a subtle parallax shift on the hero image that responds to scroll
- Animate the word "Reliably." with a text reveal/typewriter effect
- Add a pulsing glow on the "Request a Quote" CTA button

**2. Stats Section — Animated number counters**
- Replace static stat values with counting-up animations (e.g., 0 → 1.2M) that trigger when scrolled into view
- Add a subtle hover lift effect on stat cards

**3. Product Tiles — Hover interactions**
- Add card tilt/lift on hover with icon scale and color shift
- Animate the icon background from `primary/10` to `primary/20` on hover
- Add a slide-in underline on the "Details" link

**4. Map Preview — Interactive hover state**
- Highlight map pins on hover with a pulsing ring animation
- When hovering a region card on the right, highlight the corresponding pin on the map (and vice versa) — sync hover state between map and list
- Add animated dashed route lines between pins

**5. Transaction Flow — Step-by-step reveal**
- Animate the connector line drawing across as steps appear (using a growing width animation)
- Add a scale-up bounce on each step circle as it enters the viewport
- Hover on a step highlights it with a gold ring

**6. Global micro-interactions**
- Smooth scroll-to-section behavior for anchor links
- Add hover scale effect to all card components
- WhatsApp FAB gets a gentle bounce animation on page load

### Technical approach
- All animations use Framer Motion (already installed) — `useInView`, `useScroll`, `useTransform`, `useMotionValue`
- Number counter uses a custom hook with `requestAnimationFrame`
- Map-list hover sync uses shared React state (already patterned in Markets page)
- No new dependencies needed

### Files modified
- `src/components/HeroSection.tsx` — parallax, text reveal, CTA pulse
- `src/components/StatsSection.tsx` — counting animation, hover lift
- `src/components/ProductTilesSection.tsx` — hover card effects
- `src/components/MapPreviewSection.tsx` — interactive pin/card hover sync, pulse rings
- `src/components/TransactionFlowSection.tsx` — line draw, step bounce
- `src/components/WhatsAppFAB.tsx` — entry bounce animation

