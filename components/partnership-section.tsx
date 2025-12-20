"use client"

import { Handshake, TrendingUp } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export default function PartnershipSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
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
    <section ref={sectionRef} className="py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className={`relative group transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-12 opacity-0 scale-95'
        }`}>
          {/* Animated glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-500 animate-pulse-slow"></div>
          
          <div className="relative bg-gradient-to-r from-emerald-600 via-emerald-600 to-teal-600 rounded-2xl p-10 shadow-2xl overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-48 h-48 bg-white rounded-full blur-3xl animate-float"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl animate-float-delayed"></div>
            </div>

            {/* Animated grid pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(to right, white 1px, transparent 1px)',
                backgroundSize: '40px 40px'
              }}></div>
            </div>

            {/* Sparkle effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full opacity-60 animate-sparkle"></div>
              <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white rounded-full opacity-40 animate-sparkle-delayed"></div>
              <div className="absolute bottom-1/4 left-2/3 w-1 h-1 bg-white rounded-full opacity-50 animate-sparkle"></div>
            </div>

            <div className="relative z-10 text-center">
              {/* Animated icon */}
              <div className={`w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm transform transition-all duration-700 delay-200 ${
                isVisible ? 'rotate-0 scale-100' : 'rotate-180 scale-0'
              }`}>
                <Handshake className={`w-7 h-7 text-white transition-transform duration-700 delay-400 ${
                  isVisible ? 'scale-100' : 'scale-0'
                }`} />
              </div>

              {/* Animated title */}
              <h3 className={`text-3xl font-bold text-white mb-4 transform transition-all duration-700 delay-300 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}>
                Partnerships & Collaboration
              </h3>

              {/* Animated content */}
              <div className="text-emerald-100 text-lg leading-relaxed max-w-3xl mx-auto space-y-3">
                <p className={`transform transition-all duration-700 delay-400 ${
                  isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
                }`}>
                  We aim to become an extension of our clients' sourcing team, managing their Bangladesh operations
                  efficiently and transparently.
                </p>
                <p className={`flex items-center justify-center gap-2 transform transition-all duration-700 delay-500 ${
                  isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                }`}>
                  <TrendingUp className={`w-5 h-5 transition-transform duration-700 delay-600 ${
                    isVisible ? 'rotate-0' : '-rotate-45'
                  }`} />
                  Our flexible and proactive approach ensures mutual growth and long-term collaboration.
                </p>
              </div>

              {/* Animated decorative line */}
              <div className={`mt-6 h-1 bg-gradient-to-r from-transparent via-white to-transparent transition-all duration-1000 delay-700 ${
                isVisible ? 'w-64 opacity-30' : 'w-0 opacity-0'
              } mx-auto rounded-full`}></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(-20px, -20px);
          }
        }
        
        @keyframes sparkle {
          0%, 100% {
            opacity: 0;
            transform: scale(0);
          }
          50% {
            opacity: 1;
            transform: scale(1.5);
          }
        }
        
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float 10s ease-in-out infinite;
          animation-delay: 2s;
        }
        
        .animate-sparkle {
          animation: sparkle 3s ease-in-out infinite;
        }
        
        .animate-sparkle-delayed {
          animation: sparkle 3s ease-in-out infinite;
          animation-delay: 1.5s;
        }
        
        .animate-pulse-slow {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </section>
  )
}