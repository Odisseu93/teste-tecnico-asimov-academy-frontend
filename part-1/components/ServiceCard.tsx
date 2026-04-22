import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ServiceCardProps {
  title: string[];
  image: string;
  variant: "white" | "lime" | "dark";
}

/**
 * Service Card
 * Figma spec:
 * - Title words wrapped in per-variant highlight badge
 * - Arrow circle: 42px, rounded-full
 * - Card height: 310px; internal padding: 60px
 * - Shadow: .shadow-solid; hover: -translate-y-1
 */
export default function ServiceCard({ title, image, variant }: ServiceCardProps) {
  const styles = {
    white: {
      card:    "bg-gray",
      titleBg: "bg-lime text-dark",
      link:    "text-dark",
      arrow:   "bg-dark text-lime",
    },
    lime: {
      card:    "bg-lime",
      titleBg: "bg-white text-dark",
      link:    "text-dark",
      arrow:   "bg-dark text-lime",
    },
    dark: {
      card:    "bg-dark text-white",
      titleBg: "bg-white text-dark",
      link:    "text-white",
      arrow:   "bg-white text-dark",
    },
  };

  const s = styles[variant];

  return (
    <div
      className={`${s.card} border border-dark rounded-card px-8 py-10 lg:p-[50px] xl:p-[60px] flex flex-col lg:flex-row justify-between h-[310px] shadow-solid hover:-translate-y-1 transition-all cursor-pointer group relative overflow-hidden`}
    >
      {/* Left – title + "Learn more" link */}
      <div className="flex flex-col justify-between h-full z-10">
        <div className="flex flex-col gap-1">
          {title.map((line, i) => (
            <span
              key={i}
              className={`${s.titleBg} px-1.5 rounded-lg text-h3 w-fit inline-block`}
            >
              {line}
            </span>
          ))}
        </div>

        {/* Arrow link — spec: 42px circle, "Learn more" 18px */}
        <Link
          href="#"
          className={`flex items-center gap-4 ${s.link} group-hover:opacity-80 transition-opacity`}
        >
          <div
            className={`${s.arrow} w-[42px] h-[42px] rounded-full flex items-center justify-center transition-transform group-hover:rotate-45`}
          >
            <ArrowUpRight size={20} />
          </div>
          <span className="text-body hidden lg:inline">Learn more</span>
        </Link>
      </div>

      {/* Right – illustration */}
      {/* On mobile/tablet (< lg), image is absolute bottom-right to match Figma and avoid shrinking */}
      <div className="absolute right-8 bottom-8 lg:relative lg:right-0 lg:bottom-0 w-[165px] lg:w-[210px] h-[129px] lg:h-[170px] self-end lg:self-center">
        <Image
          src={image}
          alt={title.join(" ")}
          fill
          className="object-contain object-right-bottom lg:object-contain"
        />
      </div>
    </div>
  );
}
