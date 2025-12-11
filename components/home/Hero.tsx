"use client";

// ==========================================
// FILE: components/home/Hero.jsx
// ==========================================
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-[420px] lg:pb-[500px] xl:pb-[400px]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bgs/hero-bg.jpg"
          alt="Background"
          fill
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-white/95 via-white/40 to-transparent/50" />
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-16 grid lg:grid-cols-2 gap-20 items-center">
        {/* LEFT CONTENT */}
        <div
          className="text-left animate-slideUp opacity-0 relative z-20 pr-10 lg:pr-20 xl:pr-32"
          style={{ animationDelay: "0.15s" }}
        >
          <h2 className="font-bold text-gray-800 mb-6 font-worksans leading-tight text-3xl md:text-4xl">
            Secure & Scalable Digital Solutions for Healthcare & Finance
          </h2>

          <p className="text-xl text-gray-600 mb-12 max-w-xl font-worksans">
            We build trusted platforms with enterprise-grade security,
            compliance-first workflows, and data-driven efficiency to help you
            scale confidently.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/contact"
              className="btn-primary btn transition font-worksans"
            >
              Get Started
            </a>

            <a href="/solutions" className="btn btn-outline transition">
              Explore Solutions
            </a>
          </div>
        </div>

        {/* RIGHT ILLUSTRATION — slightly smaller + floating */}
        <div
          className="flex justify-center lg:justify-end animate-slideUp opacity-0 pt-10 relative z-10"
          style={{ animationDelay: "0.3s" }}
        >
          <div className="relative">
            <Image
              src="/illustrations/hero.png"
              alt="Healthcare Finance Illustration"
              width={1800}
              height={1800}
              className="drop-shadow-2xl scale-[1.2] lg:scale-[1.40] xl:scale-[1.55] translate-x-4 floating"
            />
          </div>
        </div>
      </div>

      {/* DEEPER CURVE + SMALL IMAGE */}
      <div
        className="absolute bottom-0 left-0 right-0 z-20 overflow-hidden text-center animate-slideUp opacity-0"
        style={{ animationDelay: "0.45s" }}
      >
        <svg
          viewBox="0 0 1440 400"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-[260px]"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            d="M0,300 C360,50 1080,50 1440,300 L1440,500 L0,500 Z"
          />
        </svg>

        {/* bottom image moved down */}
        <div className="absolute inset-0 flex items-center justify-center pb-10 md:pb-6 lg:pb-4">
          <Image
            src="/next.svg"
            width={90}
            height={90}
            alt="Secure badge"
            className="opacity-95"
          />
        </div>
      </div>

      {/* ANIMATION STYLES */}
      <style jsx>{`
        @keyframes slideUp {
          0% {
            opacity: 0;
            transform: translateY(40px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideUp {
          animation: slideUp 0.9s ease forwards;
        }

        @keyframes floating {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-14px);
          }
          100% {
            transform: translateY(0);
          }
        }
        .floating {
          animation: floating 5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
