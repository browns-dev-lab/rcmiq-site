// ==========================================
// FILE: app/services/page.tsx
// ==========================================
export default function Services() {
  const services = [
    "Healthcare software development",
    "Financial dashboards & analytics",
    "HIPAA & financial compliance consulting",
    "Secure cloud infrastructure setups",
  ];

  return (
    <section className="relative max-w-7xl mx-auto px-6 py-24">
      {/* Optional subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-50 to-white rounded-3xl -z-10"></div>

      <h1 className="text-5xl font-bold text-teal-700 mb-12 text-center">
        Our Services
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        {services.map((service) => (
          <div
            key={service}
            className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition transform hover:-translate-y-1"
          >
            <p className="text-lg text-gray-700 flex items-center gap-3">
              <span className="text-teal-500 font-bold">✔</span> {service}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
