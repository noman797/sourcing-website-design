"use client"
import { useEffect, useRef, useState } from "react"

function AnimatedCounter({ end, suffix = "", duration = 1000, delay = 0 }) {
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

    const timeout = setTimeout(() => {
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
    }, delay)

    return () => clearTimeout(timeout)
  }, [isVisible, end, duration, delay])

  return (
    <div ref={ref} className="text-5xl font-bold mb-2 transform group-hover:scale-110 transition-transform">
      {count}{suffix}
    </div>
  )
}

function StatCard({ end, suffix, label, delay }) {
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

  return (
    <div 
      ref={ref}
      className={`text-center group transform transition-all duration-700 ${
        isVisible 
          ? 'translate-y-0 opacity-100' 
          : 'translate-y-8 opacity-0'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="relative">
        {/* Animated background pulse */}
        <div className="absolute inset-0 bg-white/10 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Content */}
        <div className="relative bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-white/30 transition-all duration-300 hover:shadow-2xl hover:shadow-white/10">
          <AnimatedCounter end={end} suffix={suffix} duration={1200} delay={delay} />
          <p className="text-green-100 font-semibold">{label}</p>
          
          {/* Decorative accent */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
        </div>
      </div>
    </div>
  )
}

export default function StatsSection() {
  const [titleVisible, setTitleVisible] = useState(false)
  const titleRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTitleVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (titleRef.current) {
      observer.observe(titleRef.current)
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current)
      }
    }
  }, [])

  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 to-green-700 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 
          ref={titleRef}
          className={`text-4xl font-bold text-center mb-16 font-serif transform transition-all duration-1000 ${
            titleVisible 
              ? 'translate-y-0 opacity-100' 
              : '-translate-y-8 opacity-0'
          }`}
        >
          By The Numbers
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          <StatCard end="50" suffix="+" label="Partner Factories" delay={0} />
          <StatCard end="20" suffix="+" label="Product Categories" delay={100} />
          <StatCard end="100" suffix="%" label="QC Coverage" delay={200} />
          <StatCard end="45" suffix="+" label="Years Experience" delay={300} />
          <StatCard end="500" suffix="+" label="Global Brands" delay={400} />
        </div>
      </div>
    </section>
  )
}