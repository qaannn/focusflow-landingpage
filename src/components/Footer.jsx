export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <h3 className="text-2xl font-extrabold text-white mb-4">
            FocusFlow
          </h3>
          <p className="text-gray-400 mb-6">
            Stay focused. Get more done.
          </p>
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} FocusFlow. All rights reserved.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-bold text-white mb-4">
            Product
          </h4>
          <ul className="space-y-3">
            <li className="hover:text-white cursor-pointer">Features</li>
            <li className="hover:text-white cursor-pointer">Pricing</li>
            <li className="hover:text-white cursor-pointer">Demo</li>
            <li className="hover:text-white cursor-pointer">Updates</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold text-white mb-4">
            Company
          </h4>
          <ul className="space-y-3">
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Blog</li>
            <li className="hover:text-white cursor-pointer">Careers</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold text-white mb-4">
            Connect
          </h4>
          <ul className="space-y-3">
            <li className="hover:text-white cursor-pointer">Twitter</li>
            <li className="hover:text-white cursor-pointer">GitHub</li>
            <li className="hover:text-white cursor-pointer">LinkedIn</li>
            <li className="hover:text-white cursor-pointer">Email</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
