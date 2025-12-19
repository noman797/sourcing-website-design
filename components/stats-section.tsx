"use client"
import { useEffect, useState } from "react"

export default function StatsSection() {
  const [counts, setCounts] = useState({ factories: 0, categories: 0, coverage: 0, years: 0, clients: 0 })

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts({
        factories: Math.min(50, counts.factories + 5),
        categories: Math.min(20, counts.categories + 2),
        coverage: Math.min(100, counts.coverage + 10),
        years: Math.min(45, counts.years + 5),
        clients: Math.min(500, counts.clients + 50),
      })
    }, 100)

    return () => clearInterval(interval)
  }, [counts])

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 to-green-700 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 font-serif">By The Numbers</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="text-center group">
            <div className="text-5xl font-bold mb-2 transform group-hover:scale-110 transition-transform">50+</div>
            <p className="text-green-100 font-semibold">Partner Factories</p>
          </div>
          <div className="text-center group">
            <div className="text-5xl font-bold mb-2 transform group-hover:scale-110 transition-transform">20+</div>
            <p className="text-green-100 font-semibold">Product Categories</p>
          </div>
          <div className="text-center group">
            <div className="text-5xl font-bold mb-2 transform group-hover:scale-110 transition-transform">100%</div>
            <p className="text-green-100 font-semibold">QC Coverage</p>
          </div>
          <div className="text-center group">
            <div className="text-5xl font-bold mb-2 transform group-hover:scale-110 transition-transform">45+</div>
            <p className="text-green-100 font-semibold">Years Experience</p>
          </div>
          <div className="text-center group">
            <div className="text-5xl font-bold mb-2 transform group-hover:scale-110 transition-transform">500+</div>
            <p className="text-green-100 font-semibold">Global Brands</p>
          </div>
        </div>
      </div>
    </section>
  )
}
