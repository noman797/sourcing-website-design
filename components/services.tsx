"use client"
import { CheckCircle2, Zap, Shield, Leaf, Users, Truck } from "lucide-react"
import { useEffect, useRef, useState } from "react"

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
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      id="services"
      className="py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden"
    >
      {/* Animated background elements - different style */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Diagonal animated stripes */}
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.02]">
          <div className="absolute inset-0 animate-[slide_20s_linear_infinite]" style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              #10b981 0px,
              #10b981 2px,
              transparent 2px,
              transparent 80px
            )`
          }}></div>
        </div>

        {/* Pulsing circles */}
        <div className="absolute top-20 right-20 w-80 h-80 bg-emerald-200 rounded-full blur-3xl opacity-20 animate-[pulse_4s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-teal-200 rounded-full blur-3xl opacity-20 animate-[pulse_4s_ease-in-out_infinite_2s]"></div>
        
        {/* Floating gradient orbs */}
        <div className="absolute top-1/3 left-1/4 w-40 h-40 bg-gradient-to-br from-green-300 to-emerald-300 rounded-full blur-2xl opacity-10 animate-[float_6s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-gradient-to-br from-teal-300 to-green-300 rounded-full blur-2xl opacity-10 animate-[float_8s_ease-in-out_infinite_1s]"></div>
      </div>

      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(0) translateY(0);
          }
          100% {
            transform: translateX(80px) translateY(80px);
          }
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }
      `}</style>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-8">
          <div className={`inline-block mb-4 px-4 py-2 bg-emerald-100 rounded-full transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
            <span className="text-emerald-700 font-semibold text-sm">Our Expertise</span>
          </div>
          <h2 className={`text-4xl sm:text-5xl font-bold bg-gradient-to-r from-slate-900 via-emerald-800 to-teal-900 bg-clip-text text-transparent mb-4 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            Our Core Services
          </h2>
          <p className={`text-lg text-slate-600 max-w-2xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            Comprehensive sourcing solutions tailored to meet your global business needs with precision and excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon
            return (
              <div
                key={idx}
                className={`group relative p-4 rounded-lg bg-white border border-slate-200 hover:border-emerald-300 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden ${
                  isVisible ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-95 rotate-3'
                }`}
                style={{ transitionDelay: `${idx * 80 + 400}ms` }}
              >
                {/* Gradient overlay on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 -z-10`}
                ></div>

                {/* Animated shine effect on hover */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

                <div
                  className={`w-9 h-9 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center mb-2.5 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-lg transition-all duration-300`}
                >
                  <Icon className="text-white" size={18} />
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-1.5 group-hover:text-emerald-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-xs group-hover:text-slate-700 transition-colors leading-relaxed">
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