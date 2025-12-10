// ==========================================
// FILE: app/resources/page.tsx
// ==========================================
export default function Resources() {
  const resources = [
    {
      title: "Healthcare Compliance Guide",
      type: "Guide",
      desc: "Learn best practices for HIPAA-compliant healthcare software.",
      link: "/resources/healthcare-compliance",
    },
    {
      title: "Financial Analytics Whitepaper",
      type: "Whitepaper",
      desc: "Discover insights into building secure financial dashboards.",
      link: "/resources/financial-analytics",
    },
    {
      title: "Case Study: Telehealth Integration",
      type: "Case Study",
      desc: "How a clinic implemented telehealth seamlessly with RCMIQ solutions.",
      link: "/resources/telehealth-case-study",
    },
    {
      title: "Enterprise UI/UX Principles",
      type: "Blog",
      desc: "Best practices for designing scalable and user-friendly enterprise systems.",
      link: "/resources/ui-ux-principles",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <h1 className="text-5xl font-bold text-teal-700 mb-8 text-center">
        Resources
      </h1>
      <p className="text-lg text-gray-600 text-center mb-16 max-w-3xl mx-auto">
        Explore our latest guides, case studies, blogs, and whitepapers to help
        you stay ahead in healthcare and financial digital solutions.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {resources.map((r) => (
          <a
            key={r.title}
            href={r.link}
            className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition transform flex flex-col justify-between"
          >
            <span className="text-sm font-semibold text-teal-500 mb-2">
              {r.type}
            </span>
            <h3 className="text-xl font-semibold text-teal-700 mb-2">
              {r.title}
            </h3>
            <p className="text-gray-600 flex-grow">{r.desc}</p>
            <span className="text-teal-500 font-medium mt-4 hover:underline">
              Read More →
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
