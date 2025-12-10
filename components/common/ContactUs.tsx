// ==========================================
// FILE: components/common/ContactUs.tsx
// ==========================================
"use client";

export default function ContactUs() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      <div className="flex flex-col md:flex-row gap-12 items-start">
        {/* Left Text */}
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold text-teal-700 mb-4">
            Let's Build Something Great Together
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Have a project in mind or want to learn more about our solutions?
            Reach out to our team and let's discuss how we can help you achieve
            your goals.
          </p>
        </div>

        {/* Right Form */}
        <div className="md:w-1/2 w-full">
          <form className="flex flex-col gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="border-b border-gray-300 focus:border-teal-500 focus:outline-none text-gray-700 py-2 placeholder-gray-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border-b border-gray-300 focus:border-teal-500 focus:outline-none text-gray-700 py-2 placeholder-gray-400"
            />
            <textarea
              placeholder="Your Message"
              className="border-b border-gray-300 focus:border-teal-500 focus:outline-none text-gray-700 py-2 placeholder-gray-400 resize-none h-32"
            ></textarea>
            <button
              type="submit"
              className="bg-teal-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-teal-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
