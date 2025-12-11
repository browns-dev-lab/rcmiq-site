"use client";

export default function ContactUs() {
  return (
    <section className="w-full bg-[#00b2ad] px-6 py-14 mt-10 flex items-center">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-start w-full">
        {/* Left Text */}
        <div className="md:w-1/2 text-white">
          <h2 className="text-4xl font-bold mb-4">
            Let's Build Something Great Together
          </h2>
          <p className="text-lg leading-relaxed">
            Have a project in mind or want to learn more about our solutions?
            Reach out to our team and let's discuss how we can help you achieve
            your goals.
          </p>
        </div>

        {/* Right Form */}
        <div className="md:w-1/2 w-full">
          <form className="flex flex-col gap-6 bg-white rounded-2xl p-8 shadow-lg">
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
              className="bg-[#00b2ad] text-white px-6 py-3 rounded-lg font-medium hover:bg-teal-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
