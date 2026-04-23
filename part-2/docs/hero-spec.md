# Hero Section — Component Spec

> Task source: README.md
> References: Linear (layout), Antimetal (typography boldness), Asimov Academy (colors/identity)

---

## 1. Overview

A full-viewport-height hero section for a Python + AI course landing page.
Dark-themed (`#0d0d0d`), editorial typography, subtle cyan accent.

**Design ethos:** Inspired by Linear's focused text hierarchy and Antimetal's typographic confidence.
Feels intentional, not "generic SaaS". No floating cards, no grid of features.

---

## 2. Content Map

| Element | Content | HTML tag | Notes |
|---------|---------|----------|-------|
| Badge / Eyebrow | `🐍 Python + IA` | `<span>` | Pill badge above headline |
| Headline | `Aprenda Python do zero e construa projetos reais com IA` | `<h1>` | Only `<h1>` on the page |
| Subheadline | `O curso mais prático do Brasil para quem quer entrar em tecnologia sem enrolação` | `<p>` | Secondary text color |
| Bullet 1 | `+40 horas de conteúdo direto ao ponto` | `<li>` | Accent dot marker |
| Bullet 2 | `Projetos com Python + IA desde o módulo 1` | `<li>` | |
| Bullet 3 | `Suporte da comunidade com +20.000 alunos` | `<li>` | |
| Bullet 4 | `Certificado reconhecido pelo mercado` | `<li>` | |
| Primary CTA | `Quero começar agora!` | `<a>` or `<button>` | Accent bg, dark text |
| Secondary CTA | `Ver o que vou aprender` | `<a>` or `<button>` | Ghost style, scroll to anchor |

---

## 3. Layout

### Desktop (≥ 1024px)

```
┌──────────────────────────────────────────┐
│              [nav placeholder]           │
├──────────────────────────────────────────┤
│                                          │
│          [badge: 🐍 Python + IA]         │
│                                          │
│   Aprenda Python do zero e construa      │
│   projetos reais com IA                  │
│   (clamp 44px → 72px, weight 700)        │
│                                          │
│   O curso mais prático do Brasil…        │
│   (clamp 17px → 20px, #A1A1A1)          │
│                                          │
│   · +40 horas de conteúdo…              │
│   · Projetos com Python + IA…           │
│   · Suporte da comunidade…              │
│   · Certificado reconhecido…            │
│                                          │
│   [Quero começar agora!] [Ver o que...]  │
│                                          │
└──────────────────────────────────────────┘
```

- Content max-width: `700px`
- Content is horizontally centered in the viewport
- Vertical alignment: `flex-col`, centered with generous top padding
- Background glow: `::before` radial gradient, top-center, cyan at 15% opacity

### Mobile (< 768px)

```
┌────────────────────┐
│  [badge]           │
│                    │
│  Aprenda Python…   │
│  (44px, centered)  │
│                    │
│  O curso mais…     │
│  (centered)        │
│                    │
│  · +40 horas…     │
│  · Projetos…       │
│  · Suporte…        │
│  · Certificado…    │
│                    │
│  [Quero começar!]  │
│  [Ver o que…]      │
└────────────────────┘
```

- All content centered
- CTAs stacked full-width
- Horizontal padding: `var(--space-6)` (24px)

---

## 4. Visual Design Details

### Background
- Base: `#0d0d0d`
- `::before` pseudo-element: `radial-gradient(ellipse 80% 50% at 50% -10%, rgba(116,217,226,0.15), transparent)`
- This creates the "glow from above" effect, grounding the light source at the top of the hero.

### Headline Typography
- Font: Inter 700
- Size: `clamp(2.75rem, 5vw, 4.5rem)` → fluid between 44px and 72px
- Letter-spacing: `-0.03em` (editorial tightness)
- Line-height: `1.1`
- Color: `#FFFFFF`
- **Anti-pattern note:** Do NOT split into two `<span>` with different colors unless it adds meaning.

### Subheadline
- Font: Inter 400
- Size: `clamp(1.0625rem, 2vw, 1.25rem)`
- Color: `#A1A1A1` (5.3:1 on dark bg ✅)
- Line-height: `1.6`
- Max-width: `560px` (slightly narrower than headline to create visual hierarchy)

### Bullets
- Two-column grid on desktop (2×2), single column on mobile
- Each bullet: `6px` cyan dot + text in `#A1A1A1`
- No icons, no cards — just clean list with accent markers
- Font: Inter 400, 14px

### Primary CTA
- Background: `#74D9E2`
- Text: `#0d0d0d` (9.8:1 ✅)
- Border-radius: `6px`
- Padding: `12px 28px`
- Hover: `translateY(-1px)` + darken to `#5CC8D2`
- Focus-visible: `outline: 2px solid #74D9E2; outline-offset: 2px`

### Secondary CTA
- Background: `transparent`
- Text: `#FFFFFF`
- Border: `1px solid rgba(255,255,255,0.12)`
- Hover: border brightens, text shifts to accent color
- Focus-visible: same pattern as primary

---

## 5. Animation Plan (CSS-only, staggered)

```
Element          Keyframe    Duration  Delay   Easing
─────────────────────────────────────────────────────
badge            fadeIn      400ms     0ms     ease
h1               fadeUp      600ms     100ms   ease
subheadline      fadeUp      600ms     200ms   ease
bullet list      fadeUp      600ms     300ms   ease
CTA group        fadeUp      600ms     400ms   ease
```

`fadeUp`: `opacity 0→1` + `translateY(16px→0)`.
Wrapped in `@media (prefers-reduced-motion: no-preference)` guard.

---

## 6. Component File Structure

```
app/
  components/
    Hero/
      index.tsx          ← <HeroSection> — layout shell, animation classes
      HeroBadge.tsx      ← eyebrow badge (optional extract if badge logic grows)
      HeroBullets.tsx    ← bullet list
      HeroCTA.tsx        ← CTA button group
  lib/
    hero-content.ts      ← static content constants (headline, bullets, CTAs)
```

> If the component stays under ~150 lines with all sub-elements inlined, sub-files are optional.

---

## 7. Accessibility Checklist

- [x] Single `<h1>` on the page
- [x] `<ul>` with `<li>` for bullets (not `<div>` soup)
- [x] Primary CTA `<button>` or `<a href>` — not a `<div>` with `onClick`
- [x] Secondary CTA has descriptive text (not just "Saiba mais")
- [x] `prefers-reduced-motion` guard around all animations
- [x] Focus-visible styles on both CTAs
- [x] Background glow via `::before` with `aria-hidden` (pseudo-element — automatic)
- [x] Badge `aria-hidden` if purely decorative emoji portion is present

---

## 8. Performance Checklist

- [x] No `<img>` tags (no images in this hero — typography-only design)
- [x] Font loaded via `next/font/google`, not `<link>`
- [x] No JS animation library imported
- [x] No `useEffect` for entrance animations (use CSS `animation` instead)
- [x] Component is a **Server Component** (no `'use client'` unless interactivity requires it)
- [x] LCP element (`<h1>`) is not hidden behind a loading state
