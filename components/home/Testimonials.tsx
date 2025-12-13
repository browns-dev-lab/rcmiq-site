"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    review:
      "RCMIQ’s solutions transformed our operations. Highly secure, reliable, and intuitive.",
    name: "John Carter",
    position: "Operations Manager",
    company: "HealthTech Inc.",
    logo: "/logos/healthtech.svg",
  },
  {
    review:
      "Their finance dashboard gave us real-time insights we’ve never had before.",
    name: "Jack Wilson",
    position: "Director",
    company: "FinCorp",
    logo: "/logos/fincorp.svg",
  },
  {
    review:
      "Working with RCMIQ was seamless. The platform is modern, efficient, and compliant.",
    name: "Jenny Lopez",
    position: "Operations Head",
    company: "MediServices",
    logo: "/logos/mediservices.svg",
  },
  {
    review:
      "Exceptional compliance expertise and fast delivery. Highly recommended.",
    name: "Amit Sharma",
    position: "CTO",
    company: "CarePlus",
    logo: "/logos/careplus.svg",
  },
  {
    review:
      "RCMIQ helped us scale securely while maintaining financial transparency.",
    name: "Sarah Brown",
    position: "Finance Lead",
    company: "PayAxis",
    logo: "/logos/payaxis.svg",
  },
];

export default function Testimonials() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!sliderRef.current) return;
    const width = sliderRef.current.clientWidth;
    sliderRef.current.scrollBy({
      left: dir === "left" ? -width : width,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-teal-700 mb-12 text-center">
          What Our Clients Say
        </h2>

        {/* Carousel */}
        <div className="relative">
          {/* Left Button */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white border border-gray-200 text-teal-600 hover:bg-teal-50 transition"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Right Button */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white border border-gray-200 text-teal-600 hover:bg-teal-50 transition"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Slider */}
          <div
            ref={sliderRef}
            className="flex gap-6 overflow-x-auto px-6 scrollbar-hide scroll-smooth snap-x snap-mandatory"
          >
            {testimonials.map((t, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="min-w-[300px] sm:min-w-[360px] snap-start bg-white p-6 rounded-2xl border border-gray-100 flex flex-col gap-4"
              >
                <p className="text-gray-700 text-base leading-relaxed">
                  “{t.review}”
                </p>

                <div className="flex items-center gap-3 mt-2">
                  <img
                    src={t.logo}
                    alt={t.company}
                    className="w-10 h-10 object-contain"
                  />
                  <div>
                    <p className="font-semibold text-teal-700">{t.name}</p>
                    <p className="text-gray-500 text-sm">{t.position}</p>
                    <p className="text-gray-400 text-sm">{t.company}</p>
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
