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
  const proPrice = isYearly ? 96 : 12 // 20% off yearly
  const proLabel = isYearly ? '/ year' : '/ month'

  return (
    <section id="pricing" className="reveal py-24 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-10">
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
          <div className="flex items-center gap-4 bg-gray-100 dark:bg-gray-900 p-1.5 rounded-full">
            <button
              onClick={() => setBilling('monthly')}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition
                ${!isYearly
                  ? 'bg-white dark:bg-gray-800 shadow text-gray-900 dark:text-white'
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
                }`}
            >
              Monthly
            </button>

            <button
              onClick={() => setBilling('yearly')}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition flex items-center gap-2
                ${isYearly
                  ? 'bg-white dark:bg-gray-800 shadow text-gray-900 dark:text-white'
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
                }`}
            >
              Yearly
              <span className="px-2 py-0.5 rounded-full bg-green-100 text-green-700 text-xs font-bold">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">

          {/* Free */}
          <div
            onMouseMove={handleGlow}
            className="glow-card depth-card pricing-glow
                       rounded-2xl border p-8
                       flex flex-col justify-between min-h-[520px]"
          >
            <div>
              <h3 className="text-2xl font-bold mb-2 dark:text-white">Free</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Perfect for getting started.
              </p>

              <div className="mb-6">
                <span className="text-5xl font-extrabold dark:text-white">$0</span>
                <span className="text-gray-500 dark:text-gray-400 ml-2">
                  / month
                </span>
              </div>

              <ul className="space-y-4 mb-10 dark:text-gray-300">
                <li>✔ Block distracting websites</li>
                <li>✔ Basic time tracking</li>
                <li>✔ Daily productivity report</li>
              </ul>
            </div>

            <button className="w-full py-4 rounded-xl border border-gray-300 dark:border-gray-700 font-semibold dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition transform hover:scale-105 active:scale-95">
              Get Started
            </button>
          </div>

          {/* Pro */}
          <div
            onMouseMove={handleGlow}
            className={`glow-card depth-card pricing-glow
                       relative rounded-2xl border-2 p-8
                       flex flex-col justify-between min-h-[520px]
                       transition-all duration-300
                       ${isYearly
                         ? 'border-blue-600 shadow-2xl scale-[1.02]'
                         : 'border-blue-600/60'
                       }`}
          >
            {/* Badge */}
            <div className="badge-pulse absolute -top-4 left-1/2 -translate-x-1/2
                            px-4 py-1.5 rounded-full
                            bg-blue-600 text-white text-sm font-semibold shadow-lg">
              Most Popular
            </div>

            {isYearly && (
              <div className="absolute top-10 right-6 px-3 py-1 rounded-full
                              bg-green-100 text-green-700 text-xs font-bold">
                Save 20%
              </div>
            )}

            <div>
              <h3 className="text-2xl font-bold mb-2 dark:text-white">Pro</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                For serious productivity masters.
              </p>

              <div className="mb-6 overflow-hidden h-[64px]">
                <div
                  key={billing}
                  className="transition-all duration-300 ease-out animate-priceIn"
                >
                  <span className="text-5xl font-extrabold dark:text-white">
                    ${proPrice}
                  </span>
                  <span className="text-gray-600 dark:text-gray-400 ml-2">
                    {billing === 'yearly' ? '/ year' : '/ month'}
                  </span>
                </div>
              </div>
              {isYearly && (
                <p className="text-sm text-green-600 font-semibold mb-4">
                  Billed yearly • $8/month equivalent
                </p>
              )}

              <ul className="space-y-4 mb-10 dark:text-gray-300">
                <li>✔ Everything in Free</li>
                <li>✔ Advanced analytics & reports</li>
                <li>✔ Unlimited focus sessions</li>
                <li>✔ Priority support</li>
              </ul>
            </div>
            <button
              className={`w-full py-4 rounded-xl text-white font-semibold
                transition transform hover:scale-105 active:scale-95
                ${billing === 'yearly'
                  ? 'bg-blue-600 animate-ctaPulse'
                  : 'bg-blue-600 hover:bg-blue-700'
                }`}
            >
              Upgrade to Pro
            </button>
          </div>

        </div>

        {/* Feature Comparison */}
        <div className="max-w-4xl mx-auto mt-20">
          <h3 className="text-2xl font-extrabold text-center mb-8 dark:text-white">
            Compare Features
          </h3>

          <div className="overflow-hidden rounded-2xl border dark:border-gray-800">
            <table className="w-full border-collapse">
              <thead className="bg-gray-50 dark:bg-gray-900">
                <tr>
                  <th className="text-left px-6 py-4 font-semibold dark:text-white">
                    Feature
                  </th>
                  <th className="text-center px-6 py-4 font-semibold dark:text-white">
                    Free
                  </th>
                  <th className="text-center px-6 py-4 font-semibold text-blue-600 dark:text-blue-400">
                    Pro
                  </th>
                </tr>
              </thead>

              <tbody>
                {features.map((f, i) => (
                  <tr
                    key={i}
                    className="border-t dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900 transition"
                  >
                    <td className="px-6 py-4 dark:text-gray-200">
                      {f.name}
                    </td>

                    <td className="px-6 py-4 text-center">
                      {f.free ? (
                        <span className="text-green-600 text-lg">✔</span>
                      ) : (
                        <span className="text-gray-400 text-lg">—</span>
                      )}
                    </td>

                    <td className="px-6 py-4 text-center">
                      {f.pro ? (
                        <span className="text-green-600 text-lg">✔</span>
                      ) : (
                        <span className="text-gray-400 text-lg">—</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  )
}
