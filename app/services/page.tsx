// ==========================================
// FILE: app/services/page.tsx
// ==========================================

"use client";

import ContactUs from "@/components/common/ContactUs";
import { useState, useEffect } from "react";
import { RingLoader } from "react-spinners";

export default function Services() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(t);
  }, []);

  const services = [
    "Healthcare software development",
    "Financial dashboards & analytics",
    "HIPAA & financial compliance consulting",
    "Secure cloud infrastructure setups",
  ];

  if (loading) {
    return (
      <div className="w-full h-[60vh] flex items-center justify-center">
        <RingLoader color="#00e6df" size={90} />
      </div>
    );
  }

  return (
    <section className="relative max-w-7xl mx-auto px-6 py-24">
      {/* Optional subtle gradient background */}
      <div className="absolute inset-0 "></div>

      <h1 className="text-5xl font-bold text-teal-700 mb-12 text-center">
        Our Services
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        {services.map((service) => (
          <div
            key={service}
            className="bg-white p-6 rounded-2xl border border-gray-200 transition"
          >
            <p className="text-lg text-gray-700 flex items-center gap-3">
              <span className="text-teal-500 font-bold">✔</span> {service}
            </p>
          </div>
        ))}
      </div>
      <ContactUs />
    </section>
  );
}
