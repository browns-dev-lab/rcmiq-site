"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function StorySection() {
  return (
    <section className="relative w-full py-28 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/bgs/hero-bg.jpg"
          alt="Our Story Background"
          fill
          className="object-cover opacity-70"
          priority
        />

        {/* Fade to bottom overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-white" />
      </div>

      {/* CONTENT */}
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-6"
        >
          Our Story
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-gray-700 text-lg leading-relaxed max-w-2xl mx-auto"
        >
          From a small idea to a growing digital innovation company, our journey
          has always been guided by passion, integrity, and a focus on building
          meaningful technology. We continue to push boundaries, shaping
          solutions that empower businesses across industries.
        </motion.p>
      </div>
    </section>
  );
}
