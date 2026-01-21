export default function Why() {
  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-4">
            Why <span className="text-blue-600">FocusFlow</span>?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to stay focused, productive,
            and in control of your time.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-100 text-blue-600 mb-6 text-2xl">
              🎯
            </div>
            <h3 className="text-xl font-bold mb-3">
              Block Distractions
            </h3>
            <p className="text-gray-600">
              Eliminate notifications and distracting websites
              so you can focus deeply on what really matters.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-indigo-100 text-indigo-600 mb-6 text-2xl">
              ⏱️
            </div>
            <h3 className="text-xl font-bold mb-3">
              Smart Time Tracking
            </h3>
            <p className="text-gray-600">
              Track how you spend your time and discover
              patterns to optimize your daily productivity.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-green-100 text-green-600 mb-6 text-2xl">
              📊
            </div>
            <h3 className="text-xl font-bold mb-3">
              Productivity Insights
            </h3>
            <p className="text-gray-600">
              Get clear insights and weekly reports
              to continuously improve your work habits.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
