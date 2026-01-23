import { useState } from 'react'
import { handleGlow } from '../utils/glow'

const features = [
  { name: 'Block distracting websites', free: true, pro: true },
  { name: 'Basic time tracking', free: true, pro: true },
  { name: 'Daily productivity report', free: true, pro: true },
  { name: 'Advanced analytics & reports', free: false, pro: true },
  { name: 'Unlimited focus sessions', free: false, pro: true },
  { name: 'Priority support', free: false, pro: true },
  { name: 'Team collaboration', free: false, pro: true },
  { name: 'Cloud sync across devices', free: false, pro: true },
]

export default function Pricing() {
  const [billing, setBilling] = useState('monthly')
  const isYearly = billing === 'yearly'
  const proPrice = isYearly ? 96 : 12

  return (
    <>
      {/* PRICING SECTION */}
      <section id="pricing" className="scroll-mt-28 reveal py-24 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-6">

          {/* Header */}
          <div className="text-center mb-14">
            <h2 className="text-4xl font-extrabold mb-4 dark:text-white">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Choose the plan that fits your productivity needs.
              Upgrade anytime as you grow.
            </p>
          </div>

          {/* Billing Toggle */}
          <div className="flex justify-center mb-16">
            <div className="relative w-64 h-12 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden flex">

              {/* Indicator pill */}
              <div
                className={`absolute inset-y-1 left-1 w-[calc(50%-0.5rem)]
                  rounded-full bg-white dark:bg-gray-700 shadow
                  transition-transform duration-300
                  ${isYearly ? 'translate-x-full' : 'translate-x-0'}
                `}
              />

              {/* Monthly */}
              <button
                onClick={() => setBilling('monthly')}
                className={`relative z-10 w-1/2
                  flex items-center justify-center
                  text-sm font-semibold transition
                  ${!isYearly
                    ? 'text-gray-900 dark:text-white'
                    : 'text-gray-500 dark:text-gray-400'
                  }`}
              >
                Monthly
              </button>

              {/* Yearly */}
              <button
                onClick={() => setBilling('yearly')}
                className={`relative z-10 w-1/2
                  flex items-center justify-center gap-2
                  text-sm font-semibold transition
                  ${isYearly
                    ? 'text-gray-900 dark:text-white'
                    : 'text-gray-500 dark:text-gray-400'
                  }`}
              >
                Yearly
                {isYearly && (
                  <span className="px-2 py-0.5 rounded-full
                                  bg-green-100 text-green-700
                                  text-[10px] font-bold">
                    20%
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 max-w-5xl mx-auto">

            {/* Free */}
            <div
              onMouseMove={handleGlow}
              className="glow-card depth-card pricing-glow
                        rounded-2xl border border-gray-300 dark:border-gray-700
                        p-10 flex flex-col justify-between min-h-[540px]
                        bg-white dark:bg-gray-900
                        shadow-sm hover:shadow-md
                        transition"
            >
              <div>
                <h3 className="text-2xl font-bold mb-2 dark:text-white">
                  Free
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mb-8">
                  Everything you need to try the product.
                </p>

                <div className="mb-6">
                  <span className="text-5xl font-extrabold dark:text-white">$0</span>
                  <span className="text-gray-500 dark:text-gray-400 ml-2 text-lg">
                    / month
                  </span>
                </div>

                <ul className="space-y-4 mb-10 text-gray-700 dark:text-gray-300">
                  {features.filter(f => f.free).map((f, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="text-green-500 text-lg">✔</span>
                      <span>{f.name}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                className="btn-primary w-full py-4 rounded-xl
                          border border-gray-400 dark:border-gray-600
                          text-gray-900 dark:text-gray-200 font-semibold text-lg
                          hover:bg-gray-100 dark:hover:bg-gray-800
                          transition transform hover:scale-[1.02] active:scale-[0.98]"
              >
                Start Free — Upgrade Anytime
              </button>
            </div>

            {/* Pro */}
            <div
              onMouseMove={handleGlow}
              className={`glow-card depth-card pricing-glow
                relative rounded-2xl
                p-10 flex flex-col justify-between min-h-[540px]
                border-2 border-blue-600
                bg-gradient-to-br
                from-blue-50 via-white to-white
                dark:from-blue-900/40 dark:via-gray-900 dark:to-gray-900
                shadow-[0_20px_50px_rgba(37,99,235,0.25)]
                transition-all duration-300
                ${isYearly ? 'scale-[1.04]' : ''}
              `}
            >

              {/* Badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2
                              px-4 py-1.5 rounded-full
                              bg-blue-600 text-white text-sm font-semibold shadow-md">
                Most Popular
              </div>

              <div>
                <h3 className="text-3xl font-extrabold mb-2 dark:text-white">
                  Pro
                </h3>
                <p className="text-sm font-semibold text-blue-600 mb-2">
                  Best value for professionals
                </p>

                <p className="text-gray-700 dark:text-gray-300 mb-8">
                  For power users who want more speed and control.
                </p>

                {/* Price */}
                <div className="mb-4 h-[72px] overflow-hidden">
                  <div
                    key={billing}
                    className="transition-all duration-300 ease-out animate-priceIn"
                  >
                    <span className="text-6xl font-extrabold tracking-tight dark:text-white">
                      ${proPrice}
                    </span>
                    <span className="text-gray-600 dark:text-gray-400 ml-2 text-lg">
                      {isYearly ? '/ year' : '/ month'}
                    </span>
                  </div>
                </div>

                {isYearly && (
                  <p className="text-sm text-green-600 font-semibold mb-6">
                    Billed yearly • $8/month equivalent
                  </p>
                )}

                <ul className="space-y-4 mb-10 text-gray-700 dark:text-gray-300">
                  {features.filter(f => f.pro).map((f, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="text-green-500 text-lg">✔</span>
                      <span>{f.name}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                className="btn-primary w-full py-4 rounded-xl
                          bg-blue-600 text-white text-lg font-semibold
                          shadow-lg hover:shadow-2xl
                          hover:bg-blue-700
                          transition transform hover:scale-[1.02] active:scale-[0.98]"
              >
                Upgrade to Pro
              </button>
            </div>

          </div>

          <p className="text-center mt-10 text-gray-500 dark:text-gray-400">
            No credit card required. Cancel anytime.
          </p>

          <div className="flex justify-center mt-10">
            <button
              className="px-10 py-4 rounded-xl
                        bg-blue-600 hover:bg-blue-700
                        text-white font-bold text-lg
                        shadow-lg hover:shadow-xl
                        transition transform hover:scale-[1.03] active:scale-[0.97]"
            >
              Start Free — Upgrade Anytime
            </button>
          </div>
        </div>
      </section>

      {/* A21 — TRUST BOOST SECTION */}
      <section className="reveal scroll-mt-28 py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-6 text-center">

          {/* Avatars */}
          <div className="flex justify-center -space-x-4 mb-6">
            {[
              'https://i.pravatar.cc/80?img=12',
              'https://i.pravatar.cc/80?img=32',
              'https://i.pravatar.cc/80?img=56',
            ].map((src, i) => (
              <img
                key={i}
                src={src}
                alt="User avatar"
                className="w-12 h-12 rounded-full border-2 border-white dark:border-gray-800 shadow-sm"
              />
            ))}
          </div>

          {/* Quote */}
          <p className="text-lg md:text-xl font-medium text-gray-800 dark:text-gray-200 mb-4 max-w-3xl mx-auto">
            “FocusFlow completely changed how I manage my deep work sessions.
            I finish tasks 2× faster and feel less burned out.”
          </p>

          {/* Author */}
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">
            — Muhammad Furqan Maulidi, Informatics Student
          </p>

          {/* Metrics */}
          <div className="flex flex-wrap justify-center gap-8 text-sm font-semibold text-gray-700 dark:text-gray-300">
            <div>⭐ 4.9/5 average rating</div>
            <div>👥 2,000+ active users</div>
            <div>⚡ 99.9% uptime last 30 days</div>
          </div>

        </div>
      </section>
    </>
  )
}