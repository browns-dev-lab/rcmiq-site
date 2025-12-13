// FILE: components/expertise/ExpertiseArea.tsx
"use client";

interface ExpertiseItem {
  title: string;
  desc: string;
  points: string[];
  icon: string;
  bgColor: string;
}

export default function ExpertiseArea() {
  const expertiseAreas: ExpertiseItem[] = [
    {
      title: "Healthcare Technology",
      desc: "We build HIPAA-compliant software solutions tailored for clinics, hospitals, and telehealth providers, ensuring secure data handling and seamless patient experiences.",
      points: [
        "EMR/EHR integrations",
        "Telemedicine platforms",
        "Patient portals & mobile apps",
        "Medical device connectivity",
      ],
      icon: "/illustrations/ins.jpg",
      bgColor: "bg-teal-50",
    },
    {
      title: "Financial Solutions",
      desc: "Our financial tools provide secure billing, analytics, and revenue optimization, empowering institutions to manage funds efficiently and accurately.",
      points: [
        "Revenue cycle management",
        "Financial dashboards & analytics",
        "Payment processing integrations",
        "Automated reporting",
      ],
      icon: "/illustrations/bill.jpg",
      bgColor: "bg-orange-50",
    },
    {
      title: "Compliance & Security",
      desc: "Protecting sensitive data is critical. We ensure full regulatory compliance, security audits, and risk management for your organization.",
      points: [
        "HIPAA & GDPR compliance",
        "Data encryption & access control",
        "Audit trails & reporting",
        "Security risk assessments",
      ],
      icon: "/illustrations/about.jpg",
      bgColor: "bg-purple-50",
    },
    {
      title: "Enterprise Design & UX",
      desc: "We create scalable, user-friendly interfaces that improve operational efficiency and provide an intuitive experience for end-users.",
      points: [
        "Intuitive UX/UI design",
        "Scalable architecture",
        "Responsive & accessible design",
        "Workflow optimization",
      ],
      icon: "/illustrations/hero.png",
      bgColor: "bg-yellow-50",
    },
  ];

  return (
    <section className="w-full">
      {expertiseAreas.map((area, idx) => {
        const isEven = idx % 2 === 0;

        return (
          <div
            key={area.title}
            className={`${area.bgColor} flex flex-col md:flex-row w-full`}
          >
            {/* Text first on mobile, conditional on desktop */}
            <div
              className={`
            w-full md:w-1/2 p-12 flex flex-col justify-center text-left
            order-1
            ${isEven ? "md:order-2" : "md:order-1"}
          `}
            >
              <h3 className="text-4xl font-bold text-gray-800 mb-6">
                {area.title}
              </h3>
              <p className="text-gray-700 mb-6">{area.desc}</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                {area.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>

            {/* Image second on mobile, conditional on desktop */}
            <div
              className={`
            w-full md:w-1/2 h-80 md:h-[500px] overflow-hidden
            order-2
            ${isEven ? "md:order-1" : "md:order-2"}
          `}
            >
              <img
                src={area.icon}
                alt={area.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        );
      })}
    </section>
  );
}
