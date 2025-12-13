"use client";

import { motion } from "framer-motion";

const solutions = [
  {
    title: "Revenue Cycle Management",
    desc: "Optimize billing, coding, and claims quickly.",
    icon: "/illustrations/ins.jpg",
  },
  {
    title: "Medical Billing Services",
    desc: "Accurate charge capture and faster reimbursements.",
    icon: "/illustrations/bill.jpg",
  },
  {
    title: "Telehealth Platforms",
    desc: "Secure virtual consultations and patient management.",
    icon: "/illustrations/ins.jpg",
  },
  {
    title: "Eligibility & Verification",
    desc: "Real-time insurance checks and coverage validation.",
    icon: "/illustrations/bill.jpg",
  },
  {
    title: "Denial Management",
    desc: "Reduce claim denials and improve approval rates.",
    icon: "/illustrations/ins.jpg",
  },
  {
    title: "Financial Analytics",
    desc: "Dashboards, reporting, and predictive insights.",
    icon: "/illustrations/bill.jpg",
  },
  {
    title: "Workflow Automation",
    desc: "Automate repetitive tasks and reduce manual errors.",
    icon: "/illustrations/ins.jpg",
  },
  {
    title: "Compliance Monitoring",
    desc: "HIPAA-aligned workflows and audit-ready systems.",
    icon: "/illustrations/bill.jpg",
  },
];

export default function SolutionsMarquee() {
  return (
    <section className="py-12 relative overflow-hidden bg-white">
      <h2 className="text-3xl md:text-4xl font-semibold text-teal-700 mb-8 text-center">
        What We Offer
      </h2>

      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-6 w-max"
          animate={{ x: ["0px", "-50%"] }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {[...solutions, ...solutions].map((s, idx) => (
            <div
              key={idx}
              className="
                flex-shrink-0
                w-60
                bg-white
                rounded-2xl
                p-4
                flex flex-col
                items-center
                text-center
                border border-gray-100
                shadow-sm
                hover:shadow-md
                transition
              "
            >
              <img
                src={s.icon}
                alt={s.title}
                className="w-20 h-20 mb-3 object-contain"
              />
              <h3 className="font-semibold text-teal-700 text-lg">{s.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
