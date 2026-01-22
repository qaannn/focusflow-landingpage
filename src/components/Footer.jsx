export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="reveal relative bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 border-t border-gray-200 dark:border-gray-800">
      {/* subtle glow line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div className="space-y-4">
          <h3 className="text-2xl font-extrabold text-blue-600 dark:text-blue-400">
            FocusFlow
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            Stay focused. Track time.  
            Boost your daily productivity with ease.
          </p>
        </div>

        {/* Product */}
        <div>
          <h4 className="font-semibold mb-4 dark:text-white">Product</h4>
          <ul className="space-y-2 text-gray-600 dark:text-gray-400">
            {['Features', 'Pricing', 'Demo', 'Download'].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-semibold mb-4 dark:text-white">Company</h4>
          <ul className="space-y-2 text-gray-600 dark:text-gray-400">
            {['About', 'Careers', 'Blog', 'Contact'].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter / CTA */}
        <div className="space-y-4">
          <h4 className="font-semibold dark:text-white">
            Join our productivity tips
          </h4>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Get weekly insights to stay focused and productive.
          </p>

          <div className="flex items-center gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="px-5 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition transform hover:scale-105 active:scale-95">
              Join
            </button>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600 dark:text-gray-400">

          <p>
            © {year} FocusFlow. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            {['Privacy', 'Terms', 'Cookies'].map((item) => (
              <a
                key={item}
                href="#"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}