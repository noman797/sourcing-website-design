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
    <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className={`text-4xl sm:text-5xl font-bold text-gray-900 mb-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
            Our Values
          </h2>
          <p className={`text-lg text-gray-600 transition-all duration-700 delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
            The principles that guide everything we do
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {values.map((value, idx) => {
            const Icon = value.icon
            return (
              <div
                key={idx}
                className={`text-center p-6 rounded-xl bg-gradient-to-br from-green-50 to-white border border-green-100 hover:shadow-lg hover:-translate-y-2 transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${idx * 100 + 300}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="text-white" size={28} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-sm text-gray-600">{value.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}