// ==========================================
// FILE: components/home/CTA.jsx
// ==========================================

export default function CTA() {
  return (
    <section className="relative max-w-7xl my-10 mx-auto px-6 py-6 bg-[#00b2ad] text-white rounded-xl flex items-center justify-between gap-4">
      {/* Optional left label */}
      <div className="flex-1 text-left hidden md:block">
        <p className="text-white/90 font-medium text-sm md:text-base">
          Let’s build secure, compliant, and impactful solutions together
        </p>
      </div>

      {/* Center button */}
      <a
        href="/schedule"
        className="mx-auto inline-flex items-center gap-2 bg-white text-teal-700 font-semibold px-6 py-2 rounded-lg text-sm md:text-base hover:scale-105 transition transform"
      >
        Schedule a Call
      </a>

      {/* Right text */}
      <div className="flex-1 text-right hidden md:block">
        <p className="text-white/90 font-medium text-sm md:text-base">
          Quick & easy consultation. Consult our team to get more information.
        </p>
      </div>
    </section>
  );
}
