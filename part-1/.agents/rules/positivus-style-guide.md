# Positivus Design System — Style Guide Rules

> Source: Figma Design File – node 325-241 (Style Guide) and 330-762 (Landing Page Reference)
> These rules are MANDATORY. Every component and page must comply with them.

---

## 1. Color Palette

| Token (Tailwind)  | Hex Value   | Usage                                                       |
|-------------------|-------------|-------------------------------------------------------------|
| `bg-lime`         | `#B9FF66`   | Primary accent – highlights, active badges, hover states    |
| `bg-dark`         | `#191A23`   | Almost-black – primary text, dark card bg, borders, shadows |
| `bg-gray`         | `#F3F3F3`   | Light grey – secondary card backgrounds                     |
| `bg-white`        | `#FFFFFF`   | Default page background, white cards                        |

- **Do NOT** use any other colors outside this palette unless for brand-logo images.
- Text on `bg-lime` must be `text-dark`.
- Text on `bg-dark` must be `text-white` or `text-lime` (for accents/links).

---

## 2. Typography

| Level | Size (desktop) | Weight | Tailwind class |
|-------|---------------|--------|----------------|
| H1    | 60px          | Bold   | `text-h1`      |
| H2    | 40px          | Bold   | `text-h2`      |
| H3    | 30px          | Bold   | `text-h3`      |
| H4    | 20px          | Bold   | `text-h4`      |
| Body  | 18px          | Regular | `text-body`   |

- **Font family**: `Space Grotesk` only (loaded via `next/font/google`).
- Use the `text-h1` / `text-h2` / `text-h3` / `text-h4` / `text-body` utility classes instead of arbitrary `text-[Npx]` values.
- Line heights: headings `leading-tight` (1.2), body `leading-relaxed` (1.6).

---

## 3. Spacing & Layout

| Property              | Value (desktop) | Tailwind shorthand     |
|-----------------------|-----------------|------------------------|
| Section horizontal pad| 100px           | `.section-padding`     |
| Section vertical pad  | 70px            | `.section-y`           |
| Card internal padding | 60px            | `p-[60px]`             |
| Grid / card gap       | 40px            | `gap-[40px]`           |
| Navbar top pad        | 140px (top of hero) | `pt-[140px]`       |

- Mobile section padding falls back to `px-5` (20px). Always use the `.section-padding` utility.
- Do NOT use arbitrary padding values that differ from this table.

---

## 4. Border Radii

| Token                | Value | Usage                           |
|----------------------|-------|---------------------------------|
| `rounded-card`       | 45px  | Service cards, CTA banner, Case Studies, Testimonials |
| `rounded-button`     | 14px  | All buttons and form inputs     |
| `rounded-accordion`  | 30px  | Working-process accordion items |
| `rounded-pill`       | 100px | Tags and pills (if any)         |
| `rounded-full`       | 9999px | Social media icon circles, arrow circles |

---

## 5. Borders & Shadows

- All cards that sit on a light background MUST have `border border-dark` (1px solid `#191A23`).
- Dark-background cards (e.g., CaseStudies, Testimonials) do **not** require a border.
- Elevated cards MUST use the `.shadow-solid` utility (`box-shadow: 0 5px 0 0 #191A23`).
- Hover on elevated cards: `hover:-translate-y-[5px] transition-all`.

---

## 6. Component Patterns

### Section Title (`<SectionTitle>`)
```
[Highlighted Title Badge]  [Description text — max-w-[580px], text-body]
```
- Title background: `bg-lime`, `rounded-lg`, `px-1.5`.
- Layout: `flex flex-col lg:flex-row items-center gap-8 mb-20`.

### Service Cards (`<ServiceCard>`)
Three variants (pair alternately in order):
1. `white` – card: `bg-gray`, title-badge: `bg-lime`, arrow: `bg-dark text-lime`
2. `lime` – card: `bg-lime`, title-badge: `bg-white`, arrow: `bg-dark text-lime`
3. `dark` – card: `bg-dark text-white`, title-badge: `bg-white text-dark`, arrow: `bg-white text-dark`

Card height: `h-[310px]`; internal layout: `flex flex-row justify-between`.

### Buttons
- Primary CTA: `btn-primary` utility (`bg-dark text-white`, hover to `bg-lime text-dark`).
- Outline / secondary: `btn-outline` utility (`border border-dark`, hover to `bg-dark text-white`).
- Text size for buttons: always `text-[18px]`.

### Form Inputs
- `border border-dark rounded-button p-5 text-body bg-white focus:outline-lime`.
- Textarea: add `resize-none`.

### Arrow Link (e.g., "Learn more")
- Icon circle: `w-[42px] h-[42px] rounded-full bg-dark text-lime flex items-center justify-center`.
- On hover: `group-hover:rotate-45 transition-transform`.
- Label: `text-[18px]`.

### Working Process Accordion
- Closed state: `bg-gray border border-dark rounded-accordion shadow-solid`.
- Open state: `bg-lime border border-dark rounded-accordion shadow-solid`.
- Toggle icon: `w-[58px] h-[58px] rounded-full border border-dark bg-gray`.
- Number font: `text-[60px] font-bold`; Title: `text-[30px] font-bold`.

### Testimonials
- Outer container: `bg-dark rounded-card p-[60px]`.
- Quote card: `border border-lime rounded-card p-[52px]`.
- Bubble tail: rotated `div` with `border-r border-b border-lime bg-dark rotate-45`.
- Name: `text-lime text-[20px] font-bold`; Role: `text-white text-[18px]`.

### Team Cards
- `bg-white border border-dark rounded-card p-10 shadow-solid`.
- Avatar: PNG with baked-in lime blob effect, `w-[100px] h-[100px]`.
- LinkedIn icon: absolute `top-4 right-4`.
- Divider: `h-px bg-dark`.

### Footer
- Background: `bg-dark text-white`.
- Newsletter box background: `#292A32` (1 shade lighter than dark).
- Social icons: `w-9 h-9 rounded-full bg-white text-dark`.
- Nav links: `underline underline-offset-4`.

---

## 7. Responsiveness

- Design breakpoint: `lg` = 1024px (Tailwind default).
- Mobile-first: all base styles target mobile, `lg:` overrides apply at 1024px+.
- Minimum supported width: 375px.
- Logo ticker: `flex-wrap justify-center lg:justify-between`.

---

## 8. What NOT to do

- ❌ Do not use arbitrary colors (`text-[#ABC123]`, `bg-[#xyzxyz]`) unless they are in the palette.
- ❌ Do not use fonts other than `Space Grotesk`.
- ❌ Do not use `rounded-full` on cards or buttons (only on circular icon containers).
- ❌ Do not use `font-size` values outside the type scale without explicit design approval.
- ❌ Do not skip the `.shadow-solid` utility on elevated cards.
- ❌ Do not change the `--color-lime`, `--color-dark`, or `--color-gray` hex values.
