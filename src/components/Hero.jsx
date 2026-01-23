"use client"
import { ChevronDown } from "lucide-react"

export default function Hero() {
  return (
    <section
      id="hero"
      className="reveal relative overflow-hidden pt-24 lg:pt-24 pb-24 min-h-[85vh] bg-white dark:bg-gray-950"
    >
      {/* Background blobs */}
      <div className="pointer-events-none absolute top-0 left-0 w-[420px] h-[420px] bg-blue-500/20 rounded-full blur-3xl float-blob-1"></div>
      <div className="pointer-events-none absolute bottom-34 right-0 w-[420px] h-[420px] bg-indigo-500/20 rounded-full blur-3xl float-blob-2"></div>

      {/* Content wrapper — controls height */}
      <div className="relative z-10 flex items-start">
        <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* LEFT */}
          <div>
            <span className="inline-block mb-4 px-4 py-1 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-sm font-medium">
              🚀 Productivity App
            </span>

            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 dark:text-white">
              Stay Focused. <br />
              Get More Done <br />
              with <span className="gradient-text">FocusFlow</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-xl">
              FocusFlow helps you block distractions, manage tasks,
              and build deep work habits so you can achieve more every day.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="gradient-btn btn-primary px-10 py-4 rounded-xl text-white font-bold transition transform hover:scale-105 active:scale-95">
                Start Free — Upgrade Anytime
              </button>

              <button className="group relative px-10 py-4 rounded-xl border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 font-semibold overflow-hidden transition transform hover:-translate-y-1 hover:shadow-lg active:scale-95">
                <span className="relative z-10">View Demo</span>
                <span className="absolute inset-0 bg-gray-100 dark:bg-gray-800 opacity-0 group-hover:opacity-100 transition"></span>
              </button>
            </div>
            <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <span>⭐ 4.9/5 rating</span>
              <span>•</span>
              <span>2,000+ users</span>
              <span>•</span>
              <span>No credit card required</span>
            </div>
          </div>

          {/* RIGHT MOCKUP */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-3xl blur-xl opacity-30"></div>

            <div className="relative bg-white dark:bg-gray-900 rounded-3xl shadow-2xl p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Today’s Focus
                  </p>
                  <p className="text-xl font-bold dark:text-white">
                    Deep Work Session
                  </p>
                </div>
                <span className="px-3 py-1 text-sm rounded-full bg-green-100 text-green-700">
                  Active
                </span>
              </div>

              <div className="space-y-4">
                {[
                  ['Design Landing Page', '25 min'],
                  ['Fix Tailwind Config', '15 min'],
                  ['Write GitHub README', '10 min'],
                ].map(([task, time]) => (
                  <div
                    key={task}
                    className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800 flex items-center justify-between"
                  >
                    <span className="dark:text-gray-200">{task}</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {time}
                    </span>
                  </div>
                ))}
              </div>

              <button className="mt-6 w-full py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition transform hover:scale-105 active:scale-95">
                Start Focus Session
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        onClick={() => {
          const el = document.getElementById("features")
          el?.scrollIntoView({ behavior: "smooth" })
        }}
        className="fixed bottom-12 left-1/2 -translate-x-1/2
                  z-40 cursor-pointer animate-bounce
                  text-gray-400 hover:text-blue-500 transition
                  opacity-70 hover:opacity-100"
      >
        <ChevronDown size={24} />
      </div>
    </section>
  )
}
