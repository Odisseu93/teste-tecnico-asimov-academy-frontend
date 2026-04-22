import Image from 'next/image'
import Link from 'next/link'

/**
 * CTA Banner
 * Figma spec:
 * - Card: bg-gray, border border-dark, rounded-card, no shadow (it sits within the page flow)
 * - Heading: text-h3 (30px bold)
 * - Body: text-body (18px)
 * - Button: btn-primary utility
 * - Card padding: 60px desktop
 */
export default function CTABanner() {
  return (
    <section className="section-padding section-y overflow-hidden">
      <div className="bg-gray border border-dark rounded-card overflow-visible relative flex flex-col lg:flex-row items-center justify-between px-[60px] py-[60px]">
        {/* Left – text content */}
        <div className="max-w-[480px] z-10 text-center lg:text-left">
          <h3 className="text-h3 mb-6">Let&apos;s make things happen</h3>
          <p className="text-body leading-relaxed mb-10">
            Contact us today to learn more about how our digital marketing
            services can help your business grow and succeed online.
          </p>
          <Link href="#contact" className="btn-primary inline-block">
            Get your free proposal
          </Link>
        </div>

        {/* Right – illustration (desktop only) */}
        <div className="hidden lg:block absolute right-10 xl:right-16 top-1/2 -translate-y-1/2 w-[420px] h-[420px] pointer-events-none select-none">
          <Image
            src="/images/illustrations/cta.png"
            alt="Let's make things happen"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  )
}
