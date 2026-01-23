import { useEffect, useState } from 'react'

export default function Navbar({ theme, setTheme }) {
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  const [activeSection, setActiveSection] = useState('hero')
  const [scrolled, setScrolled] = useState(false)

  const scrollToSection = (id) => {
    const target = document.getElementById(id)
    if (!target) return

    const startY = window.pageYOffset
    const NAVBAR_HEIGHT = 96
    const targetY =
      target.getBoundingClientRect().top +
      window.pageYOffset -
      NAVBAR_HEIGHT

    const distance = targetY - startY
    const duration = 700
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
    const sections = ['hero', 'features', 'pricing', 'demo'].filter(id => document.getElementById(id))

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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${ scrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg shadow-lg border-b border-gray-200': 'bg-white/60 dark:bg-gray-900/60 backdrop-blur-md'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div
          className="text-2xl font-extrabold text-blue-600 dark:text-blue-400 cursor-pointer"
          onClick={() => scrollToSection('hero')}
        >
          FocusFlow
        </div>

        {/* Menu */}
        <nav className="hidden md:flex items-center gap-8 font-medium">
          {['features', 'pricing', 'demo'].map((id) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`transition ${
                activeSection === id
                  ? 'text-blue-600 dark:text-blue-400 font-semibold'
                  : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              {id === 'features'
                ? 'Features'
                : id === 'pricing'
                ? 'Pricing'
                : 'Demo'}
            </button>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-4">
          {/* Dark mode toggle */}
          <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle dark mode">
            <span className="sun">☀️</span>
            <span className="moon">🌙</span>
          </button>

          {/* CTA Button */}
          <button
            onClick={() => scrollToSection('demo')}
            className="hidden md:block px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition transform hover:scale-105 active:scale-95 shadow"
          >
            Get Started
          </button>
        </div>
      </div>
    </header>
  )
}