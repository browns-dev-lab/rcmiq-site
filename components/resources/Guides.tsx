"use client";

import { motion } from "framer-motion";
import { BookOpen, BarChart2, Layout } from "lucide-react"; // Example icons
import { JSX } from "react";

interface Guide {
  title: string;
  desc: string;
  link: string;
  icon: JSX.Element;
}

export default function GuidesSection() {
  const guides: Guide[] = [
    {
      title: "Healthcare Compliance Guide",
      desc: "Learn best practices for HIPAA-compliant healthcare software.",
      link: "/resources/healthcare-compliance",
      icon: <BookOpen className="w-10 h-10 text-white" />,
    },
    {
      title: "Financial Analytics Whitepaper",
      desc: "Discover insights into building secure financial dashboards.",
      link: "/resources/financial-analytics",
      icon: <BarChart2 className="w-10 h-10 text-white" />,
    },
    {
      title: "Enterprise UI/UX Principles",
      desc: "Best practices for designing scalable and user-friendly enterprise systems.",
      link: "/resources/ui-ux-principles",
      icon: <Layout className="w-10 h-10 text-white" />,
    },
  ];

  return (
    <section className="relative w-full py-14 bg-teal-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-gray-700 text-lg mb-12 max-w-3xl mx-auto">
          Dive into our comprehensive guides to stay ahead in healthcare and
          financial digital solutions.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {guides.map((g, idx) => (
            <motion.a
              key={g.title}
              href={g.link}
              className="group bg-teal-600 p-6 rounded-2xl flex flex-col items-start hover:scale-105 transition-transform duration-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 mb-4 flex items-center justify-center bg-teal-600 rounded-full">
                {g.icon}
              </div>

              <h3 className="text-xl md:text-2xl font-semibold text-white 0 mb-2">
                {g.title}
              </h3>
              <p className="text-gray-200 text-sm md:text-base mb-4">
                {g.desc}
              </p>
              <span className="text-gray-300 font-medium group-hover:text-gray-200 transition">
                Read More →
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
