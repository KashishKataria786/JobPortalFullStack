import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 border-t border-gray-200 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-left">
        {/* Company */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Offverse Jobs</h3>
          <p className="text-sm">
            Find your next opportunity with Offverse — connecting great talent with great companies.
          </p>
        </div>

        {/* Links - Company */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/about" className="hover:underline">About Us</a></li>
            <li><a href="/careers" className="hover:underline">Careers</a></li>
            <li><a href="/blog" className="hover:underline">Blog</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Links - Resources */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Resources</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/help" className="hover:underline">Help Center</a></li>
            <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:underline">Terms of Service</a></li>
            <li><a href="/guidelines" className="hover:underline">Community Guidelines</a></li>
          </ul>
        </div>

        {/* Social & Legal */}
        <div className="text-left">
          <h4 className="text-lg font-semibold mb-4">Connect with Us</h4>
          <div className="flex space-x-4 mb-4">
            <a href="#" className="text-gray-600 hover:text-blue-600"><FaLinkedin size={20} /></a>
            <a href="#" className="text-gray-600 hover:text-blue-400"><FaTwitter size={20} /></a>
            <a href="#" className="text-gray-600 hover:text-blue-700"><FaFacebookF size={20} /></a>
            <a href="#" className="text-gray-600 hover:text-pink-500"><FaInstagram size={20} /></a>
          </div>
          <p className="text-xs text-gray-500">© {new Date().getFullYear()} Offverse. All rights reserved.</p>
        </div>
      </div>
    </footer>

  )
}

export default Footer
