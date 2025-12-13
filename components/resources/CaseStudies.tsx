"use client";

import { motion } from "framer-motion";

interface CaseStudy {
  title: string;
  client: string;
  desc: string;
  image: string;
  link: string;
}

export default function CaseStudiesSection() {
  const caseStudies: CaseStudy[] = [
    {
      title: "Telehealth Integration Success",
      client: "MediClinic",
      desc: "How MediClinic seamlessly implemented telehealth with RCMIQ solutions to enhance patient care.",
      image: "/images/1.jpg",
      link: "/resources/telehealth-case-study",
    },
    {
      title: "Financial Dashboard Transformation",
      client: "FinCorp",
      desc: "Implemented real-time dashboards for better decision-making and operational efficiency.",
      image: "/images/2.jpg",
      link: "/resources/financial-case-study",
    },
    {
      title: "Secure EMR Implementation",
      client: "HealthTech Inc.",
      desc: "Delivered HIPAA-compliant EMR integration with seamless workflows for hospital staff.",
      image: "/images/1.jpg",
      link: "/resources/emr-case-study",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-14">
      <h2 className="text-4xl font-bold text-teal-700 mb-6 text-center">
        Case Studies
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {caseStudies.map((cs, idx) => (
          <motion.a
            key={cs.title}
            href={cs.link}
            className="group bg-white border border-gray-200 rounded-2xl overflow-hidden transition flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="h-48 overflow-hidden">
              <img
                src={cs.image}
                alt={cs.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <span className="text-sm text-teal-500 font-semibold mb-2">
                {cs.client}
              </span>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {cs.title}
              </h3>
              <p className="text-gray-600 flex-grow">{cs.desc}</p>
              <span className="text-teal-500 font-medium mt-4 group-hover:underline">
                Read More →
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
