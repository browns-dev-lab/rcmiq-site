"use client";

import { useState, useEffect } from "react";
import { RingLoader } from "react-spinners";
import ResourcesSection from "@/components/resources/ResourcesList";
import ContactUs from "@/components/common/ContactUs";
import AllResourcesGrid from "@/components/resources/AllResourcesGrid";
import CaseStudiesSection from "@/components/resources/CaseStudies";
import GuidesSection from "@/components/resources/Guides";

export default function Resources() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(t);
  }, []);

  if (loading) {
    return (
      <div className="w-full h-[60vh] flex items-center justify-center">
        <RingLoader color="#00e6df" size={90} />
      </div>
    );
  }

  return (
    <main>
      <ResourcesSection />
      <AllResourcesGrid />
      <CaseStudiesSection />
      <GuidesSection />
      <ContactUs />
    </main>
  );
}
