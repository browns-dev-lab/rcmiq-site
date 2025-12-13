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

          {/* Video Section */}
          <section className="max-w-6xl mx-auto px-6 py-24">
            <h2 className="text-4xl font-bold text-teal-700 mb-8 text-center">
              Our Story in Action
            </h2>
            <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg">
              <video
                src="/videos/about-us.mp4"
                controls
                className="w-full h-full object-cover"
              />
            </div>
          </section>

          <ContactUs />
        </>
      )}
    </main>
  );
}
