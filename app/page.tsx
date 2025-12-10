// ==========================================
// FILE: app/page.tsx (Home Page)
// ==========================================
import Hero from "../components/home/Hero";
import Features from "../components/home/Features";
import CTA from "../components/home/CTA";
import ContactUs from "@/components/common/ContactUs";

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <CTA />
      <ContactUs />
    </div>
  );
}
