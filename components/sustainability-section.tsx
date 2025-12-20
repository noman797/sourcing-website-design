"use client"

import { Leaf, Users, Award, Zap } from "lucide-react"

export default function SustainabilitySection() {
  // Add floating animation styles
  const floatingStyles = `
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
    }
    .animate-float {
      animation: float 3s ease-in-out infinite;
    }
  `

  const initiatives = [
    {
      icon: Zap,
      title: "Carbon-Conscious Supply Chain",
      description: "Reducing environmental impact through optimized logistics and sustainable practices",
      number: "01",
    },
    {
      icon: Leaf,
      title: "Natural Fibers",
      description: "Promoting eco-friendly materials like jute, seagrass, and water hyacinth",
      number: "02",
    },
    {
      icon: Users,
      title: "Support Small Enterprises",
      description: "Empowering women-led and small-scale businesses in our supply chain",
      number: "03",
    },
    {
      icon: Award,
      title: "Certifications",
      description: "Encouraging factories to achieve BSCI, SEDEX, and OEKO-TEX certifications",
      number: "04",
    },
  ]

  return (
    <section id="sustainability" className="py-8 bg-gradient-to-b from-emerald-50 via-white to-teal-50 relative overflow-hidden">
      <style>{floatingStyles}</style>
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-200 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-200 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-block mb-4 px-4 py-2 bg-emerald-100 rounded-full">
            <span className="text-emerald-700 font-semibold text-sm">Responsibility</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-900 to-teal-900 bg-clip-text text-transparent mb-6">
            Sustainability Approach
          </h2>
          <p className="text-xl text-slate-700 max-w-3xl mx-auto italic font-medium">
            "We believe in responsible sourcing that protects both people and the planet."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {initiatives.map((initiative, idx) => {
            const Icon = initiative.icon
            return (
              <div
                key={idx}
                className="group relative rounded-lg p-4 shadow-lg hover:shadow-2xl transition-all duration-500 border border-emerald-100 hover:border-emerald-300 overflow-hidden animate-float"
                style={{
                  background: '#009966',
                  animationDelay: `${idx * 0.2}s`
                }}
              >
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-9 h-9 rounded-lg bg-white/30 flex items-center justify-center group-hover:scale-110 group-hover:shadow-xl transition-all duration-300">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-2xl font-bold text-white/40 group-hover:text-white/60 transition-colors">
                      {initiative.number}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-white mb-1.5 group-hover:text-white transition-colors">
                    {initiative.title}
                  </h3>
                  <p className="text-white group-hover:text-white transition-colors text-xs leading-relaxed">
                    {initiative.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom Statement with enhanced design */}
        <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-green-600 rounded-2xl p-12 shadow-2xl relative overflow-hidden group">
          <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-white rounded-full blur-3xl"></div>
          </div>
          <p className="relative z-10 text-center text-white text-lg md:text-xl font-semibold leading-relaxed">
            Our commitment to sustainability is not just a practice—it's a promise to future generations and our valued
            partners.
          </p>
        </div>
      </div>
    </section>
  )
}