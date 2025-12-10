// ==========================================
// FILE: components/home/CTA.jsx
// ==========================================
export default function CTA() {
  return (
    <section className="relative max-w-7xl mx-auto px-6 py-24 text-center rounded-3xl overflow-hidden bg-gradient-to-r from-teal-600 to-teal-400 text-white mt-16 shadow-xl">
      {/* Decorative overlay shapes */}
      <div className="absolute -top-20 -left-20 w-60 h-60 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>

      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        Ready to Work With Us?
      </h2>
      <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto text-white/90">
        Contact our team and let's build secure, compliant, and impactful
        digital solutions together.
      </p>

      <a
        href="/schedule"
        className="inline-flex items-center gap-3 bg-white text-teal-700 font-semibold px-8 py-4 rounded-xl text-lg hover:scale-105 hover:shadow-lg transition transform"
      >
        Schedule a Call
      </a>
    </section>
  );
}
