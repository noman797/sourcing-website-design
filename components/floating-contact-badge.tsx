"use client"

import { useState } from "react"
import { MessageCircle, Mail, X } from "lucide-react"

export default function FloatingContactBadge() {
  const [isOpen, setIsOpen] = useState(false)

  const handleWhatsApp = () => {
    const phoneNumber = "8801719160285"
    window.open(`https://wa.me/${phoneNumber}`, "_blank")
  }

  const handleEmail = () => {
    // Opens Gmail inbox in a new tab (change URL to another webmail if desired)
    window.open("https://mail.google.com/", "_blank")
  }

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {/* Contact Options */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 flex flex-col gap-3 transition-all duration-300 opacity-100 translate-y-0">

        {/* WhatsApp Button */}
        <button
          onClick={handleWhatsApp}
          className="group flex items-center gap-3 bg-white hover:bg-green-50 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 pr-5 pl-4 py-3 border border-gray-200"
        >
          <div className="bg-[#25D366] p-2 rounded-full">
            <MessageCircle className="w-5 h-5 text-white" />
          </div>
          <span className="text-sm font-medium text-gray-900">WhatsApp</span>
        </button>

        {/* Email Button */}
        <button
          onClick={handleEmail}
          className="group flex items-center gap-3 bg-white hover:bg-emerald-50 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 pr-5 pl-4 py-3 border border-gray-200 cursor-pointer"
        >
          <div className="bg-emerald-600 p-2 rounded-full">
            <Mail className="w-5 h-5 text-white" />
          </div>
          <span className="text-sm font-medium text-gray-900">Email</span>
        </button>
      </div>
      )}

      {/* Main Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`relative flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 px-6 py-4 group ${
          isOpen ? "scale-95" : "scale-100"
        }`}
      >
        {isOpen ? (
          <>
            <X className="w-5 h-5" />
            <span className="font-semibold">Close</span>
          </>
        ) : (
          <>
            <MessageCircle className="w-5 h-5" />
            <span className="font-semibold">Contact</span>
          </>
        )}
      </button>
    </div>
  )
}