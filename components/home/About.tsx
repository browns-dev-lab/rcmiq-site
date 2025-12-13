"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="w-full bg-white py-6 sm:py-8 md:py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full flex justify-center"
        >
          <Image
            src="/illustrations/about.jpg"
            alt="About Illustration"
            width={460}
            height={460}
            className="rounded-2xl w-[90%] sm:w-full"
          />
        </motion.div>

        {/* Right Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl sm:text-2xl md:text-4xl text-teal-800 text-brand mb-3 md:mb-4 leading-snug">
            Who We Are?
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed mb-4 md:mb-6">
            We are committed to delivering high-quality solutions that empower
            businesses and individuals alike. Our mission is to simplify complex
            processes with modern, user-friendly and efficient technology.
          </p>

          <motion.button
            whileHover={{ x: 4 }}
            className="btn btn-primary transition text-sm md:text-base"
          >
            See More <ArrowRight size={18} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
