"use client"
import { CheckCircle2, Zap, Shield, Leaf, Users, Truck } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const services = [
  {
    icon: Zap,
    title: "Product Development",
    description: "Design, sampling, and innovation with our trusted factory network",
  },
  {
    icon: CheckCircle2,
    title: "Quality Control",
    description: "In-line and final inspections ensuring product integrity",
  },
  {
    icon: Shield,
    title: "Compliance Management",
    description: "Guiding factories on social, technical & environmental standards",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description: "Environmentally responsible sourcing practices",
  },
  {
    icon: Users,
    title: "Client Support",
    description: "Tailored support based on your specific requirements",
  },
  {
    icon: Truck,
    title: "Logistics Support",
    description: "End-to-end process management and delivery coordination",
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
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Diagonal animated stripes */}
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.02]">
          <div className="absolute inset-0 animate-[slide_20s_linear_infinite]" style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              #B3FFE6 0px,
              #B3FFE6 2px,
              transparent 2px,
              transparent 80px
            )`
          }}></div>
        </div>

        {/* Pulsing circles */}
        <div className="absolute top-20 right-20 w-80 h-80 rounded-full blur-3xl opacity-30 animate-[pulse_4s_ease-in-out_infinite]" style={{ background: '#B3FFE6' }}></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full blur-3xl opacity-25 animate-[pulse_4s_ease-in-out_infinite_2s]" style={{ background: '#99FFDD' }}></div>
        
        {/* Floating gradient orbs */}
        <div className="absolute top-1/3 left-1/4 w-40 h-40 rounded-full blur-2xl opacity-20 animate-[float_6s_ease-in-out_infinite]" style={{ background: 'linear-gradient(135deg, #B3FFE6, #99FFDD)' }}></div>
        <div className="absolute bottom-1/3 right-1/4 w-40 h-40 rounded-full blur-2xl opacity-20 animate-[float_8s_ease-in-out_infinite_1s]" style={{ background: 'linear-gradient(135deg, #99FFDD, #B3FFE6)' }}></div>
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
        @keyframes float-card {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-8">
          <div className={`inline-block mb-4 px-4 py-2 bg-green-100 rounded-full transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
            <span className="text-green-700 font-semibold text-sm">Our Expertise</span>
          </div>
          <h2 className={`text-4xl sm:text-5xl font-bold bg-gradient-to-r from-slate-900 via-green-800 to-slate-900 bg-clip-text text-transparent mb-4 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
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
                className={`relative p-4 rounded-lg border border-slate-200 hover:border-green-300 hover:scale-105 hover:-translate-y-2 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden ${
                  isVisible ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-95 rotate-3'
                }`}
                style={{ 
                  transitionDelay: `${idx * 80 + 400}ms`,
                  background: '#009966',
                  animation: 'float-card 6s ease-in-out infinite',
                  animationDelay: `${idx * 0.3}s`
                }}
              >
                <div className="relative z-10">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center mb-2.5 transition-all duration-300"
                    style={{ background: 'linear-gradient(135deg, #007a52 0%, #009966 100%)' }}
                  >
                    <Icon className="text-white" size={18} />
                  </div>
                  <h3 className="text-sm font-bold text-white mb-1.5">
                    {service.title}
                  </h3>
                  <p className="text-white text-xs leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}