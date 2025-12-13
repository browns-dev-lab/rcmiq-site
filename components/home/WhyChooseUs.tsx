"use client";

import { ShieldCheck, Scale, Zap, Users } from "lucide-react";
import { motion } from "framer-motion";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Security First",
    desc: "We design systems with enterprise‑grade security, encryption, and compliance baked in from day one.",
  },
  {
    icon: Scale,
    title: "Compliance‑Driven",
    desc: "Built for healthcare and finance — HIPAA, GDPR, and regulatory requirements are never an afterthought.",
  },
  {
    icon: Zap,
    title: "Scalable & Fast",
    desc: "Our solutions are built to scale smoothly while maintaining high performance and reliability.",
  },
  {
    icon: Users,
    title: "Partner‑Focused",
    desc: "We work as an extension of your team, aligning technology decisions with your business goals.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="w-full bg-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="max-w-2xl mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Why Choose Us
          </h2>
          <p className="text-gray-600 text-lg">
            We combine deep domain expertise with modern engineering practices
            to deliver secure, scalable, and compliant digital solutions.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="border border-gray-200 rounded-2xl p-6 flex flex-col gap-4"
            >
              <item.icon size={36} style={{ color: "#00e6df" }} />
              <h3 className="text-xl font-semibold text-gray-800">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
