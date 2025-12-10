// ==========================================
// FILE: components/home/Features.jsx
// ==========================================
export default function Features() {
  const items = [
    {
      title: "Healthcare Compliance",
      desc: "HIPAA-ready digital tools for clinics, ensuring secure patient data handling.",
      icon: "/next.svg",
    },
    {
      title: "Financial Security",
      desc: "Bank-grade protection for sensitive financial and billing data.",
      icon: "/next.svg",
    },
    {
      title: "Enterprise Design",
      desc: "Clean, professional, industry-standard UI & UX for all digital solutions.",
      icon: "/next.svg",
    },
  ];

  return (
    <section className="relative max-w-7xl mx-auto py-24 px-6">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-teal-200 to-teal-50 border border-teal-200 rounded-3xl -z-10"></div>

      <h2 className="text-4xl font-semibold text-center text-teal-700 mb-12">
        Our Core Features
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {items.map((f) => (
          <div
            key={f.title}
            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition transform hover:-translate-y-1 duration-300"
          >
            {f.icon && (
              <img
                src={f.icon}
                alt={f.title}
                className="w-14 h-14 mb-4 animate-bounce-slow"
              />
            )}
            <h3 className="text-2xl font-semibold mb-3 text-teal-700">
              {f.title}
            </h3>
            <p className="text-gray-600">{f.desc}</p>
          </div>
        ))}
      </div>

      {/* Extra subtle overlay effect */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/30 to-transparent rounded-3xl -z-0"></div>
    </section>
  );
}
