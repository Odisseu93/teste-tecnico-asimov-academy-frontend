---
activation: glob
glob: app/components/**/*.tsx
---

# Component Standards

## 1. JSDoc Spec Header (required)

Every component file must begin with a JSDoc block describing its visual and structural spec. Example:

```tsx
/**
 * HeroSection
 * Spec: @/docs/hero-spec.md
 * - Desktop: Centered single column, max-width 700px, radial glow from top.
 * - Mobile: Same structure, font scales down, CTAs stack full-width.
 * - Tokens: --color-bg, --color-accent, --color-text-primary/secondary.
 * - A11y: Only <h1> on the page. Both CTAs have focus-visible styles.
 */
export default function HeroSection() {}
```

## 2. Size Limit (~150 lines)

A single component file must not exceed approximately **150 lines** of TSX.

If it grows beyond that, extract:
- **State / data logic** → `app/hooks/use<Name>.ts`
- **Pure calculations or formatters** → `app/lib/<name>.ts`
- **Visual sub-sections** → sibling files in the same component folder

## 3. File Placement

```
app/
  components/
    <ComponentName>/
      index.tsx         ← public-facing default export
      <SubPart>.tsx     ← internal sub-components (only if needed)
  hooks/
    use<Name>.ts
  lib/
    <utilName>.ts
```

## 4. TypeScript

- All props must be **typed** — no `any`.
- Prefer explicit return types on non-trivial functions.
- Use plain function declarations with typed props; avoid `React.FC`.
