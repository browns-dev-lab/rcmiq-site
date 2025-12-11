// ==========================================
// FILE: app/page.tsx (Home Page)
// ==========================================
import Hero from "../components/home/Hero";
import Features from "../components/home/Features";
import CTA from "../components/home/CTA";
import ContactUs from "@/components/common/ContactUs";
import About from "./about/page";
import AboutSection from "@/components/home/About";

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutSection />
      <Features />
      <CTA />
      <ContactUs />
    </div>
  );
}
