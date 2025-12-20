"use client"
import { ArrowRight } from "lucide-react"
import { useEffect, useRef, useState } from "react"

function AnimatedCounter({ end, suffix = "", duration = 1000 }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const startTime = Date.now()
    const endValue = parseInt(end)

    const animate = () => {
      const now = Date.now()
      const progress = Math.min((now - startTime) / duration, 1)
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const current = Math.floor(easeOutQuart * endValue)
      
      setCount(current)

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(endValue)
      }
    }

    animate()
  }, [isVisible, end, duration])

  return (
    <div ref={ref} className="text-3xl font-bold mb-1">
      {count}{suffix}
    </div>
  )
}

export default function CTA() {
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
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 to-green-700 text-white relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-white rounded-full opacity-60 animate-float"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-white rounded-full opacity-40 animate-float-delayed"></div>
        <div className="absolute bottom-32 left-1/3 w-2 h-2 bg-white rounded-full opacity-50 animate-float"></div>
        <div className="absolute bottom-20 right-1/3 w-3 h-3 bg-white rounded-full opacity-30 animate-float-delayed"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className={`text-4xl sm:text-5xl font-bold mb-6 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'
        }`}>
          Ready to Transform Your Supply Chain?
        </h2>
        
        <p className={`text-lg text-green-100 mb-10 max-w-2xl mx-auto transform transition-all duration-1000 delay-200 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          Join 500+ global brands trusting Third Eye Sourcing for reliable, cost-effective supply chain solutions
        </p>

        <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transform transition-all duration-1000 delay-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <button className="group px-8 py-3 bg-white text-green-600 rounded-full hover:bg-green-50 transition-all duration-300 font-semibold flex items-center gap-2 hover:shadow-2xl hover:shadow-white/20 hover:scale-105 active:scale-95">
            Get Started Now
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          <button className="px-8 py-3 border-2 border-white text-white rounded-full hover:bg-white/10 transition-all duration-300 font-semibold hover:shadow-xl hover:shadow-white/10 hover:scale-105 active:scale-95 hover:border-white/80">
            Contact Us
          </button>
        </div>

        {/* Trust badges */}
        <div className={`mt-12 grid grid-cols-3 gap-4 pt-12 border-t border-white/20 transform transition-all duration-1000 delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="group cursor-default">
            <div className="relative">
              <div className="absolute inset-0 bg-white/10 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:border-white/30 transition-all duration-300 hover:transform hover:scale-105">
                <AnimatedCounter end="500" suffix="+" duration={1000} />
                <div className="text-green-100 text-sm">Global Brands</div>
              </div>
            </div>
          </div>
          <div className="group cursor-default">
            <div className="relative">
              <div className="absolute inset-0 bg-white/10 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:border-white/30 transition-all duration-300 hover:transform hover:scale-105">
                <AnimatedCounter end="100" suffix="%" duration={1000} />
                <div className="text-green-100 text-sm">QC Coverage</div>
              </div>
            </div>
          </div>
          <div className="group cursor-default">
            <div className="relative">
              <div className="absolute inset-0 bg-white/10 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:border-white/30 transition-all duration-300 hover:transform hover:scale-105">
                <AnimatedCounter end="24" suffix="/7" duration={800} />
                <div className="text-green-100 text-sm">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(-40px) translateX(-10px);
          }
          75% {
            transform: translateY(-20px) translateX(10px);
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float 8s ease-in-out infinite;
          animation-delay: 2s;
        }
      `}</style>
    </section>
  )
}