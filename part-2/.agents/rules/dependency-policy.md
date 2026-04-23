---
activation: always
---

# Dependency Policy — Native React First

Components must be built with **React, the standard DOM API, and CSS only**.  
Do not import third-party libraries unless the feature passes the test below.

## The Decision Gate

Before reaching for any npm package, ask:

> **"Is this too complex to implement by hand with React + CSS?"**

| Answer | Action |
|--------|--------|
| **No** — it can be reasonably done in native React/CSS | Build it yourself. Do not install the library. |
| **Yes** — it is genuinely too complex to handcraft | Open a discussion with the user before installing. |

## What "too complex" means

A feature qualifies as *too complex* only if it requires:

- Physics-based motion (springs, collisions)
- Canvas / WebGL rendering (particle systems, 3D scenes)
- Complex data visualisations (charts, graphs)
- Platform-specific APIs with large cross-browser polyfill surface

## What is NOT too complex (build it yourself)

These are common over-reaches — implement natively instead:

| Temptation | Native solution |
|------------|----------------|
| Framer Motion / GSAP for fade-in | CSS `@keyframes` + `animation-delay` |
| `react-spring` for hover lift | CSS `transition: transform 200ms ease` |
| `clsx` / `classnames` | Template literals or a 3-line utility function |
| `react-icons` for a simple icon | Inline SVG `<svg>` element |
| A UI component library for a button | Native `<button>` with Tailwind classes |
| `lodash` for array operations | Native `Array.prototype` methods |
| `date-fns` for simple formatting | `Intl.DateTimeFormat` |

## Enforcement

If you find yourself writing `npm install <package>` or adding to `package.json`, stop and apply the decision gate first.  
If the answer is still "yes — too complex", document **why** in a comment in the relevant file before proceeding.
