// ==========================================
// FILE: components/home/Hero.jsx
// ==========================================
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-12 grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <div className="text-left">
          <h2 className=" font-bold text-teal-700 mb-6 font-worksans leading-tight">
            Secure & Scalable Digital Solutions for Healthcare & Finance
          </h2>

          <p className="text-xl text-gray-600 mb-10 max-w-xl font-worksans">
            We build trusted platforms with enterprise-grade security,
            compliance-first workflows, and data-driven efficiency to help you
            scale confidently.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/contact"
              className="bg-teal-600 text-white px-8 py-3 rounded-xl text-lg 
              hover:bg-teal-700 transition font-worksans"
            >
              Get Started
            </a>

            <a
              href="/solutions"
              className="px-8 py-3 rounded-xl border border-teal-400 text-teal-600 
              hover:bg-teal-50 transition text-lg font-worksans"
            >
              Explore Solutions
            </a>
          </div>
        </div>

        {/* RIGHT ILLUSTRATION */}
        <div className="flex justify-center lg:justify-end">
          <Image
            src="/window.svg"
            alt="Healthcare Finance Illustration"
            width={520}
            height={520}
            className="drop-shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
