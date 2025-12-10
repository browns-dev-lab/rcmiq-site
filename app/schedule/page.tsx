// ==========================================
// FILE: app/schedule/page.tsx
// ==========================================
export default function ScheduleCall() {
  return (
    <section className="relative max-w-6xl mx-auto px-6 py-24">
      {/* Background decorative shape */}
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-teal-100 rounded-full blur-3xl -z-10"></div>

      <h1 className="text-5xl font-bold text-teal-700 mb-4 text-center">
        Schedule a Call
      </h1>
      <p className="text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto">
        Choose a time that works for you and our team will reach out to discuss
        your needs.
      </p>

      <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 max-w-xl mx-auto">
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
          <input
            type="tel"
            placeholder="Phone Number"
            className="border border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-teal-500 focus:outline-none transition"
          />
          <textarea
            placeholder="Message / Notes"
            className="border border-gray-200 rounded-xl p-3 h-32 focus:ring-2 focus:ring-teal-500 focus:outline-none transition"
          ></textarea>
          <button className="bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-xl font-semibold transition">
            Schedule Call
          </button>
        </form>
      </div>
    </section>
  );
}
