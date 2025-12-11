"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="w-full bg-white py-20 ">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full flex justify-center"
        >
          <Image
            src="/globe.svg"
            alt="About Illustration"
            width={500}
            height={500}
            className="rounded-2xl"
          />
        </motion.div>

        {/* Right Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-brand mb-4 leading-tight">
            About Our Company
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            We are committed to delivering high‑quality solutions that empower
            businesses and individuals alike. Our mission is to simplify complex
            processes with modern, user-friendly and efficient technology.
          </p>

          <motion.button
            whileHover={{ x: 4 }}
            className="btn btn-primary transition"
          >
            See More <ArrowRight size={20} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
