"use client"
import { Shield, Target, Star, Leaf, Handshake } from "lucide-react"

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
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Our Values</h2>
          <p className="text-lg text-gray-600">The principles that guide everything we do</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {values.map((value, idx) => {
            const Icon = value.icon
            return (
              <div
                key={idx}
                className="text-center p-6 rounded-xl bg-gradient-to-br from-green-50 to-white border border-green-100 hover:shadow-lg transition"
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
