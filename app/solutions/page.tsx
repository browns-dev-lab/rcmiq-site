// ==========================================
// FILE: app/solutions/page.tsx
// ==========================================

"use client";

import ContactUs from "@/components/common/ContactUs";
import { useState, useEffect } from "react";
import { RingLoader } from "react-spinners";

export default function Solutions() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(t);
  }, []);

  const solutions = [
    {
      title: "Revenue Cycle Management",
      desc: "Optimize billing, coding, and claims for faster reimbursements.",
      icon: "/icons/rcm.svg",
    },
    {
      title: "Telehealth Platform",
      desc: "Secure virtual consultations and patient management tools.",
      icon: "/icons/telehealth.svg",
    },
    {
      title: "Financial Analytics",
      desc: "Real-time dashboards, reporting, and predictive insights.",
      icon: "/icons/analytics.svg",
    },
    {
      title: "Automation Tools",
      desc: "Streamline repetitive tasks, increase efficiency, and reduce errors.",
      icon: "/icons/automation.svg",
    },
  ];

  if (loading) {
    return (
      <div className="w-full h-[60vh] flex items-center justify-center">
        <RingLoader color="#f97316" size={80} />
      </div>
    );
  }

  return (
    <main>
      <section className="relative max-w-7xl mx-auto px-6 py-24">
        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-16">
          Purpose-built solutions designed to simplify operations, ensure
          compliance, and drive smarter healthcare and financial decisions.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {solutions.map((s) => (
            <div
              key={s.title}
              className="group relative p-6 rounded-3xl bg-white transition-all duration-300 hover:-translate-y-2"
            >
              {/* Accent line */}
              <span className="absolute left-0 top-6 h-10 w-1 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition" />

              {/* Icon blob */}
              <div className="w-16 h-16 mb-6 mx-auto rounded-2xl bg-blue-50 flex items-center justify-center">
                <img src={s.icon} alt={s.title} className="w-8 h-8" />
              </div>

              <h3 className="text-xl font-semibold text-blue-700 mb-3 text-center">
                {s.title}
              </h3>

              <p className="text-gray-600 text-center text-sm leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <ContactUs />
    </main>
  );
}
