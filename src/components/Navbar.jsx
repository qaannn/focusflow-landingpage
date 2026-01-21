import { useEffect, useState } from 'react'

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('hero')

  const scrollToSection = (id) => {
    const target = document.getElementById(id)
    if (!target) return

    const startY = window.pageYOffset
    const targetY =
      target.getBoundingClientRect().top +
      window.pageYOffset -
      100 // offset navbar height

    const distance = targetY - startY
    const duration = 700 // ms
    let startTime = null

    const easeInOutCubic = (t) =>
      t < 0.5
        ? 4 * t * t * t
        : 1 - Math.pow(-2 * t + 2, 3) / 2

    const animation = (currentTime) => {
      if (!startTime) startTime = currentTime
      const timeElapsed = currentTime - startTime
      const progress = Math.min(timeElapsed / duration, 1)
      const ease = easeInOutCubic(progress)

      window.scrollTo(0, startY + distance * ease)

      if (timeElapsed < duration) {
        requestAnimationFrame(animation)
      }
    }

    requestAnimationFrame(animation)
  }

  useEffect(() => {
    const sections = ['hero', 'features', 'pricing', 'demo']

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-50% 0px -50% 0px',
        threshold: 0,
      }
    )

    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div
          className="text-2xl font-extrabold text-blue-600 cursor-pointer"
          onClick={() => scrollToSection('hero')}
        >
          FocusFlow
        </div>

        {/* Menu */}
        <nav className="hidden md:flex items-center gap-8 font-medium">
          <button
            onClick={() => scrollToSection('features')}
            className={`transition ${
              activeSection === 'features'
                ? 'text-blue-600 font-semibold'
                : 'text-gray-700 hover:text-blue-600'
            }`}
          >
            Features
          </button>

          <button
            onClick={() => scrollToSection('pricing')}
            className={`transition ${
              activeSection === 'pricing'
                ? 'text-blue-600 font-semibold'
                : 'text-gray-700 hover:text-blue-600'
            }`}
          >
            Pricing
          </button>

          <button
            onClick={() => scrollToSection('demo')}
            className={`transition ${
              activeSection === 'demo'
                ? 'text-blue-600 font-semibold'
                : 'text-gray-700 hover:text-blue-600'
            }`}
          >
            Demo
          </button>
        </nav>

        {/* CTA Button */}
        <button
          onClick={() => scrollToSection('demo')}
          className="hidden md:block px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition transform hover:scale-105 active:scale-95 shadow"
        >
          Get Started
        </button>
      </div>
    </header>
  )
}