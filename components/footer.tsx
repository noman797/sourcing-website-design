"use client"
import { Mail, Phone, MapPin, Linkedin, Facebook } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Footer Grid */}
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* About */}
          <div>
            <div className="mb-4">
              <img src="/images/image.png" alt="Third Eye Sourcing" className="h-12 w-auto" />
            </div>
            <p className="text-gray-400 text-sm leading-snug tracking-tight">
              Delivering world-class Product Sourcing, Development, and Quality Assurance for global buyers in hard goods,
              textiles, and lifestyle products.
            </p>

            <div className="mt-6 flex items-center gap-3 bg-gray-800 p-3 rounded-lg">
              <div className="w-12 h-8 rounded overflow-hidden shadow-md flex-shrink-0">
                <svg viewBox="0 0 120 72" className="w-full h-full">
                  <rect width="120" height="72" fill="#006a4e" />
                  <circle cx="56" cy="36" r="20" fill="#f42a41" />
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-300">Made in Bangladesh</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#products" className="hover:text-green-400 transition">
                  Product Development
                </a>
              </li>
              <li>
                <a href="#sustainability" className="hover:text-green-400 transition">
                  Sustainability
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#about" className="hover:text-green-400 transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-green-400 transition">
                  Core Services
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-green-400 transition">
                  Products
                </a>
              </li>
              <li>
                <a href="#strength" className="hover:text-green-400 transition">
                  Strength
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-green-500" />
                <a href="mailto:info@thirdeyesourcing.com" className="hover:text-green-400 transition">
                  Info@thirdeyeaourcing.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-green-500" />
                <a href="tel:+880 1788-683039 " className="hover:text-green-400 transition">
                  +880 1788-683039
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-green-500" />
                <span>Dhaka, Bangladesh</span>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex gap-3 mt-6">
              <a
                href="#"
                className="w-9 h-9 bg-gray-800 hover:bg-green-600 rounded-full flex items-center justify-center transition"
              >
                <Facebook size={16} />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-gray-800 hover:bg-green-600 rounded-full flex items-center justify-center transition"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-4 text-center">
          <p className="text-gray-500 text-sm">© 2025 Third Eye Sourcing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}