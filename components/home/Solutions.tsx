"use client";

import { motion } from "framer-motion";

const solutions = [
  {
    title: "Revenue Cycle Management",
    desc: "Optimize billing, coding, and claims quickly.",
    icon: "/illustrations/ins.jpg",
  },
  {
    title: "Telehealth Platform",
    desc: "Secure virtual consultations and patient management.",
    icon: "/illustrations/bill.jpg",
  },
  {
    title: "Financial Analytics",
    desc: "Real-time dashboards, reporting, and predictive insights.",
    icon: "/illustrations/ins.jpg",
  },
  {
    title: "Automation Tools",
    desc: "Streamline repetitive tasks, increase efficiency, reduce errors.",
    icon: "/illustrations/bill.jpg",
  },
];

export default function SolutionsMarquee() {
  return (
    <section className="py-12 relative overflow-hidden">
      <h1 className="text-3xl md:text-4xl font-semibold text-teal-700 mb-6 text-center">
        What We Offer
      </h1>

      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-4 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 12,
              ease: "linear",
            },
          }}
        >
          {solutions.concat(solutions).map((s, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-52 bg-white rounded-xl p-3 flex flex-col items-center text-center border border-gray-100"
            >
              <img src={s.icon} alt={s.title} className="w-20 h-20 mb-2" />
              <h3 className="font-medium text-teal-700 text-lg">{s.title}</h3>
              <p className="text-gray-600 text-sm">{s.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
