"use client";

import { motion } from "framer-motion";
import {
  FileText,
  CreditCard,
  ClipboardCheck,
  LineChart,
  ShieldCheck,
  Users,
} from "lucide-react";

const services = [
  { icon: FileText, title: "Medical Coding" },
  { icon: CreditCard, title: "Claims Billing" },
  { icon: ClipboardCheck, title: "Eligibility Check" },
  { icon: LineChart, title: "Revenue Analytics" },
  { icon: Users, title: "Patient Accounts" },
  { icon: ShieldCheck, title: "HIPAA Compliance" },
];

export default function Services() {
  return (
    <section className="w-full bg-white pb-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 gap-5 md:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="
                aspect-square
                rounded-2xl
                flex flex-col items-center justify-center
                transition
                hover:-translate-y-1
              "
            >
              {/* Filled Icon */}
              <service.icon
                size={46}
                className="mb-3"
                strokeWidth={1}
                fill="#114abc" // lighter blue
              />

              <p className="text-xs sm:text-sm font-semibold text-gray-600 text-center">
                {service.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
