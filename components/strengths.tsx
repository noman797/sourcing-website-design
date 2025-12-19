"use client"
import { Globe, Factory, Zap, Award, Heart, BarChart3 } from "lucide-react"

const strengths = [
  {
    icon: Globe,
    title: "Deep Market Understanding",
    description: "European & USA retail requirements expertise",
  },
  {
    icon: Factory,
    title: "50+ Audited Partners",
    description: "Reliable manufacturing network across Bangladesh",
  },
  {
    icon: Zap,
    title: "Multi-Category Capability",
    description: "Diverse sourcing expertise across industries",
  },
  {
    icon: Award,
    title: "Dedicated QC Teams",
    description: "Professional product development & quality assurance",
  },
  {
    icon: Heart,
    title: "Transparent Communication",
    description: "Quick response and clear partnership approach",
  },
  {
    icon: BarChart3,
    title: "Flexible & Competitive",
    description: "Custom MOQs and premium pricing solutions",
  },
]

export default function Strengths() {
  return (
    <section id="strength" className="py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-block mb-4">
            <span className="px-4 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold">
              Our Capabilities
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Our Strength</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We stand out with dedicated expertise and proven results
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {strengths.map((strength, idx) => {
            const Icon = strength.icon
            return (
              <div
                key={idx}
                className="relative p-4 rounded-lg bg-white/80 backdrop-blur-sm border border-gray-100 hover:border-emerald-500 hover:shadow-lg transition group overflow-hidden"
              >
                <div className="absolute inset-0 opacity-5">
                  <div
                    className="w-full h-full"
                    style={{
                      backgroundImage: "url(/placeholder.svg?height=300&width=300&query=geometric-pattern)",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                </div>

                <div className="relative z-10">
                  <div className="w-9 h-9 bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-lg flex items-center justify-center mb-2.5 group-hover:from-emerald-200 transition">
                    <Icon className="text-emerald-600" size={18} />
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-1.5">{strength.title}</h3>
                  <p className="text-gray-600 text-xs">{strength.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}