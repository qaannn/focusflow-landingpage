import { handleGlow } from '../utils/glow'

const features = [
  {
    icon: '🎯',
    title: 'Block Distractions',
    desc: 'Eliminate notifications and distracting websites so you can focus deeply on what really matters.',
  },
  {
    icon: '⏱️',
    title: 'Smart Time Tracking',
    desc: 'Track how you spend your time and discover patterns to optimize your daily productivity.',
  },
  {
    icon: '📊',
    title: 'Productivity Insights',
    desc: 'Get clear insights and weekly reports to continuously improve your work habits.',
  },
]

export default function Why() {
  return (
    <section id="features" className="reveal py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-4 dark:text-white">
            Why <span className="text-blue-600 dark:text-blue-400">FocusFlow</span>?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Everything you need to stay focused, productive,
            and in control of your time.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div
              key={i}
              onMouseMove={handleGlow}
              className="glow-card depth-card reveal-stagger bg-white dark:bg-gray-800 p-8 rounded-2xl border transition-all hover:-translate-y-2 hover:shadow-xl"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="text-xl font-bold mb-2 dark:text-white">
                {f.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}