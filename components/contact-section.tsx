"use client"
import { Mail, Phone, MapPin, MessageSquare } from "lucide-react"
import { useEffect, useState } from "react"
import { init, send } from "@emailjs/browser"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  // Direct EmailJS IDs (correct mapping)
  const serviceId= 'service_p577208'
  const templateId = 'template_wypmwcs'
  const publicKey= '7KPg5WMZ9X7t0xHUD'

  useEffect(() => {
    if (publicKey) init(publicKey)
  }, [publicKey])

  const isFormValid = formData.name.trim() !== '' && 
                       formData.email.trim() !== '' && 
                       formData.company.trim() !== '' && 
                       formData.message.trim() !== ''

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!serviceId || !templateId) {
      alert('EmailJS service/template IDs are not configured. Set NEXT_PUBLIC_EMAILJS_SERVICE_ID and NEXT_PUBLIC_EMAILJS_TEMPLATE_ID.')
      return
    }

    setStatus('sending')

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      company: formData.company,
      message: formData.message,
    }

    try {
      await send(serviceId, templateId, templateParams, publicKey || undefined)
      setStatus('success')
      setFormData({ name: '', email: '', company: '', message: '' })
    } catch (err) {
      console.error('EmailJS error', err)
      setStatus('error')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>
      <style jsx global>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
      `}</style>

      <section id="contact" className="relative py-8 px-4 sm:px-6 lg:px-8 overflow-hidden scroll-mt-24">
        {/* Animated Background */}
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse at center top, #00cc88 0%, #009966 40%, #006644 100%)'
        }}>
          <div className="absolute top-20 left-10 w-96 h-96 bg-white rounded-full mix-blend-soft-light filter blur-3xl opacity-10 animate-blob"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-white rounded-full mix-blend-soft-light filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/3 w-96 h-96 bg-white rounded-full mix-blend-soft-light filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
          <div className="absolute bottom-40 right-1/4 w-72 h-72 bg-white rounded-full mix-blend-soft-light filter blur-3xl opacity-10 animate-blob animation-delay-1000"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-8">
            <div className="inline-block mb-4 animate-float">
              <span className="px-4 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                Get in Touch
              </span>
            </div>
            <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 font-serif">Contact Us</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Reach out to us and let's discuss your sourcing needs
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            {/* Contact Form */}
            <div className="bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-sm p-8 rounded-2xl border border-gray-200 shadow-lg flex flex-col">
              <div className="space-y-6 flex-grow flex flex-col justify-center">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 transition bg-white/90"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 transition bg-white/90"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Company *</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 transition bg-white/90"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your sourcing needs..."
                    rows={6}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 transition resize-none bg-white/90"
                  ></textarea>
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={status === 'sending' || !isFormValid}
                  className="w-full px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 cursor-pointer transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  <MessageSquare size={20} />
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                </button>

                {status === 'success' && (
                  <p className="mt-2 text-sm text-green-700 font-medium">Message sent — we will contact you soon.</p>
                )}

                {status === 'error' && (
                  <p className="mt-2 text-sm text-red-600 font-medium">Failed to send message. Please try again later.</p>
                )}
              </div>
            </div>

            {/* Map and Contact Info */}
            <div className="space-y-8 flex flex-col">
              <div className="rounded-2xl overflow-hidden shadow-lg h-80 bg-gray-100 relative transform hover:scale-105 transition-transform duration-300">
                <img
                  src="/flag.jpg"
                  alt="Bangladesh Location Map"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-green-900/40"></div>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-sm p-6 rounded-xl border border-green-200 hover:shadow-lg hover:scale-105 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0 animate-float">
                      <Mail className="text-white" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Email</h4>
                      <a
                        href="mailto:info@thirdeyesourcing.com"
                        className="text-green-600 hover:text-green-700 font-semibold"
                      >
                        info@thirdeyesourcing.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-sm p-6 rounded-xl border border-green-200 hover:shadow-lg hover:scale-105 transition-all duration-300 animation-delay-1000">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0 animate-float animation-delay-1000">
                      <Phone className="text-white" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Phone</h4>
                      <a href="tel:+8801788683039" className="text-green-600 hover:text-green-700 font-semibold">
                        +880 1788-683039
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-sm p-6 rounded-xl border border-green-200 hover:shadow-lg hover:scale-105 transition-all duration-300 animation-delay-2000">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0 animate-float animation-delay-2000">
                      <MapPin className="text-white" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Address</h4>
                      <p className="text-gray-700 font-semibold">House no: 7, Road no: 7, BLOCK D, Aftabnagar, Dhaka 1212, Bangladesh. </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}