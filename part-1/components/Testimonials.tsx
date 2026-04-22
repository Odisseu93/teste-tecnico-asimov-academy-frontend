'use client'

import { useState, useRef } from 'react'
import SectionTitle from './SectionTitle'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    text: 'We have been working with Positivus for the past year and have seen a significant increase in our website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about our success. We highly recommend Positivus to any business looking to grow their online presence.',
    name: 'John Smith',
    role: 'Marketing Director at XYZ Corp',
  },
  {
    text: 'Their expertise in SEO and PPC is unmatched. We saw immediate results after implementing their suggestions. A great partner for any digital-first business.',
    name: 'Jane Doe',
    role: 'CEO at TechStart',
  },
  {
    text: 'Positivus transformed our online presence completely. From SEO to social media, every campaign delivered beyond expectations. Highly professional team.',
    name: 'Michael Brown',
    role: 'Senior SEO Specialist',
  },
  {
    text: 'Exceptional service from start to finish. Their data-driven approach helped us make smarter marketing decisions and cut our cost-per-lead in half.',
    name: 'Emily Johnson',
    role: 'PPC Manager',
  },
  {
    text: 'Their content strategies are second to none. We saw a 40% jump in organic traffic within two months. Will definitely continue the partnership.',
    name: 'Brian Williams',
    role: 'Social Media Specialist',
  },
  {
    text: 'Positivus keeps us well informed with clear reporting and proactive communication. They feel like a true extension of our marketing team.',
    name: 'Sarah Kim',
    role: 'Content Strategist',
  },
]

type IconProps = React.SVGProps<SVGSVGElement> & { size?: number }

const StarIcon: React.FC<IconProps> = ({ size = 14, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="star icon"
    {...props}
  >
    <path
      d="M7.0099 2.05941L14 0L11.9604 7.0099L14 14L7.0099 11.9604L0 14L2.05941 7.0099L0 0L7.0099 2.05941Z"
      fill="currentColor"
    />
  </svg>
)

/**
 * Testimonials
 * Figma spec:
 * - Outer: bg-dark, rounded-card, padding 60px (desktop)
 * - Quote card: border border-lime, rounded-card, padding 52px
 * - Bubble tail: rotated div with border-r border-b border-lime bg-dark
 * - Author name: text-lime, 20px bold (text-h4)
 * - Author role: text-white, text-body (18px)
 * - Nav arrows + star indicators centered below
 */
export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const trackRef = useRef<HTMLDivElement>(null)

  const handleScroll = () => {
    if (!trackRef.current) return
    const container = trackRef.current
    const scrollLeft = container.scrollLeft
    const center = scrollLeft + container.offsetWidth / 2

    // Find the item closest to the center
    let closestIndex = 0
    let minDistance = Infinity

    Array.from(container.children).forEach((child, i) => {
      const childCenter = (child as HTMLElement).offsetLeft + (child as HTMLElement).offsetWidth / 2
      const distance = Math.abs(center - childCenter)
      if (distance < minDistance) {
        minDistance = distance
        closestIndex = i
      }
    })

    if (closestIndex !== index) {
      setIndex(closestIndex)
    }
  }

  const scrollToIndex = (newIndex: number) => {
    if (!trackRef.current) return
    const container = trackRef.current
    const child = container.children[newIndex] as HTMLElement
    if (child) {
      const scrollPos = child.offsetLeft - container.offsetWidth / 2 + child.offsetWidth / 2
      container.scrollTo({ left: scrollPos, behavior: 'smooth' })
    }
    setIndex(newIndex)
  }

  const prev = () => {
    const newIndex = index === 0 ? testimonials.length - 1 : index - 1
    scrollToIndex(newIndex)
  }

  const next = () => {
    const newIndex = index === testimonials.length - 1 ? 0 : index + 1
    scrollToIndex(newIndex)
  }

  return (
    <section id="testimonials" className="section-padding section-y">
      <SectionTitle
        title="Testimonials"
        description="Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services"
      />

      {/* Outer dark card */}
      <div className="bg-dark text-white rounded-card py-[60px] overflow-hidden">
        <div className="relative w-full">
          
          {/* Carousel Track */}
          <div 
            ref={trackRef}
            onScroll={handleScroll}
            className="flex gap-12 overflow-x-auto snap-x snap-mandatory px-5 lg:px-[200px] pb-10"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {/* Hide scrollbar for webkit browsers */}
            <style jsx>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            
            {testimonials.map((t, i) => (
              <div 
                key={i} 
                className="snap-center shrink-0 w-[85vw] md:w-[600px] flex flex-col transition-opacity duration-300"
                style={{ opacity: i === index ? 1 : 0.5 }}
              >
                {/* Quote bubble */}
                <div className="relative mb-14">
                  <div className="border border-lime rounded-card px-8 md:px-[52px] py-8 md:py-[52px] relative bg-dark">
                    <p className="text-body leading-relaxed italic">
                      &ldquo;{t.text}&rdquo;
                    </p>
                  </div>
                  {/* Bubble tail – rotated square */}
                  <div className="absolute left-14 bottom-[-20px] w-10 h-10 border-r border-b border-lime bg-dark rotate-45 transform" />
                </div>

                {/* Author */}
                <div className="pl-14">
                  {/* Name: text-lime, text-h4 (20px bold) */}
                  <h4 className="text-h4 text-lime">{t.name}</h4>
                  {/* Role: text-body, white */}
                  <p className="text-body">{t.role}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation controls */}
          <div className="flex items-center justify-between mt-10 max-w-[600px] mx-auto px-5">
            <button
              onClick={prev}
              className={`p-2 hover:text-lime transition-colors opacity-100 cursor-pointer`}
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={32} />
            </button>

            {/* Star dot indicators */}
            <div className="flex gap-4">
              {testimonials.map((_, i) => (
                <button 
                  key={i} 
                  onClick={() => scrollToIndex(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className="p-1"
                >
                  <StarIcon
                    className={`w-3 h-3 transition-all ${i === index ? 'text-lime' : 'text-white/40'}`}
                  />
                </button>
              ))}
            </div>

            <button
              onClick={next}
              className={`p-2 hover:text-lime transition-colors opacity-100 cursor-pointer`}
              aria-label="Next testimonial"
            >
              <ChevronRight size={32} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
