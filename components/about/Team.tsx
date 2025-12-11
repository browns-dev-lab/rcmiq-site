"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const team = [
  {
    name: "Shekar",
    role: "Founder",
    image: "/globe.svg",
  },
  {
    name: "Aqeed",
    role: "Co-Founder / Director",
    image: "/globe.svg",
  },
  {
    name: "Ayesha",
    role: "Chief Operating Officer",
    image: "/globe.svg",
  },
];

export default function TeamSection() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl text-gray-800 font-bold text-brand mb-12">
          Our Leadership Team
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <div className="w-40 h-40 rounded-full overflow-hidden mb-4 bg-gray-100">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={200}
                  height={200}
                  className="object-cover w-full h-full"
                />
              </div>

              <h3 className="text-xl font-semibold text-gray-800">
                {member.name}
              </h3>
              <p className="text-gray-500 mt-1 text-sm">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
