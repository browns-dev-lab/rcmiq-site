// ==========================================
// FILE: app/expertise/page.tsx
// ==========================================

"use client";

import ContactUs from "@/components/common/ContactUs";
import ExpertiseArea from "@/components/expertise/ExpertiseArea";
import { useState, useEffect } from "react";
import { RingLoader } from "react-spinners";

export default function Expertise() {
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
    <main>
      <ExpertiseArea />
      <ContactUs />
    </main>
  );
}
