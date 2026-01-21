export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pt-32">
      {/* Background gradient blur */}
      <div className="absolute -top-24 -left-24 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -right-24 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-28 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* LEFT: TEXT */}
        <div>
          <span className="inline-block mb-4 px-4 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
            🚀 Productivity App
          </span>

          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Stay Focused. <br />
            Get More Done <br />
            with <span className="text-blue-600">FocusFlow</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl">
            FocusFlow helps you block distractions, manage tasks,
            and build deep work habits so you can achieve more every day.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition transform hover:scale-105 active:scale-95">
              Get Started Free
            </button>

            <button className="px-8 py-4 rounded-xl border border-gray-300 text-gray-800 font-semibold hover:bg-gray-100 transition transform hover:scale-105 active:scale-95">
              View Demo
            </button>
          </div>
        </div>

        {/* RIGHT: MOCKUP CARD */}
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-3xl blur-xl opacity-30"></div>

          <div className="relative bg-white rounded-3xl shadow-2xl p-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-sm text-gray-500">Today’s Focus</p>
                <p className="text-xl font-bold">Deep Work Session</p>
              </div>
              <span className="px-3 py-1 text-sm rounded-full bg-green-100 text-green-700">
                Active
              </span>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-gray-50 flex items-center justify-between">
                <span>Design Landing Page</span>
                <span className="text-sm text-gray-500">25 min</span>
              </div>

              <div className="p-4 rounded-xl bg-gray-50 flex items-center justify-between">
                <span>Fix Tailwind Config</span>
                <span className="text-sm text-gray-500">15 min</span>
              </div>

              <div className="p-4 rounded-xl bg-gray-50 flex items-center justify-between">
                <span>Write GitHub README</span>
                <span className="text-sm text-gray-500">10 min</span>
              </div>
            </div>

            <button className="mt-6 w-full py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition transform hover:scale-105 active:scale-95">
              Start Focus Session
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
