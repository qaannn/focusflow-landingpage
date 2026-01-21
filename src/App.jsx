import Navbar from './components/navbar'
import Hero from './components/Hero'
import Why from './components/Why'
import Pricing from './components/Pricing'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero />
      <Why />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  )
}