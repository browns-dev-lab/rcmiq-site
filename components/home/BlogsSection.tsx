"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Blog {
  title: string;
  excerpt: string;
  date: string;
  image: string;
  link: string;
}

export default function BlogCarousel() {
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const blogs: Blog[] = [
    {
      title: "Healthcare Compliance in 2025",
      excerpt:
        "Learn the latest updates on HIPAA and healthcare software compliance.",
      date: "Dec 5, 2025",
      image: "/images/1.jpg",
      link: "/blog/healthcare-compliance",
    },
    {
      title: "Top Financial Analytics Tools",
      excerpt:
        "A deep dive into modern financial dashboards and predictive analytics tools.",
      date: "Nov 20, 2025",
      image: "/images/2.jpg",
      link: "/blog/financial-analytics",
    },
    {
      title: "Telehealth Integration Tips",
      excerpt: "Best practices to integrate telemedicine platforms seamlessly.",
      date: "Oct 15, 2025",
      image: "/images/1.jpg",
      link: "/blog/telehealth-integration",
    },
    {
      title: "Automation for Clinics",
      excerpt: "Streamline clinic operations with modern automation tools.",
      date: "Sep 10, 2025",
      image: "/images/2.jpg",
      link: "/blog/automation-clinics",
    },
  ];

  const scroll = (dir: "left" | "right") => {
    const container = sliderRef.current;
    if (!container) return;

    const card = container.firstElementChild as HTMLElement | null;
    const cardWidth = card?.clientWidth ?? container.clientWidth;

    container.scrollBy({
      left: dir === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-6 sm:py-8 md:py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        {/* Desktop arrows */}
        <button
          onClick={() => scroll("left")}
          className="hidden lg:flex absolute left-2 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full border border-gray-300 bg-white items-center justify-center hover:bg-gray-100 transition"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={() => scroll("right")}
          className="hidden lg:flex absolute right-2 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full border border-gray-300 bg-white items-center justify-center hover:bg-gray-100 transition"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Slider */}
        <div
          ref={sliderRef}
          className="
            flex gap-4 sm:gap-6
            overflow-x-auto scroll-smooth
            snap-x snap-mandatory
            scrollbar-hide
            px-1 sm:px-2 lg:px-12
          "
        >
          {blogs.map((b) => (
            <motion.a
              key={b.title}
              href={b.link}
              whileHover={{ y: -4 }}
              className="
                snap-center shrink-0
                min-w-[90%] sm:min-w-[48%] lg:min-w-[360px]
                max-w-[90%] sm:max-w-[48%] lg:max-w-[360px]
                bg-white rounded-xl sm:rounded-2xl
                border border-gray-100
                overflow-hidden
                transition
              "
            >
              <img
                src={b.image}
                alt={b.title}
                className="w-full h-[180px] sm:h-[200px] object-cover"
              />

              <div className="p-4 sm:p-5 flex flex-col gap-2">
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-blue-800">
                  {b.title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed line-clamp-3">
                  {b.excerpt}
                </p>

                <span className="text-xs text-gray-400">{b.date}</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
