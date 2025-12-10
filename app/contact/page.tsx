// ==========================================
// FILE: app/contact/page.tsx
// ==========================================
export default function Contact() {
  return (
    <section className="relative max-w-6xl mx-auto px-6 py-24">
      {/* Decorative background shape */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-teal-100 rounded-full blur-3xl -z-10"></div>

      <h1 className="text-5xl font-bold text-teal-700 mb-4 text-center">
        Get in Touch
      </h1>
      <p className="text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto">
        Have questions or want to schedule a call? Fill out the form below or
        reach us directly via email or phone.
      </p>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
          <form className="grid gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="border border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-teal-500 focus:outline-none transition"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-teal-500 focus:outline-none transition"
            />
            <textarea
              placeholder="Your Message"
              className="border border-gray-200 rounded-xl p-3 h-36 focus:ring-2 focus:ring-teal-500 focus:outline-none transition"
            ></textarea>
            <button className="bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-xl font-semibold transition">
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col justify-center space-y-6 text-gray-700">
          <div>
            <h4 className="text-lg font-semibold mb-2">Email</h4>
            <p>support@rcmiq.com</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2">Phone</h4>
            <p>+1 (800) 234-5678</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2">Address</h4>
            <p>123 RC Building, Silicon Valley, CA</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2">Schedule a Call</h4>
            <a
              href="/schedule"
              className="inline-block bg-teal-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-teal-600 transition"
            >
              Schedule Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
