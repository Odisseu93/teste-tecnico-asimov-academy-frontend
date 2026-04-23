---
activation: always
---

# Style Guide Compliance

Every component **must** follow the design tokens, color palette, typography scale, spacing system, and animation rules defined in:

@/docs/style-guide.md

## Accessibility (non-negotiable)

- **Contrast ratio ≥ 4.5:1** for all text/background combinations (WCAG AA). Verify against the contrast table in the style guide before choosing any color pair.
- **Minimum font size: 14px** for body copy; 12px only for legal/caption text.
- **`<a>` and `<button>` elements must have `:focus-visible`** styles — do not suppress focus rings globally.
- **Images must have meaningful `alt` text.** Decorative images use `alt=""`.
- **Do not convey information through color alone** — use text, shape, or icon alongside color.

## Tailwind v4 Usage

- Use Tailwind utility classes as the primary styling mechanism.
- When a utility class does not exist for a design token value, define the token as a **CSS custom property** in `app/globals.css` and reference it via `var(--token-name)`.
- Do **not** use inline `style={{}}` for design-system values.
