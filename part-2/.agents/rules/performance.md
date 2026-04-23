---
activation: always
---

# Performance Rules

This is a **single Hero section page** — it must be lightweight and ship a great Core Web Vitals score.

## Hard Rules

| Concern | Rule |
|---------|------|
| Images | Use `next/image` with explicit `width` + `height`. Never use `<img>` directly. |
| Fonts | Load via `next/font/google` only. No external `<link>` font tags. |
| Animations | CSS `@keyframes` only. **No JS animation libraries** (Framer Motion, GSAP, AOS, etc.). |
| Re-renders | Avoid `useEffect` + `setState` patterns for visual-only effects. Prefer CSS. |
| New packages | Do not add npm packages without explicit user approval. |
| LCP | The hero `<h1>` must render server-side — no `'use client'` wrapping content above the fold unless interactivity requires it. |

## Approved Animation Patterns

Only these CSS-only patterns are allowed:

```css
/* Entrance — fade + rise */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* Hover transitions — max 300ms */
transition: background 200ms ease, transform 150ms ease;

/* Reduced motion guard — always required */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

**Never use:**
- `requestAnimationFrame` loops for visual effects
- Canvas or WebGL animations
- Scroll-triggered JS animations
- `will-change` without a confirmed paint bottleneck
