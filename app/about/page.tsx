"use client";

import { useState, useEffect } from "react";
import { RingLoader } from "react-spinners";
import StorySection from "@/components/about/StorySection";
import TeamSection from "@/components/about/Team";
import ContactUs from "@/components/common/ContactUs";

export default function About() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main>
      {loading ? (
        <div className="w-full h-screen flex items-center justify-center">
          <RingLoader color="#00b2ad" size={70} />
        </div>
      ) : (
        <>
          <StorySection />
          <TeamSection />
          <ContactUs />
        </>
      )}
    </main>
  );
}
