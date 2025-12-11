"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    review:
      "RCMIQ’s solutions transformed our operations. Highly secure, reliable, and intuitive.",
    name: "John",
    position: "Manager",
    company: "HealthTech Inc.",
    logo: "/logos/healthtech.svg",
  },
  {
    review:
      "Their finance dashboard gave us real-time insights we’ve never had before.",
    name: "Jack",
    position: "Director",
    company: "FinCorp",
    logo: "/logos/fincorp.svg",
  },
  {
    review:
      "Working with RCMIQ was seamless. The platform is modern, efficient, and compliant.",
    name: "Jenny",
    position: "Operations Head",
    company: "MediServices",
    logo: "/logos/mediservices.svg",
  },
];

export default function Testimonials() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <h2 className="text-3xl md:text-4xl font-bold text-teal-700 mb-12 text-center">
        What Our Clients Say
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-2xl border border-gray-100 flex flex-col items-start gap-4"
          >
            <p className="text-gray-700 text-base md:text-lg">"{t.review}"</p>
            <div className="flex items-center gap-3 mt-2">
              <img
                src={t.logo}
                alt={t.company}
                className="w-10 h-10 object-contain"
              />
              <div>
                <p className="font-semibold text-teal-700">{t.name}</p>
                <p className="text-gray-500 text-sm">{t.position}</p>
                <p className="text-gray-500 text-sm">{t.company}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
