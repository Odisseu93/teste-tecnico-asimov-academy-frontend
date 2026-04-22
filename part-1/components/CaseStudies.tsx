import SectionTitle from "./SectionTitle";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const cases = [
  "For a local real estate agency, we created a tailored SEO strategy that resulted in a 50% increase in organic website traffic within the first three months.",
  "For a B2B software company, we developed a PPC campaign that generated a 25% increase in qualified leads within the first six months.",
  "For a national retail chain, we implemented a social media marketing campaign that increased brand awareness and engagement by 30%.",
];

/**
 * Case Studies
 * Figma spec:
 * - Dark card, rounded-card, padding 60px
 * - Columns divided by a vertical white/muted border
 * - Body text: text-body (18px)
 * - "Learn more" links: text-lime, 18px, with arrow icon
 */
export default function CaseStudies() {
  return (
    <section id="use-cases" className="section-padding section-y">
      <SectionTitle
        title="Case Studies"
        description="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
      />

      <div className="bg-dark text-white rounded-card px-[60px] py-[60px] flex flex-col lg:flex-row gap-10 lg:gap-0">
        {cases.map((text, i) => (
          <div
            key={i}
            className={`flex-1 flex flex-col justify-between gap-6 ${
              i !== cases.length - 1
                ? "lg:border-r border-white/20 lg:pr-[40px]"
                : ""
            } ${i !== 0 ? "lg:pl-[40px]" : ""}`}
          >
            <p className="text-body leading-relaxed">{text}</p>
            <Link
              href="#"
              className="flex items-center gap-4 text-lime hover:opacity-80 transition-opacity"
            >
              <span className="text-body">Learn more</span>
              <ArrowUpRight size={20} />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
