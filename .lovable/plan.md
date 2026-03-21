

## Problem

The Energy Gold color (`hsl(45, 78%, 46%)`) is used as `text-primary` throughout the site for labels, icons, and links against white backgrounds. At 46% lightness, it fails WCAG AA contrast requirements (~2.8:1 ratio vs the required 4.5:1).

## Solution

Darken the primary color from 46% to 38% lightness. This produces a richer, deeper gold that maintains brand identity while achieving readable contrast on white.

### Changes

**`src/index.css`** — Update the `--primary` CSS variable:
- Light mode: `45 78% 46%` → `45 78% 38%` (darker gold, ~4.5:1 contrast on white)
- Dark mode: keep current value or lighten slightly for dark backgrounds

This single change propagates everywhere `text-primary`, `bg-primary`, `bg-primary/10`, etc. are used — no component changes needed.

