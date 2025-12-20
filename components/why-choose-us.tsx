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
    <section 
      ref={sectionRef} 
      id="why-choose" 
      className="py-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at top left, #009966 0%, #00aa88 50%),
          radial-gradient(circle at top right, #007755 0%, #009977 50%),
          radial-gradient(circle at bottom left, #00aa77 0%, #00bb99 50%),
          radial-gradient(circle at bottom right, #008855 0%, #00aa88 50%),
          #00aa88
        `
      }}
    >
      {/* Animated corner gradient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top left corner */}
        <div 
          className="absolute -top-20 -left-20 w-96 h-96 rounded-full opacity-40 blur-3xl animate-pulse"
          style={{ background: '#009966', animationDuration: '6s' }}
        ></div>
        
        {/* Top right corner */}
        <div 
          className="absolute -top-20 -right-20 w-96 h-96 rounded-full opacity-35 blur-3xl animate-pulse"
          style={{ background: '#007755', animationDuration: '7s', animationDelay: '1s' }}
        ></div>
        
        {/* Bottom left corner */}
        <div 
          className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full opacity-45 blur-3xl animate-pulse"
          style={{ background: '#00aa77', animationDuration: '8s', animationDelay: '2s' }}
        ></div>
        
        {/* Bottom right corner */}
        <div 
          className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full opacity-40 blur-3xl animate-pulse"
          style={{ background: '#008855', animationDuration: '7s', animationDelay: '3s' }}
        ></div>

        {/* Rotating rings in corners */}
        <div 
          className="absolute top-10 left-10 w-40 h-40 border-2 rounded-full opacity-20"
          style={{ 
            borderColor: '#009966',
            animation: 'spin 15s linear infinite'
          }}
        ></div>
        <div 
          className="absolute top-10 right-10 w-40 h-40 border-2 rounded-full opacity-20"
          style={{ 
            borderColor: '#007755',
            animation: 'spin 20s linear infinite reverse'
          }}
        ></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-8">
          <div className={`inline-block mb-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
            <span className="px-4 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
              Why Choose Us
            </span>
          </div>
          <h2 className={`text-4xl sm:text-5xl font-bold text-white mb-4 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
            Your Trusted Sourcing Partner
          </h2>
          <p className={`text-lg text-white max-w-2xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
            We deliver excellence through expertise, reliability, and commitment to your success
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <div
                key={idx}
                className={`relative bg-white/90 backdrop-blur-sm p-4 rounded-lg border border-gray-200 hover:border-green-500 hover:shadow-2xl transition-all duration-500 group overflow-hidden cursor-pointer hover:scale-105 hover:-translate-y-2 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ 
                  transitionDelay: `${idx * 100 + 300}ms`
                }}
              >
                {/* Shimmer effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div 
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(90deg, transparent, rgba(0, 153, 102, 0.1), transparent)',
                      backgroundSize: '200% 100%',
                      animation: 'shimmer 2s infinite'
                    }}
                  />
                </div>

                {/* Gradient glow on hover */}
                <div 
                  className="absolute -inset-1 rounded-lg opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500"
                  style={{ background: 'linear-gradient(135deg, #009966, #00cc88)' }}
                ></div>

                {/* Corner accent animations */}
                <div className="absolute top-0 left-0 w-0 h-0 border-t-2 border-l-2 border-green-600 group-hover:w-8 group-hover:h-8 transition-all duration-500"></div>
                <div className="absolute bottom-0 right-0 w-0 h-0 border-b-2 border-r-2 border-green-600 group-hover:w-8 group-hover:h-8 transition-all duration-500"></div>

                <div className="relative z-10">
                  <div 
                    className="w-9 h-9 rounded-lg flex items-center justify-center mb-2.5 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 group-hover:shadow-lg"
                    style={{ background: 'linear-gradient(135deg, #009966, #00cc88)' }}
                  >
                    <Icon className="text-white transition-colors duration-500" size={18} />
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-1.5 group-hover:text-green-700 transition-colors duration-300">{feature.title}</h3>
                  <p className="text-gray-600 text-xs leading-relaxed group-hover:text-gray-700 transition-colors duration-300">{feature.description}</p>
                </div>

                {/* Bottom gradient line animation */}
                <div 
                  className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-700"
                  style={{ background: 'linear-gradient(90deg, #009966, #00cc88)' }}
                ></div>
              </div>
            )
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }
      `}</style>
    </section>
  )
}