"use client";

// ==========================================
// FILE: app/page.tsx (Home Page)
// ==========================================
import Hero from "../components/home/Hero";
import Features from "../components/home/Features";
import CTA from "../components/home/CTA";
import ContactUs from "@/components/common/ContactUs";
import AboutSection from "@/components/home/About";
import { RingLoader } from "react-spinners";
import { useState, useEffect } from "react";
import Services from "@/components/home/Services";
import Testimonials from "@/components/home/Testimonials";
import TrustCredibility from "@/components/home/Credibility";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import TeamSection from "@/components/about/Team";
import Solutions from "./solutions/page";
import SolutionsMarquee from "@/components/home/Solutions";
import BlogsCarousel from "@/components/home/BlogsSection";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000); // 1s loader
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <RingLoader color="#f97316" size={80} />
      </div>
    );
  }

  return (
    <main>
      <Hero />
      <Services />
      <TrustCredibility />
      <AboutSection />
      <WhyChooseUs />

      <Features />
      <CTA />
      <SolutionsMarquee />
      <BlogsCarousel />
      <Testimonials />
      <ContactUs />
      <TeamSection />
    </main>
  );
}
