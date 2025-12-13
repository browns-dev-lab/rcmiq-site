"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ResourceItem {
  title: string;
  type: string;
  desc: string;
  link: string;
}

export default function ResourcesSection() {
  const resources: ResourceItem[] = [
    {
      title: "Healthcare Compliance Guide",
      type: "Guide",
      desc: "Learn best practices for HIPAA-compliant healthcare software.",
      link: "/resources/healthcare-compliance",
    },
    {
      title: "Financial Analytics Whitepaper",
      type: "Whitepaper",
      desc: "Discover insights into building secure financial dashboards.",
      link: "/resources/financial-analytics",
    },
    {
      title: "Case Study: Telehealth Integration",
      type: "Case Study",
      desc: "How a clinic implemented telehealth seamlessly with RCMIQ solutions.",
      link: "/resources/telehealth-case-study",
    },
    {
      title: "Enterprise UI/UX Principles",
      type: "Blog",
      desc: "Best practices for designing scalable and user-friendly enterprise systems.",
      link: "/resources/ui-ux-principles",
    },
  ];

  return (
    <section className="relative w-full py-16 sm:py-24 overflow-hidden">
      {/* Background Image with Fade */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/bgs/hero-bg.jpg"
          alt="Resources Background"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-white" />
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-gray-700 text-base sm:text-lg text-center mb-12 max-w-3xl mx-auto"
        >
          Explore our latest guides, case studies, blogs, and whitepapers to
          stay ahead in healthcare and financial digital solutions.
        </motion.p>

        {/* Resource List */}
        <div className="flex flex-col gap-4 sm:gap-6">
          {resources.map((r, idx) => (
            <motion.a
              key={r.title}
              href={r.link}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-4 sm:p-6 rounded-xl border border-gray-200 transition flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4"
            >
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm font-semibold text-teal-500 mb-1 sm:mb-2">
                  {r.type}
                </span>
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-teal-700 mb-1 sm:mb-2">
                  {r.title}
                </h3>
                <p className="text-gray-700 text-sm sm:text-base">{r.desc}</p>
              </div>
              <span className="text-teal-500 font-medium mt-2 sm:mt-0 text-sm sm:text-base hover:underline">
                Read More →
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
