// ==========================================
// FILE: app/expertise/page.tsx
// ==========================================
export default function Expertise() {
  const expertiseAreas = [
    {
      title: "Healthcare Technology",
      desc: "We build HIPAA-compliant software solutions tailored for clinics, hospitals, and telehealth providers, ensuring secure data handling and seamless patient experiences.",
      points: [
        "EMR/EHR integrations",
        "Telemedicine platforms",
        "Patient portals & mobile apps",
        "Medical device connectivity",
      ],
      icon: "/icons/healthcare.svg",
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
      icon: "/icons/financial.svg",
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
      icon: "/icons/security.svg",
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
      icon: "/icons/design.svg",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      <h1 className="text-5xl font-bold text-teal-700 mb-12 text-center">
        Our Expertise
      </h1>

      <div className="flex flex-col gap-10">
        {expertiseAreas.map((area) => (
          <div
            key={area.title}
            className="flex flex-col md:flex-row gap-6 items-start bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition transform hover:-translate-y-1"
          >
            <img
              src={area.icon}
              alt={area.title}
              className="w-16 h-16 md:mt-2"
            />
            <div>
              <h3 className="text-2xl font-semibold text-teal-700 mb-2">
                {area.title}
              </h3>
              <p className="text-gray-600 mb-2">{area.desc}</p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                {area.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
