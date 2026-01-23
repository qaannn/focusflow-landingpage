export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Brand */}
          <div>
            <h3 className="text-2xl font-extrabold text-white mb-4">
              FocusFlow
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              FocusFlow helps you eliminate distractions, stay in deep work,
              and finish meaningful work faster.
            </p>

            <div className="flex gap-4 text-gray-400">
              <a href="https://www.instagram.com/muhfrqnnmd/?hl=id" className="hover:text-white transition">Instagram</a>
              <a href="https://github.com/qaannn" className="hover:text-white transition">GitHub</a>
              <a href="https://www.linkedin.com/in/furqanmaulidi/" className="hover:text-white transition">LinkedIn</a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wide text-white mb-4">
              Product
            </h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#features" className="hover:text-white transition">Features</a></li>
              <li><a href="#pricing" className="hover:text-white transition">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition">Roadmap</a></li>
              <li><a href="#" className="hover:text-white transition">Changelog</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wide text-white mb-4">
              Company
            </h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition">About</a></li>
              <li><a href="#" className="hover:text-white transition">Blog</a></li>
              <li><a href="#" className="hover:text-white transition">Careers</a></li>
              <li><a href="#" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wide text-white mb-4">
              Legal
            </h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-white transition">GDPR</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-12" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          {/* Copyright */}
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} FocusFlow. All rights reserved. Muhammad Furqan Maulidi.
          </p>

          {/* Trust Badges */}
          <div className="flex gap-6 text-sm text-gray-400">
            <span>🔒 Secure payments</span>
            <span>⚡ 99.9% uptime</span>
            <span>🇪🇺 GDPR compliant</span>
          </div>
        </div>

      </div>
    </footer>
  )
}