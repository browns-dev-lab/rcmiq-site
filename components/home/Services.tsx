"use client";

import { motion } from "framer-motion";
import {
  Code,
  PenTool,
  Smartphone,
  Globe,
  BarChart,
  Shield,
} from "lucide-react";

const services = [
  { icon: Code, title: "Web Dev" },
  { icon: Smartphone, title: "App Dev" },
  { icon: PenTool, title: "UI/UX" },
  { icon: Globe, title: "Digital" },
  { icon: BarChart, title: "Analytics" },
  { icon: Shield, title: "Security" },
];

export default function Services() {
  return (
    <section className="w-full bg-white pb-10">
      <div className="max-w-6xl mx-auto px-6">
        {/* <h2 className="text-3xl text-gray-800 md:text-4xl font-bold mb-12 text-center">
          What we offer
        </h2> */}

        {/* Responsive grid that auto fits */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="
                aspect-square
                 rounded-2xl
                flex flex-col items-center justify-center
                hover:-translate-y-1 transition
              "
            >
              <service.icon
                size={50}
                className="mb-3"
                style={{ color: "#00e6df" }}
              />
              <p className="text-sm font-semibold text-gray-500">
                {service.title}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Explore More */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <button className="text-gray-600 text-base font-medium hover:underline flex items-center justify-center gap-1">
            Explore All Services →
          </button>
        </motion.div> */}
      </div>
    </section>
  );
}
