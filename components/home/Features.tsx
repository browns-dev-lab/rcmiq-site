// ==========================================
// FILE: components/home/Features.tsx
// ==========================================
"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

export default function Features() {
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const items = [
    {
      title: "Healthcare Compliance",
      desc: "HIPAA-ready systems ensuring secure handling of patient data and workflows.",
    },
    {
      title: "Financial Security",
      desc: "Bank-grade encryption and protection for billing and financial platforms.",
    },
    {
      title: "Enterprise-Ready Design",
      desc: "Clean, scalable UI & UX aligned with industry standards.",
    },
    {
      title: "Scalable Architecture",
      desc: "Systems built to scale seamlessly as your business grows.",
    },
    {
      title: "Secure Integrations",
      desc: "Reliable APIs and integrations with third-party services.",
    },
  ];

  const scroll = (direction: "left" | "right") => {
    if (!sliderRef.current) return;

    const container = sliderRef.current;
    const cardWidth = container.firstElementChild?.clientWidth || 300;
    const amount = direction === "left" ? -cardWidth : cardWidth;

    container.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section className="relative py-8 sm:py-12 md:py-20 overflow-hidden">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-6 md:mb-10 flex items-center justify-between">
        <h2 className="text-xl sm:text-2xl md:text-4xl font-semibold text-gray-900">
          Our Core Features
        </h2>
      </div>

      {/* Slider */}
      <div className="relative">
        {/* Arrows – desktop only */}
        <button
          onClick={() => scroll("left")}
          className="hidden lg:flex absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full border border-gray-300 bg-white hover:bg-gray-100 transition"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={() => scroll("right")}
          className="hidden lg:flex absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full border border-gray-300 bg-white hover:bg-gray-100 transition"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Edge fades – desktop only */}
        <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Slider Content */}
        <div
          ref={sliderRef}
          className="
            flex gap-4 sm:gap-6
            overflow-x-auto scroll-smooth
            px-4 sm:px-6 lg:px-14
            snap-x snap-mandatory
            scrollbar-hide
          "
        >
          {items.map((f) => (
            <div
              key={f.title}
              className="
                snap-center
                min-w-[85%] sm:min-w-[45%] lg:min-w-[280px]
                max-w-[85%] sm:max-w-[45%] lg:max-w-[280px]
                bg-white border border-gray-200 rounded-2xl
                p-5 sm:p-6
                hover:border-teal-400 transition
              "
            >
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                {f.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
