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

export default function BlogCarousel() {
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
    <section className="py-12 relative">
      <div className="max-w-7xl mx-auto px-6 relative flex items-center">
        {/* Left Button */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 z-20 w-12 h-12 rounded-full border border-gray-300 bg-white flex items-center justify-center hover:bg-gray-100 transition"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Carousel */}
        <div
          ref={sliderRef}
          className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide w-full"
        >
          {blogs.map((b, idx) => (
            <motion.a
              key={idx}
              href={b.link}
              className="min-w-full snap-start bg-white rounded-2xl border border-gray-100 flex flex-col shrink-0 transition"
            >
              <img
                src={b.image}
                alt={b.title}
                className="w-full h-auto max-h-84 object-cover rounded-t-xl"
              />
              <div className="p-6 flex flex-col gap-2">
                <h3 className="text-2xl font-semibold text-teal-700">
                  {b.title}
                </h3>
                <p className="text-gray-600 text-base break-words">
                  {b.excerpt} Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. <br /> Doloribus aperiam, praesentium corrupti dolorum
                  eius soluta repellat consequatur laudantium dolor natus
                  molestias odio. <br /> Repellendus dicta saepe soluta minus.
                  Dignissimos, ducimus atque.
                </p>
                <span className="text-gray-400 text-sm">{b.date}</span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Right Button */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 z-20 w-12 h-12 rounded-full border border-gray-300 bg-white flex items-center justify-center hover:bg-gray-100 transition"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
}
