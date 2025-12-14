// ==========================================
// FILE: app/schedule/page.tsx
// ==========================================

"use client";

import { useState, useEffect } from "react";
import { RingLoader } from "react-spinners";

export default function ScheduleCall() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(t);
  }, []);

  if (loading) {
    return (
      <div className="w-full h-[60vh] flex items-center justify-center">
        <RingLoader color="#f97316" size={80} />
      </div>
    );
  }

  return (
    <section className="relative max-w-6xl mx-auto px-6 py-24">
      {/* Background decorative shape */}
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-100 rounded-full blur-3xl -z-10"></div>

      <h1 className="text-5xl font-bold text-gray-800 mb-4 text-center">
        Schedule a Call
      </h1>

      <p className="text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto">
        Choose a time that works for you and our team will reach out to discuss
        your needs.
      </p>

      <div className="bg-white p-8 rounded-3xl border border-gray-200 max-w-xl mx-auto">
        <form className="grid gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
          />

          <textarea
            placeholder="Message / Notes"
            className="border border-gray-300 rounded-xl p-3 h-32 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
          ></textarea>

          <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition">
            Schedule Call
          </button>
        </form>
      </div>
    </section>
  );
}
