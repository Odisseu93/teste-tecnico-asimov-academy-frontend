import Image from "next/image";
import Link from "next/link";

/**
 * Hero Section
 * Figma spec:
 * - H1: 60px bold (text-h1)
 * - Body: 18px (text-body)
 * - CTA button: btn-primary utility
 * - Top padding: 140px (accounts for fixed navbar)
 * - Section uses .section-padding (100px horizontal desktop)
 */
export default function Hero() {
  return (
    <section className="section-padding pt-[140px] pb-[70px]">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left – copy */}
        <div className="flex-1 max-w-[530px]">
          <h1 className="text-h1 mb-8">
            Navigating the digital landscape for success
          </h1>

          {/* Mobile illustration */}
          <div className="lg:hidden relative w-full aspect-[1.2] mb-8">
            <Image
              src="/images/illustrations/hero-illustration.png"
              alt="Digital Marketing Illustration"
              fill
              className="object-contain"
            />
          </div>

          <p className="text-body leading-relaxed mb-10">
            Our digital marketing agency helps businesses grow and succeed online
            through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </p>

          <Link
            href="#contact"
            className="btn-primary inline-block w-full lg:w-auto text-center"
          >
            Book a consultation
          </Link>
        </div>

        {/* Right – illustration (desktop only) */}
        <div className="hidden lg:block flex-1 relative aspect-[1.2] w-full max-w-[600px]">
          <Image
            src="/images/illustrations/hero-illustration.png"
            alt="Digital Marketing Illustration"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
