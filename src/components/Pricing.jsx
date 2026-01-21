export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the plan that fits your productivity needs.
            Upgrade anytime as you grow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {/* Free */}
          <div className="rounded-2xl border p-8 transition transform hover:-translate-y-2 hover:shadow-xl">
            <h3 className="text-2xl font-bold mb-2">Free</h3>
            <p className="text-gray-600 mb-6">
              Perfect for getting started.
            </p>

            <div className="mb-6">
              <span className="text-5xl font-extrabold">$0</span>
              <span className="text-gray-500 ml-2">/ month</span>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <span className="text-green-700">✔</span>
                Block distracting websites
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-700">✔</span>
                Basic time tracking
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-700">✔</span>
                Daily productivity report
              </li>
            </ul>

            <button className="w-full py-4 rounded-xl border border-gray-300 font-semibold hover:bg-gray-100 transition transform hover:scale-105 active:scale-95">
              Get Started
            </button>
          </div>

          {/* Pro */}
          <div className="rounded-2xl border p-8 transition transform hover:-translate-y-2 hover:shadow-xl">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-blue-600 text-white text-sm font-semibold">
              Most Popular
            </div>

            <h3 className="text-2xl font-bold mb-2">Pro</h3>
            <p className="text-gray-700 mb-6">
              For serious productivity masters.
            </p>

            <div className="mb-6">
              <span className="text-5xl font-extrabold">$12</span>
              <span className="text-gray-600 ml-2">/ month</span>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <span className="text-green-700">✔</span>
                Everything in Free
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-700">✔</span>
                Advanced analytics & reports
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-700">✔</span>
                Unlimited focus sessions
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-700">✔</span>
                Priority support
              </li>
            </ul>

            <button className="w-full py-4 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition transform hover:scale-105 active:scale-95">
              Upgrade to Pro
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}