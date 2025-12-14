// ==========================================
// FILE: components/home/CTA.jsx
// ==========================================

export default function CTA() {
  return (
    <section
      className="
        relative max-w-7xl mx-auto
        px-4 sm:px-6
        py-4 sm:py-5 md:py-6
        my-4 sm:my-6
        bg-blue-700 text-white
        rounded-lg sm:rounded-xl
        flex items-center justify-center md:justify-between
        gap-3 md:gap-4
      "
    >
      {/* Left label – desktop only */}
      <div className="flex-1 text-left hidden md:block">
        <p className="text-white/90 font-medium text-sm md:text-base">
          Let’s build secure, compliant, and impactful solutions together
        </p>
      </div>

      {/* Center button */}
      <a
        href="/schedule"
        className="
          inline-flex items-center gap-2
          bg-white text-blue-600 font-semibold
          px-4 sm:px-5 md:px-6
          py-2
          rounded-md sm:rounded-lg
          text-sm md:text-base
          transition transform hover:scale-105
        "
      >
        Schedule a Call
      </a>

      {/* Right label – desktop only */}
      <div className="flex-1 text-right hidden md:block">
        <p className="text-white/90 font-medium text-sm md:text-base">
          Quick & easy consultation. Consult our team to get more information.
        </p>
      </div>
    </section>
  );
}
