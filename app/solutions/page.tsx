// ==========================================
// FILE: app/solutions/page.tsx
// ==========================================
export default function Solutions() {
  const solutions = [
    {
      title: "Revenue Cycle Management",
      desc: "Optimize billing, coding, and claims for faster reimbursements.",
      icon: "/icons/rcm.svg",
    },
    {
      title: "Telehealth Platform",
      desc: "Secure virtual consultations and patient management tools.",
      icon: "/icons/telehealth.svg",
    },
    {
      title: "Financial Analytics",
      desc: "Real-time dashboards, reporting, and predictive insights.",
      icon: "/icons/analytics.svg",
    },
    {
      title: "Automation Tools",
      desc: "Streamline repetitive tasks, increase efficiency, and reduce errors.",
      icon: "/icons/automation.svg",
    },
  ];

  return (
    <section className="relative max-w-7xl mx-auto px-6 py-24">
      {/* Optional subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-50 to-white rounded-3xl -z-10"></div>

      <h1 className="text-5xl font-bold text-teal-700 mb-12 text-center">
        Our Solutions
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {solutions.map((s) => (
          <div
            key={s.title}
            className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition transform hover:-translate-y-1 text-center"
          >
            <img
              src={s.icon}
              alt={s.title}
              className="w-14 h-14 mb-4 mx-auto"
            />
            <h3 className="text-xl font-semibold text-teal-700 mb-2">
              {s.title}
            </h3>
            <p className="text-gray-600">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
