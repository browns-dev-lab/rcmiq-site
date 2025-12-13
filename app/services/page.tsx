"use client";

import ContactUs from "@/components/common/ContactUs";
import { useState, useEffect } from "react";
import { RingLoader } from "react-spinners";
import { Server, BarChart2, Shield, Cloud } from "lucide-react"; // example icons

export default function Services() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(t);
  }, []);

  const services = [
    {
      title: "Healthcare software development",
      icon: <Server size={24} className="text-teal-600" />,
    },
    {
      title: "Financial dashboards & analytics",
      icon: <BarChart2 size={24} className="text-teal-600" />,
    },
    {
      title: "HIPAA & financial compliance consulting",
      icon: <Shield size={24} className="text-teal-600" />,
    },
    {
      title: "Secure cloud infrastructure setups",
      icon: <Cloud size={24} className="text-teal-600" />,
    },
  ];

  if (loading) {
    return (
      <div className="w-full h-[60vh] flex items-center justify-center">
        <RingLoader color="#00e6df" size={90} />
      </div>
    );
  }

  return (
    <main>
      <section className="relative w-full py-24 bg-teal-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-teal-700 mb-12">
            Our Services
          </h1>

          <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 flex flex-col items-start gap-4 hover:scale-105 transition-transform duration-200"
              >
                <div>{service.icon}</div>
                <p className="text-lg font-semibold text-gray-800">
                  {service.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ContactUs />
    </main>
  );
}
