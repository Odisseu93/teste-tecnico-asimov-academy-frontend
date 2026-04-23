# Style Guide — Asimov Academy Hero

> Derived from [asimov.academy](https://asimov.academy) visual identity.
> References: [Linear](https://linear.app), [Antimetal](https://antimetal.com), [Frame.io](https://frame.io).
> **This file is the single source of truth for design tokens.**

---

## 1. Color Palette

All colors are defined as CSS custom properties in `app/globals.css`.

### 1.1 Core Backgrounds

| Token | Value | Usage |
|-------|-------|-------|
| `--color-bg` | `#0d0d0d` | Page background (dark) |
| `--color-surface` | `#141414` | Slightly elevated surface (cards, nav) |
| `--color-surface-2` | `#1a1a1a` | Higher elevation surface |
| `--color-border` | `rgba(255,255,255,0.08)` | Subtle dividers and borders |

### 1.2 Text

| Token | Value | Contrast on `--color-bg` | Usage |
|-------|-------|--------------------------|-------|
| `--color-text-primary` | `#FFFFFF` | 21:1 ✅ | Headings, CTA labels |
| `--color-text-secondary` | `#A1A1A1` | 5.3:1 ✅ | Subheadlines, body copy |
| `--color-text-muted` | `#666666` | 3.7:1 ⚠️ | Use only for captions ≥16px |

> ⚠️ `--color-text-muted` fails WCAG AA for small text. Use only for decorative or non-essential text ≥16px bold.

### 1.3 Accent (Asimov Cyan)

| Token | Value | Usage |
|-------|-------|-------|
| `--color-accent` | `#74D9E2` | Primary CTA background, highlights, glow |
| `--color-accent-hover` | `#5CC8D2` | Hover state for accent elements |
| `--color-accent-subtle` | `rgba(116,217,226,0.10)` | Ghost button border/bg, glow halos |
| `--color-accent-glow` | `rgba(116,217,226,0.20)` | Ambient glow behind accent elements |

### 1.4 Contrast Table (quick reference)

| Text | Background | Ratio | WCAG |
|------|-----------|-------|------|
| `#FFFFFF` | `#0d0d0d` | 21:1 | AAA ✅ |
| `#A1A1A1` | `#0d0d0d` | 5.3:1 | AA ✅ |
| `#0d0d0d` (dark text) | `#74D9E2` | 9.8:1 | AAA ✅ |
| `#666666` | `#0d0d0d` | 3.7:1 | Fail ❌ (large text only) |

---

## 2. Typography

Font loaded via `next/font/google`. **Do not use `<link>` tags.**

### 2.1 Font Stack

```css
--font-sans: 'Inter', system-ui, -apple-system, sans-serif;
```

Load weights: `400`, `500`, `600`, `700`.

### 2.2 Type Scale

| Token | Desktop | Mobile | Weight | Usage |
|-------|---------|--------|--------|-------|
| `--text-hero` | `clamp(2.75rem, 5vw, 4.5rem)` | — | 700 | Hero `<h1>` |
| `--text-sub` | `clamp(1.0625rem, 2vw, 1.25rem)` | — | 400 | Subheadline `<p>` |
| `--text-label` | `0.875rem` (14px) | — | 500 | Bullet labels, badges |
| `--text-btn` | `0.9375rem` (15px) | — | 600 | Button text |
| `--text-caption` | `0.75rem` (12px) | — | 400 | Legal, captions only |

> `clamp()` makes the scale fluid — no media query needed for font-size.

### 2.3 Line Height & Letter Spacing

| Element | `line-height` | `letter-spacing` |
|---------|--------------|-----------------|
| Hero `h1` | `1.1` | `-0.03em` (tighter tracking → editorial feel) |
| Subheadline | `1.6` | `0` |
| Body / bullets | `1.7` | `0` |
| Buttons | `1` | `0.01em` |
| Badge / label | `1` | `0.08em` (uppercase small label) |

### 2.4 Anti "AI-Made" Typography Rules

- **Do NOT** set a single flat font-size for `h1` (e.g., `text-5xl`). Use `clamp()`.
- **Do** use tight tracking (`letter-spacing: -0.03em`) on the hero headline — it signals editorial intent.
- **Do** mix weight contrast deliberately: headline is `700`, subheadline is `400` (not 500 or 600).
- **Avoid** using all-caps on headings unless it's a small badge/label.

---

## 3. Spacing System

Based on a **4px base unit**. All spacing tokens are multiples of 4.

```css
--space-1:  0.25rem;   /*  4px */
--space-2:  0.5rem;    /*  8px */
--space-3:  0.75rem;   /* 12px */
--space-4:  1rem;      /* 16px */
--space-6:  1.5rem;    /* 24px */
--space-8:  2rem;      /* 32px */
--space-10: 2.5rem;    /* 40px */
--space-12: 3rem;      /* 48px */
--space-16: 4rem;      /* 64px */
--space-20: 5rem;      /* 80px */
--space-24: 6rem;      /* 96px */
```

### 3.1 Section & Layout Spacing

| Context | Value |
|---------|-------|
| Hero vertical padding (desktop) | `var(--space-24)` top, `var(--space-20)` bottom |
| Hero vertical padding (mobile) | `var(--space-16)` top/bottom |
| Max content width | `1280px` |
| Content horizontal padding | `var(--space-6)` (mobile) → `var(--space-16)` (desktop) |
| Gap between headline and subheadline | `var(--space-6)` |
| Gap between subheadline and bullets | `var(--space-8)` |
| Gap between bullets and CTA | `var(--space-10)` |
| Gap between primary and secondary CTA | `var(--space-4)` |

---

## 4. Component Tokens

### 4.1 Buttons

#### Primary CTA
```css
background:    var(--color-accent);
color:         #0d0d0d;              /* dark text on cyan = 9.8:1 ✅ */
border-radius: 0.375rem;             /* 6px — intentionally NOT pill-shaped */
padding:       0.75rem 1.75rem;      /* 12px 28px */
font-size:     var(--text-btn);
font-weight:   600;
transition:    background 200ms ease, transform 150ms ease;

/* Hover */
background:    var(--color-accent-hover);
transform:     translateY(-1px);
```

> **Design note:** Unlike the Asimov site pill buttons, we use `6px` radius to feel more editorial
> and less "generic SaaS". The subtle `translateY` hover adds depth without being clichéd.

#### Secondary CTA (ghost)
```css
background:    transparent;
color:         var(--color-text-primary);
border:        1px solid var(--color-border);
border-radius: 0.375rem;
padding:       0.75rem 1.75rem;
font-size:     var(--text-btn);
font-weight:   500;
transition:    border-color 200ms ease, color 200ms ease;

/* Hover */
border-color:  rgba(255,255,255,0.25);
color:         var(--color-accent);
```

### 4.2 Bullet / Feature Item
```css
display:     flex;
align-items: center;
gap:         var(--space-3);
color:       var(--color-text-secondary);
font-size:   var(--text-label);

/* Bullet marker — accent dot, not a generic check */
::before {
  content:          '';
  width:            6px;
  height:           6px;
  border-radius:    50%;
  background:       var(--color-accent);
  flex-shrink:      0;
}
```

### 4.3 Badge / Eyebrow Label
A small label above the headline (e.g. "🐍 Python + IA") to break visual monotony:
```css
display:        inline-flex;
align-items:    center;
gap:            var(--space-2);
background:     var(--color-accent-subtle);
border:         1px solid rgba(116,217,226,0.25);
border-radius:  999px;
padding:        0.25rem 0.75rem;
font-size:      0.75rem;
font-weight:    500;
letter-spacing: 0.06em;
color:          var(--color-accent);
text-transform: uppercase;
```

---

## 5. Decorative Elements & Visual Texture

These are the elements that prevent the design from feeling "generic AI-made".

### 5.1 Background Glow (CSS-only)

A radial gradient glow positioned off-center to break symmetry:

```css
/* Applied to the hero section's ::before pseudo-element */
background: radial-gradient(
  ellipse 80% 50% at 50% -20%,
  rgba(116, 217, 226, 0.15),
  transparent
);
```

This creates a subtle cyan halo at the top without any image asset.

### 5.2 Noise Texture (optional, CSS-only)

A very subtle SVG noise overlay gives the background a tactile, film-grain quality:

```css
/* data URI of a tiny SVG turbulence filter — no external file */
background-image: url("data:image/svg+xml,...");
opacity: 0.03;
pointer-events: none;
```

> Only add if the background feels too flat — keep opacity ≤ 0.04.

### 5.3 Horizontal Rule / Divider
```css
border: none;
height: 1px;
background: linear-gradient(
  to right,
  transparent,
  var(--color-border) 20%,
  var(--color-border) 80%,
  transparent
);
```

---

## 6. Animations

**Rule: CSS-only. No JS animation libraries.**

### 6.1 Approved `@keyframes`

```css
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}
```

### 6.2 Stagger Pattern (anti-generic)

Instead of animating everything at once, stagger with `animation-delay`:
```css
.hero-badge     { animation: fadeIn  400ms ease both 0ms;   }
.hero-headline  { animation: fadeUp  600ms ease both 100ms; }
.hero-sub       { animation: fadeUp  600ms ease both 200ms; }
.hero-bullets   { animation: fadeUp  600ms ease both 300ms; }
.hero-cta-group { animation: fadeUp  600ms ease both 400ms; }
```

> This creates a sequential "reveal" — feels intentional, not like a loading spinner.

### 6.3 Respecting User Preferences

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 7. Responsive Breakpoints

| Name | Min-width | Tailwind prefix |
|------|-----------|----------------|
| Mobile (default) | 0 | — |
| Tablet | `768px` | `md:` |
| Desktop | `1024px` | `lg:` |
| Wide | `1280px` | `xl:` |

### 7.1 Hero Layout Grid

- **Mobile (`< 768px`):** Single column, content centered. Headline font ~44px. Full-width CTAs stacked.
- **Tablet (`768px–1023px`):** Single column, slightly wider, CTAs side by side.
- **Desktop (`≥ 1024px`):** Content max-width 720px, centered or left-offset. Font scales up to 72px.

---

## 8. Anti-Patterns Checklist

Before submitting any component, verify you have NOT done any of the following:

- [x] Used a flat `font-size` for the hero headline instead of `clamp()`
- [x] Used `border-radius: 9999px` (pill) on the primary CTA button
- [x] Used light grey text (`#666` or lighter) on the dark background as body copy
- [x] Added a card with `box-shadow: 0 4px 12px rgba(0,0,0,0.1)` and rounded corners for features
- [x] Used a generic SaaS blue or purple as the primary accent
- [x] Used symmetric padding/margins that make everything feel "perfectly centered grid"
- [x] Added an animation that triggers on scroll via JavaScript
- [x] Used `opacity: 0.5` text for subheadlines instead of a specific accessible color value
- [x] Imported an animation library (Framer Motion, GSAP, AOS, etc.)
- [x] Used `<img>` instead of `next/image`
