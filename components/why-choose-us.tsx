"use client"
import { Package, Users, DollarSign, CheckCircle, Leaf, MessageSquare } from "lucide-react"

const features = [
  {
    icon: Package,
    title: "One-Stop Sourcing Partner",
    description: "All non-food categories under one roof",
  },
  {
    icon: Users,
    title: "Deep Industry Experience",
    description: "Expertise across hardlines and textiles",
  },
  {
    icon: DollarSign,
    title: "Competitive Pricing",
    description: "Long-term factory relationships for best value",
  },
  {
    icon: CheckCircle,
    title: "In-House Product Development",
    description: "Complete product development & inspection team",
  },
  {
    icon: Leaf,
    title: "Sustainability Focus",
    description: "Committed to ethical sourcing practices",
  },
  {
    icon: MessageSquare,
    title: "Quick Response",
    description: "Fast turnaround and transparent communication",
  },
]

export default function WhyChooseUs() {
  return (
    <section id="why-choose" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold">
              Why Choose Us
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Your Trusted Sourcing Partner</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We deliver excellence through expertise, reliability, and commitment to your success
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <div
                key={idx}
                className="relative bg-white/80 backdrop-blur-sm p-5 rounded-xl border border-gray-200 hover:border-emerald-500 hover:shadow-lg transition-all duration-300 group overflow-hidden"
              >
                {/* Transparent background pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div
                    className="w-full h-full"
                    style={{
                      backgroundImage: "url(/placeholder.svg?height=300&width=300&query=abstract-geometric-pattern)",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                </div>

                <div className="relative z-10">
                  <div className="w-11 h-11 bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Icon className="text-emerald-600" size={20} />
                  </div>
                  <h3 className="text-base font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
