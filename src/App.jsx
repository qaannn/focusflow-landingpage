import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Why from './components/Why'
import Pricing from './components/Pricing'
import CTA from './components/CTA'
import Footer from './components/Footer'
import './index.css'


export default function App() {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal')
    const staggers = document.querySelectorAll('.reveal-stagger')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.classList.contains('reveal')) {
              entry.target.classList.add('reveal-visible')
              observer.unobserve(entry.target)
            }

            if (entry.target.classList.contains('reveal-stagger')) {
              entry.target.classList.add('reveal-stagger-visible')
              observer.unobserve(entry.target)
            }
          }
        })
      },
      { threshold: 0.15 }
    )

    reveals.forEach((el) => observer.observe(el))
    staggers.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100">
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <Why />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  )
}
