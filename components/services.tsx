"use client"
import { CheckCircle2, Zap, Shield, Leaf, Users, Truck } from "lucide-react"

const services = [
  {
    icon: Zap,
    title: "Product Development",
    description: "Design, sampling, and innovation with our trusted factory network",
    color: "from-emerald-500 to-teal-600",
  },
  {
    icon: CheckCircle2,
    title: "Quality Control",
    description: "In-line and final inspections ensuring product integrity",
    color: "from-teal-500 to-green-600",
  },
  {
    icon: Shield,
    title: "Compliance Management",
    description: "Guiding factories on social, technical & environmental standards",
    color: "from-green-500 to-emerald-600",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description: "Environmentally responsible sourcing practices",
    color: "from-emerald-600 to-teal-700",
  },
  {
    icon: Users,
    title: "Client Support",
    description: "Tailored support based on your specific requirements",
    color: "from-teal-600 to-green-700",
  },
  {
    icon: Truck,
    title: "Logistics Support",
    description: "End-to-end process management and delivery coordination",
    color: "from-green-600 to-emerald-700",
  },
]

export default function Services() {
  return (
    <section
      id="services"
      className="py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-100 rounded-full blur-3xl opacity-20 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-100 rounded-full blur-3xl opacity-20 -z-10"></div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-emerald-100 rounded-full">
            <span className="text-emerald-700 font-semibold text-sm">Our Expertise</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-slate-900 via-emerald-800 to-teal-900 bg-clip-text text-transparent mb-4">
            Our Core Services
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Comprehensive sourcing solutions tailored to meet your global business needs with precision and excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, idx) => {
            const Icon = service.icon
            return (
              <div
                key={idx}
                className="group relative p-5 rounded-2xl bg-white border border-slate-200 hover:border-emerald-300 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 -z-10`}
                ></div>

                <div
                  className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300`}
                >
                  <Icon className="text-white" size={22} />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-sm group-hover:text-slate-700 transition-colors leading-relaxed">
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
