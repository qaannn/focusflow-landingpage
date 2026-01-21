export default function CTA() {
  return (
    <section id="demo" className="py-24 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="rounded-3xl bg-white/10 backdrop-blur-md p-12 md:p-16 text-center shadow-2xl">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Ready to boost your productivity?
          </h2>

          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-10">
            Join thousands of users who use FocusFlow every day
            to stay focused, manage their time, and get more done.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-10 py-4 rounded-xl bg-white text-blue-700 font-bold hover:bg-gray-100 transition transform hover:scale-105 active:scale-95">
              Get Started Free
            </button>

            <button className="px-10 py-4 rounded-xl border border-white/40 font-semibold hover:bg-white/10 transition transform hover:scale-105 active:scale-95">
              View Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
