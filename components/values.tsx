"use client"
import { Shield, Target, Star, Leaf, Handshake } from "lucide-react"
import { useState, useEffect } from "react"

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description: "We do what we promise",
  },
  {
    icon: Target,
    title: "Accountability",
    description: "We take ownership of results",
  },
  {
    icon: Star,
    title: "Quality",
    description: "We never compromise on quality",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description: "We care about the planet",
  },
  {
    icon: Handshake,
    title: "Partnership",
    description: "We grow together with our clients",
  },
]

export default function Values() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ background: 'radial-gradient(circle at center, #009966dd 0%, #009966ee 50%, #009966 100%)' }}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white opacity-5 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-white opacity-5 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white opacity-5 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-8">
          <h2 className={`text-4xl sm:text-5xl font-bold text-white mb-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
            Our Values
          </h2>
          <p className={`text-lg text-white text-opacity-90 transition-all duration-700 delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
            The principles that guide everything we do
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {values.map((value, idx) => {
            const Icon = value.icon
            return (
              <div
                key={idx}
                className={`group text-center p-6 rounded-xl bg-white backdrop-blur-sm border border-white border-opacity-20 hover:shadow-2xl hover:-translate-y-2 hover:scale-105 transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${idx * 100 + 300}ms` }}
              >
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500" style={{ background: 'linear-gradient(to bottom right, #009966, #007755)' }}>
                  <Icon className="text-white group-hover:scale-110 transition-transform duration-500" size={28} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-green-700 transition-colors duration-300">{value.title}</h3>
                <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{value.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}