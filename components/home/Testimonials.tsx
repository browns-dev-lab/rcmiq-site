"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Building2,
  Hospital,
  CreditCard,
  ShieldCheck,
  BarChart3,
} from "lucide-react";

type Direction = "left" | "right";

interface Testimonial {
  review: string;
  name: string;
  position: string;
  company: string;
  Icon: React.ElementType;
}

const testimonials: Testimonial[] = [
  {
    review:
      "RCMIQ’s solutions transformed our operations. Highly secure, reliable, and intuitive.",
    name: "John Carter",
    position: "Operations Manager",
    company: "HealthTech Inc.",
    Icon: Hospital,
  },
  {
    review:
      "Their finance dashboard gave us real-time insights we’ve never had before.",
    name: "Jack Wilson",
    position: "Director",
    company: "FinCorp",
    Icon: BarChart3,
  },
  {
    review:
      "Working with RCMIQ was seamless. The platform is modern, efficient, and compliant.",
    name: "Jenny Lopez",
    position: "Operations Head",
    company: "MediServices",
    Icon: ShieldCheck,
  },
  {
    review:
      "Exceptional compliance expertise and fast delivery. Highly recommended.",
    name: "Amit Sharma",
    position: "CTO",
    company: "CarePlus",
    Icon: Building2,
  },
  {
    review:
      "RCMIQ helped us scale securely while maintaining financial transparency.",
    name: "Sarah Brown",
    position: "Finance Lead",
    company: "PayAxis",
    Icon: CreditCard,
  },
];

export default function Testimonials() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: Direction) => {
    const container = sliderRef.current;
    if (!container) return;

    const firstCard = container.children[0] as HTMLElement | undefined;
    const scrollAmount = firstCard?.offsetWidth ?? container.offsetWidth;

    container.scrollBy({
      left: dir === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-10 text-center">
          What Our Clients Say
        </h2>

        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={() => scroll("left")}
            aria-label="Scroll left"
            className="
              hidden sm:flex
              absolute left-0 top-1/2 -translate-y-1/2 z-20
              h-11 w-11
              items-center justify-center
              rounded-full
              bg-white
              border border-blue-100
              text-blue-700
              hover:bg-blue-50
              hover:scale-105
              transition
            "
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => scroll("right")}
            aria-label="Scroll right"
            className="
              hidden sm:flex
              absolute right-0 top-1/2 -translate-y-1/2 z-20
              h-11 w-11
              items-center justify-center
              rounded-full
              bg-white
              border border-blue-100
              text-blue-700
              hover:bg-blue-50
              hover:scale-105
              transition
            "
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Slider */}
          <div
            ref={sliderRef}
            className="
              flex gap-4 sm:gap-6
              overflow-x-auto
              scroll-smooth
              snap-x snap-mandatory
              scrollbar-hide
              px-1 sm:px-12
            "
          >
            {testimonials.map((t, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                viewport={{ once: true }}
                className="
                  snap-center shrink-0
                  min-w-[88%] sm:min-w-[48%] lg:min-w-[360px]
                  max-w-[88%] sm:max-w-[48%] lg:max-w-[360px]
                  bg-white
                  p-5 sm:p-6
                  rounded-xl sm:rounded-2xl
                  border border-gray-100
                  flex flex-col gap-4
                "
              >
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  “{t.review}”
                </p>

                <div className="flex items-center gap-3 mt-auto">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                    <t.Icon className="w-5 h-5 text-blue-600" />
                  </div>

                  <div>
                    <p className="font-semibold text-blue-700 text-sm sm:text-base">
                      {t.name}
                    </p>
                    <p className="text-gray-500 text-xs sm:text-sm">
                      {t.position}
                    </p>
                    <p className="text-gray-400 text-xs sm:text-sm">
                      {t.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
