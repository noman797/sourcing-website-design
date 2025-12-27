"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

const heroImages = [
  {
    src: "/factory-team-2.avif",
    alt: "Bangladesh sourcing company team conducting factory inspection for global buyers",
  },
  {
    src: "/factory-team-7.avif",
    alt: "Product sourcing services in Bangladesh with experienced sourcing agents",
  },
  {
    src: "/factory-team-5.avif",
    alt: "Quality inspection services in Bangladesh ensuring export standards",
  },
  {
    src: "/factory-team-3.avif",
    alt: "Reliable sourcing partner in Bangladesh visiting manufacturing facilities",
  },
  {
    src: "/factory-team-6.avif",
    alt: "Bangladesh buying agent managing factory compliance and supplier audits",
  },
]

export default function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20">
      
      {/* Optimized rotating background images */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((img, i) => (
          <div
            key={img.src}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              priority={i === 0} // LCP optimized
              sizes="100vw"
              className="object-cover"
            />
          </div>
        ))}

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/35 z-10" />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Trust badge */}
        <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
          <span className="w-2 h-2 bg-emerald-400 rounded-full" />
          <span className="text-sm font-medium text-white">
            Trusted by Global Brands
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-4">
          <span className="block text-white">The Eye Behind</span>
          <span className="block text-emerald-400">Smarter Sourcing</span>
        </h1>

        {/* SEO paragraph */}
        <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto mb-10 leading-relaxed">
          A reliable Bangladesh sourcing company delivering product sourcing,
          factory inspection, quality inspection, and compliance audit services
          for global buyers.
        </p>

        {/* CTA */}
        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-emerald-600 text-white rounded-full font-semibold shadow-lg hover:bg-emerald-700 transition-all duration-300"
        >
          Start Your Journey
          <ArrowRight size={20} />
        </a>
      </div>
    </section>
  )
}
