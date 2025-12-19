"use client"
import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Footer Grid */}
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/images/image.png" alt="Third Eye Sourcing" className="h-10 w-auto" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your trusted partner for global product sourcing, development, and quality assurance from Bangladesh.
            </p>
            <div className="mt-4 flex items-center gap-2">
              <img
                src="/images/bangladesh-flag.jpg"
                alt="Made in Bangladesh"
                className="h-6 w-auto rounded shadow-sm"
              />
              <span className="text-sm text-gray-400">Made in Bangladesh</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-green-400 transition">
                  Product Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition">
                  Quality Control
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition">
                  Compliance
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition">
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
                <a href="#" className="hover:text-green-400 transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition">
                  Our Team
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition">
                  Our Factories
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition">
                  Blog
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
                  info@example.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-green-500" />
                <a href="tel:+8801234567890" className="hover:text-green-400 transition">
                  +880 1234 567 890
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-green-500" />
                <span>Dhaka, Bangladesh</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 sm:mb-0">© 2025 Third Eye Sourcing. All rights reserved.</p>

          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 bg-gray-800 hover:bg-green-600 rounded-full flex items-center justify-center transition"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-gray-800 hover:bg-green-600 rounded-full flex items-center justify-center transition"
            >
              <Facebook size={18} />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-gray-800 hover:bg-green-600 rounded-full flex items-center justify-center transition"
            >
              <Twitter size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
