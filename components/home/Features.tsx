// ==========================================
// FILE: components/home/Features.jsx
// ==========================================
"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

export default function Features() {
  const sliderRef = useRef(null);

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

  const scroll = (direction) => {
    if (!sliderRef.current) return;
    const amount = direction === "left" ? -320 : 320;
    sliderRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section className="relative py-20 px-20 overflow-hidden">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-6 mb-10 flex items-center justify-between">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
          Our Core Features
        </h2>
      </div>

      {/* Slider */}
      <div className="relative">
        {/* Left Button */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full border border-gray-300 bg-white hover:bg-gray-100 transition"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Right Button */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full border border-gray-300 bg-white hover:bg-gray-100 transition"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Edge fades */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Slider Content */}
        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto px-14 scrollbar-hide scroll-smooth"
        >
          {items.map((f) => (
            <div
              key={f.title}
              className="min-w-[280px] max-w-[280px] bg-white border border-gray-200 rounded-2xl p-6 hover:border-teal-400 transition"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {f.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
