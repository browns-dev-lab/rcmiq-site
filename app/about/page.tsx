// ==========================================
// FILE: app/about/page.tsx
// ==========================================
export default function About() {
  return (
    <section className="relative max-w-7xl mx-auto px-6 py-24">
      {/* Subtle background shape */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-teal-100 rounded-full blur-3xl -z-10"></div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div>
          <h1 className="text-5xl font-bold text-teal-700 mb-6">About Us</h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            We are a trusted provider of healthcare and financial digital
            solutions, delivering secure, compliant, and user-friendly tools for
            clinics, hospitals, and financial institutions.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            Our mission is to empower organizations with technology that
            improves operational efficiency, ensures compliance, and provides
            seamless digital experiences for patients and clients alike.
          </p>
        </div>

        {/* Illustration / Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src="/window.svg"
            alt="About RCmiq"
            className="w-full max-w-sm rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
