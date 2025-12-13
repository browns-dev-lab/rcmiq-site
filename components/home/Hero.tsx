"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: { clientX: number; clientY: number }) => {
      // Calculate mouse position relative to viewport center
      const x = (e.clientX - window.innerWidth / 2) / window.innerWidth;
      const y = (e.clientY - window.innerHeight / 2) / window.innerHeight;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative overflow-hidden pt-16 sm:pt-20 md:pt-24 lg:pt-28 pb-[160px] sm:pb-[200px] md:pb-[260px] lg:pb-[340px]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bgs/hero-bg.jpg"
          alt="Background"
          fill
          className="object-cover object-left opacity-60"
        />
        <div className="absolute inset-0 bg-linear-to-l from-white/95 via-white/50 to-transparent/40" />
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-10 md:py-14 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* LEFT CONTENT */}
        <div
          className="text-left animate-slideUp opacity-0 relative z-20 lg:pr-20 xl:pr-32"
          style={{ animationDelay: "0.15s" }}
        >
          <h2 className="font-bold text-gray-800 mb-5 font-worksans leading-tight text-2xl sm:text-3xl md:text-4xl">
            Secure & Scalable Digital Solutions for Healthcare & Finance
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 max-w-xl font-worksans">
            We build trusted platforms with enterprise-grade security,
            compliance-first workflows, and data-driven efficiency to help you
            scale confidently.
          </p>

          {/* Buttons – always one row */}
          <div className="flex flex-nowrap gap-4 overflow-x-auto sm:overflow-visible">
            <a
              href="/contact"
              className="btn-primary btn transition font-worksans whitespace-nowrap"
            >
              Get Started
            </a>

            <a
              href="/solutions"
              className="btn btn-outline transition whitespace-nowrap"
            >
              Explore Solutions
            </a>
          </div>
        </div>

        {/* RIGHT ILLUSTRATION */}
        <div
          className="flex justify-center lg:justify-end animate-slideUp opacity-0 pt-6 md:pt-10 relative z-10"
          style={{ animationDelay: "0.3s" }}
        >
          <div
            className="relative transition-transform duration-200 ease-out"
            style={{
              transform: `translate(${mousePosition.x * 15}px, ${
                mousePosition.y * 15
              }px)`,
            }}
          >
            <Image
              src="/illustrations/hero.png"
              alt="Healthcare Finance Illustration"
              width={1600}
              height={1600}
              className="
                drop-shadow-2xl floating
                scale-[0.95]
                sm:scale-[1.05]
                md:scale-[1.15]
                lg:scale-[1.35]
                xl:scale-[1.5]
              "
            />
          </div>
        </div>
      </div>

      {/* CURVE + BADGE */}
      <div
        className="absolute bottom-0 left-0 right-0 z-20 overflow-hidden text-center animate-slideUp opacity-0"
        style={{ animationDelay: "0.45s" }}
      >
        {/* Mobile / Tablet Curve */}
        <svg
          viewBox="0 0 1440 400"
          xmlns="http://www.w3.org/2000/svg"
          className="block lg:hidden w-full h-[120px] sm:h-[160px] md:h-[200px]"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            d="M0,220 C360,160 1080,160 1440,220 L1440,500 L0,500 Z"
          />
        </svg>

        {/* Desktop Curve (ORIGINAL DEEP ONE) */}
        <svg
          viewBox="0 0 1440 400"
          xmlns="http://www.w3.org/2000/svg"
          className="hidden lg:block w-full h-[260px]"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            d="M0,300 C360,50 1080,50 1440,300 L1440,500 L0,500 Z"
          />
        </svg>

        {/* Badge */}
        <div className="absolute inset-0 flex items-center justify-center pb-4 lg:pb-6">
          <Image
            src="/next.svg"
            width={70}
            height={70}
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
            transform: translateY(32px);
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
            transform: translateY(-12px);
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
