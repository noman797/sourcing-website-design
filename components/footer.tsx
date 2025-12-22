"use client"
import { Mail, Phone, MapPin, Linkedin, Facebook } from "lucide-react"

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#B3FFE6' }} className="text-gray-800 py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Footer Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <div className="mb-4">
              <img src="/images/image.png" alt="Third Eye Sourcing" className="h-20 w-auto" />
            </div>
            <p className="text-gray-600 text-sm leading-snug tracking-tight">
              Delivering world-class Product Sourcing, Development, and Quality Assurance for global buyers in hard goods,
              textiles, and lifestyle products.
            </p>

            <div className="mt-4 flex items-center gap-3 bg-white/70 border border-emerald-200 p-2.5 rounded-lg shadow-sm">
              <div className="w-12 h-8 rounded overflow-hidden shadow-md flex-shrink-0">
                <svg viewBox="0 0 120 72" className="w-full h-full">
                  <rect width="120" height="72" fill="#006a4e" />
                  <circle cx="56" cy="36" r="20" fill="#f42a41" />
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-700">Made in Bangladesh</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-900">Company</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="#about" className="hover:text-green-600 transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-green-600 transition">
                  Core Services
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-green-600 transition">
                  Products
                </a>
              </li>
              <li>
                <a href="#strength" className="hover:text-green-600 transition">
                  Strength
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-900">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-green-600" />
                <a href="mailto:info@thirdeyesourcing.com" className="hover:text-green-600 transition">
                  Info@thirdeyeaourcing.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-green-600" />
                <a href="tel:+880 1788-683039 " className="hover:text-green-600 transition">
                  +880 1788-683039
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-green-600" />
                <span>House no: 7, Road no: 7, BLOCK D, Aftabnagar, Dhaka 1212, Bangladesh. </span>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex gap-3 mt-4">
              <a
                href="#"
                style={{ backgroundColor: '#009966' }}
                className="w-9 h-9 border border-emerald-300 hover:opacity-90 text-white rounded-full flex items-center justify-center transition shadow-sm"
              >
                <Facebook size={16} />
              </a>
              <a
                href="#"
                style={{ backgroundColor: '#009966' }}
                className="w-9 h-9 border border-emerald-300 hover:opacity-90 text-white rounded-full flex items-center justify-center transition shadow-sm"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-emerald-200 pt-4 text-center">
          <p className="text-gray-600 text-sm">© 2025 Third Eye Sourcing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}