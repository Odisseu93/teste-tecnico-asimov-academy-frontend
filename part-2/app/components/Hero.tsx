/**
 * HeroSection
 * Spec: docs/hero-spec.md
 *
 * Layout:
 * - Desktop: Centered single column, max-width 700px, radial cyan glow from top.
 * - Mobile: Same, font scales via clamp() arbitrary value, CTAs stack full-width.
 *
 * Styling: 100% Tailwind v4 utility classes. No CSS Modules, no inline event handlers.
 * Hover states handled by Tailwind hover: prefix — component stays a Server Component.
 * Animations: CSS-only, staggered via [animation-delay] arbitrary values.
 * A11y: Single <h1>, <ul>/<li> bullets, <a> CTAs, focus-visible on interactive elements.
 * Performance: Server Component. No images. No JS animation library.
 */

import {
  HERO_BADGE,
  HERO_HEADLINE,
  HERO_SUBHEADLINE,
  HERO_BULLETS,
  CTA_PRIMARY,
  CTA_SECONDARY,
} from "@/app/lib/hero-content";

export default function HeroSection() {
  return (
    <section
      aria-label="Hero"
      className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden bg-bg px-6 py-24 md:px-16"
    >
      {/* Ambient radial glow — CSS arbitrary value, no image asset */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[600px] [background:radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(116,217,226,0.15),transparent)]"
      />

      {/* Content column */}
      <div className="relative z-10 flex w-full max-w-[700px] flex-col items-center text-center">

        {/* Badge */}
        <span className="animate-fade-in mb-8 inline-flex items-center gap-2 rounded-full border border-accent-ring bg-accent-dim px-3 py-1 text-[0.7rem] font-medium uppercase tracking-widest text-accent">
          {HERO_BADGE}
        </span>

        {/* Headline — only <h1> on the page */}
        <h1 className="animate-fade-up mb-6 text-[clamp(2.75rem,5vw,4.5rem)] font-bold leading-[1.1] tracking-[-0.03em] text-primary [animation-delay:100ms]">
          {HERO_HEADLINE}
        </h1>

        {/* Subheadline */}
        <p className="animate-fade-up mb-10 max-w-[560px] text-[clamp(1.0625rem,2vw,1.25rem)] leading-relaxed text-secondary [animation-delay:200ms]">
          {HERO_SUBHEADLINE}
        </p>

        {/* Bullets — 1-col mobile, 2-col tablet+ */}
        <ul className="animate-fade-up mb-12 grid w-full gap-x-8 gap-y-3 text-left text-[0.875rem] text-secondary sm:grid-cols-2 [animation-delay:300ms]">
          {HERO_BULLETS.map((bullet) => (
            <li key={bullet} className="flex items-center gap-3">
              {/* Accent dot marker */}
              <span aria-hidden="true" className="size-1.5 shrink-0 rounded-full bg-accent" />
              {bullet}
            </li>
          ))}
        </ul>

        {/* CTA group */}
        <div className="animate-fade-up flex w-full flex-col gap-4 sm:w-auto sm:flex-row [animation-delay:400ms]">

          {/* Primary CTA */}
          <a
            href="#enroll"
            className="inline-flex items-center justify-center rounded-md bg-accent px-7 py-3 text-[0.9375rem] font-semibold text-bg transition-all duration-200 hover:-translate-y-px hover:bg-accent-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            {CTA_PRIMARY}
          </a>

          {/* Secondary CTA */}
          <a
            href="#curriculum"
            className="inline-flex items-center justify-center rounded-md border border-border px-7 py-3 text-[0.9375rem] font-medium text-primary transition-all duration-200 hover:border-border-hi hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            {CTA_SECONDARY}
          </a>

        </div>
      </div>
    </section>
  );
}
