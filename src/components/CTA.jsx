export default function CTA() {
  return (
    <section id="demo" className="scroll-mt-28 reveal py-24 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-gray-900 dark:to-black text-white">
      <div className="cta-glow max-w-4xl mx-auto rounded-3xl cta-gradient text-white p-12 text-center">
        <div className="rounded-3xl bg-white/10 dark:bg-white/5 backdrop-blur-md p-12 md:p-16 text-center shadow-2xl">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Ready to boost your productivity?
          </h2>

          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-10">
            Join thousands of users who use FocusFlow every day
            to stay focused, manage their time, and get more done.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="gradient-btn px-10 py-4 rounded-xl text-white font-bold hover:scale-105 active:scale-95 transition">
              Start Free — Upgrade Anytime
            </button>

            <button className="inline-flex items-center justify-center px-10 py-4 rounded-xl border border-white/40 font-semibold hover:bg-white/10 transition transform hover:scale-105 active:scale-95">
              View Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
