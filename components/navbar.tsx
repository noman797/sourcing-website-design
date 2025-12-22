"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <img src="/images/image.png" alt="Third Eye Sourcing" className="h-16 w-auto" />
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm font-medium text-gray-700 hover:text-emerald-600 transition">
              About us
            </a>
            <a href="#services" className="text-sm font-medium text-gray-700 hover:text-emerald-600 transition">
              Core Service
            </a>
            <a href="#products" className="text-sm font-medium text-gray-700 hover:text-emerald-600 transition">
              Products
            </a>
            <a href="#strength" className="text-sm font-medium text-gray-700 hover:text-emerald-600 transition">
              Strength
            </a>
            <a href="#contact" className="text-sm font-medium text-gray-700 hover:text-emerald-600 transition">
              Contact
            </a>
          </div>

        <div className="flex items-center gap-4">
  <a
    href="#contact"
    className="hidden md:inline-flex px-6 py-2.5 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition text-sm font-semibold"
  >
    For Factories
  </a>

  {/* Mobile Menu Button */}
  <button
    onClick={() => setIsOpen(!isOpen)}
    className="md:hidden text-gray-700"
  >
    {isOpen ? <X size={24} /> : <Menu size={24} />}
  </button>
</div>

        </div>

        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <a href="#about" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">
              About us
            </a>
            <a href="#services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">
              Core Service
            </a>
            <a href="#categories" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">
              Products
            </a>
            <a href="#strength" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">
              Strength
            </a>
            <a href="#contact" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">
              Contact
            </a>
            <a
              href="#contact"
              className="block w-full mt-2 px-4 py-2 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition text-sm font-semibold text-center"
            >
              Factory Please Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
