"use client"
import { useState, useEffect } from "react"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  const backgroundImages = [
    "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1400&h=700&fit=crop",
    "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1400&h=700&fit=crop",
    "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=1400&h=700&fit=crop",
    "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1400&h=700&fit=crop",
  ]

  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20">
      {/* Rotating background images with fade transition */}
      <div className="absolute inset-0 z-0">
        {backgroundImages.map((img, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              idx === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        ))}
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/35 z-10"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Trust badge */}
        <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
          <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
          <span className="text-sm font-medium text-white">Trusted by 500+ Global Brands</span>
        </div>

        {/* Main headline - serif font for elegance */}
        <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-4">
          <span className="block text-white">The Eye Behind</span>
          <span className="block text-emerald-400">Smarter Sourcing</span>
        </h1>

        <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto mb-10 leading-relaxed">
          Delivering world-class Product Sourcing, Development, and Quality Assurance for global buyers in hard goods,
          textiles, and lifestyle products.
        </p>

        <div className="flex justify-center items-center">
          <a
            href="#contact"
            className="px-8 py-3.5 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-all duration-300 flex items-center gap-2 font-semibold text-base shadow-lg hover:shadow-emerald-600/50"
          >
            Start Your Journey
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  )
}
