"use client"
import { Package, Users, DollarSign, CheckCircle, Leaf, MessageSquare } from "lucide-react"
import { useEffect, useRef, useState } from "react"

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
    <section ref={sectionRef} id="why-choose" className="py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating circles */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-emerald-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-[blob_7s_ease-in-out_infinite]"></div>
        <div className="absolute top-40 right-10 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-[blob_7s_ease-in-out_infinite_2s]"></div>
        <div className="absolute -bottom-8 left-1/2 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-[blob_7s_ease-in-out_infinite_4s]"></div>
        
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(to right, #10b981 1px, transparent 1px), linear-gradient(to bottom, #10b981 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
      `}</style>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-8">
          <div className={`inline-block mb-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
            <span className="px-4 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold">
              Why Choose Us
            </span>
          </div>
          <h2 className={`text-4xl sm:text-5xl font-bold text-gray-900 mb-4 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
            Your Trusted Sourcing Partner
          </h2>
          <p className={`text-lg text-gray-600 max-w-2xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
            We deliver excellence through expertise, reliability, and commitment to your success
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <div
                key={idx}
                className={`relative bg-white/80 backdrop-blur-sm p-4 rounded-lg border border-gray-200 hover:border-emerald-500 hover:shadow-lg transition-all duration-500 group overflow-hidden ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${idx * 100 + 300}ms` }}
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
                  <div className="w-9 h-9 bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-lg flex items-center justify-center mb-2.5 group-hover:scale-110 transition-transform">
                    <Icon className="text-emerald-600" size={18} />
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-1.5">{feature.title}</h3>
                  <p className="text-gray-600 text-xs leading-relaxed">{feature.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}