"use client"
import { useState } from "react"

const categories = [
  {
    name: "Plastic Household",
    image: "/plastic-household-products-containers-storage.jpg",
    desc: "Quality plastic containers and household items",
  },
  {
    name: "Basket & Storage",
    image: "/basket.png",
    desc: "Handcrafted baskets and storage solutions",
  },
  {
    name: "Ceramic & porcelain",
    image: "/premium-tableware-ceramic-dishes.jpg",
    desc: "Fine dining and casual tableware",
  },
  {
    name: "Bags & Luggage",
    image: "/bags-luggage-travel-collection.png",
    desc: "Durable and stylish bags for all occasions",
  },
  {
    name: "Cotton Made",
    image: "/twal.png",
    desc: "Cotton bag, Towel, Kitchen apron",
  },
  {
    name: "Jute diversified products",
    image: "/natural-jute-eco-friendly-sustainable-products.jpg",
    desc: "Eco-friendly natural jute products",
  },
  {
    name: "Apparel",
    image: "/quality-apparel-clothing-collection.avif",
    desc: "Premium quality clothing and fabrics",
  },
  {
    name: "Cleaning Accessories",
    image: "/cleaning-supplies-brushes-tools.avif",
    desc: "Professional cleaning tools and supplies",
  },
  {
    name: "Toys",
    image: "/safe-toys-children-educational-play.jpg",
    desc: "Safe and quality toys for all ages",
  },
  {
    name: "Stationery",
    image: "/premium-stationery-office-supplies.avif",
    desc: "High-quality office and school supplies",
  },
  {
    name: "Melamine",
    image: "/melamine-dinnerware-dishware-unbreakable.jpg",
    desc: "Durable melamine dinnerware products",
  },
  {
    name: "Footwear",
    image: "/quality-shoes-footwear-collection.jpg",
    desc: "Comfortable and stylish footwear",
  },
]

export default function Categories() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section
      id="products"
      className="py-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at center top, #00cc88 0%, #009966 40%, #006644 100%)'
      }}
    >
      {/* Animated background blur effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-30 blur-3xl"
          style={{ background: '#00ff99' }}
        ></div>
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{ background: '#004433' }}
        ></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-block mb-4 animate-float">
            <span className="px-4 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
            Our Expertise
            </span>
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-6 font-serif">Product Categories</h2>
          <p className="text-xl text-white text-opacity-90 max-w-3xl mx-auto">
            We specialize in 20+ product categories with proven sourcing capabilities across multiple industries
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer h-56 transform hover:scale-105"
            >
              <img
                src={category.image || "/placeholder.svg"}
                alt={category.name}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                onError={(e) => {
                  e.currentTarget.src = "/placeholder.svg?height=400&width=500"
                }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/95 via-gray-800/50 to-transparent flex flex-col justify-end p-6 group-hover:from-green-900/100 group-hover:via-green-700/60 transition-all duration-300">
                <h3 className="text-white font-bold text-xl mb-2 transform group-hover:translate-y-0 translate-y-1">
                  {category.name}
                </h3>
                <p className="text-gray-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {category.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}