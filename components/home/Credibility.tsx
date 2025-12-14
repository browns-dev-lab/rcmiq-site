"use client";

import Image from "next/image";
import { ShieldCheck, Lock, Award, CheckCircle } from "lucide-react";

export default function TrustCredibility() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Text line */}
        <p className="text-center text-sm md:text-base text-gray-600 mb-8">
          Trusted by healthcare & finance teams for secure, compliant digital
          solutions
        </p>

        {/* Trust items */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 items-center">
          <div className="flex flex-col items-center text-center gap-2">
            <ShieldCheck size={28} className="text-blue-700" />
            <span className="text-sm font-medium text-gray-700">
              HIPAA Compliant
            </span>
          </div>

          <div className="flex flex-col items-center text-center gap-2">
            <Lock size={28} className="text-blue-700" />
            <span className="text-sm font-medium text-gray-700">
              Enterprise Security
            </span>
          </div>

          <div className="flex flex-col items-center text-center gap-2">
            <Award size={28} className="text-blue-700" />
            <span className="text-sm font-medium text-gray-700">
              Industry Expertise
            </span>
          </div>

          <div className="flex flex-col items-center text-center gap-2">
            <CheckCircle size={28} className="text-blue-700" />
            <span className="text-sm font-medium text-gray-700">
              Compliance First
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
