import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">
          Offverse<span className="text-gray-800">Jobs</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-sm font-medium text-gray-700">
          <a href="/jobs" className="hover:text-blue-600 transition">Find Jobs</a>
          <a href="/companies" className="hover:text-blue-600 transition">Companies</a>
          <a href="/salaries" className="hover:text-blue-600 transition">Salaries</a>
          <a href="/resources" className="hover:text-blue-600 transition">Resources</a>
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="/login" className="text-sm text-gray-700 hover:text-blue-600">Sign In</a>
          <a
            href="/post-job"
            className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition"
          >
            Post a Job
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-6 py-4 space-y-4 text-gray-700">
          <a href="/jobs" className="block">Find Jobs</a>
          <a href="/companies" className="block">Companies</a>
          <a href="/salaries" className="block">Salaries</a>
          <a href="/resources" className="block">Resources</a>
          <div className="pt-4 border-t border-gray-100">
            <a href="/login" className="block py-2">Sign In</a>
            <a
              href="/post-job"
              className="block text-center bg-blue-600 text-white px-4 py-2 rounded-full mt-2"
            >
              Post a Job
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
