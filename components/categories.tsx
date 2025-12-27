"use client"

import { useState } from "react"
import Image from "next/image"

const categories = [
  {
    name: "Plastic Household Products",
    image: "/plastic-household-products-containers-storage.avif",
    alt: "Plastic household product sourcing services in Bangladesh including containers and storage items",
    desc: "Quality plastic containers and household items",
  },
  {
    name: "Basket & Storage",
    image: "/basket.avif",
    alt: "Handcrafted basket and storage product sourcing from Bangladesh manufacturers",
    desc: "Handcrafted baskets and storage solutions",
  },
  {
    name: "Ceramic & Porcelain",
    image: "/premium-tableware-ceramic-dishes.avif",
    alt: "Ceramic and porcelain tableware sourcing services in Bangladesh",
    desc: "Fine dining and casual ceramic tableware",
  },
  {
    name: "Bags & Luggage",
    image: "/bags-luggage-travel-collection.avif",
    alt: "Bags and luggage product sourcing in Bangladesh for international buyers",
    desc: "Durable and stylish bags for global buyers",
  },
  {
    name: "Cotton Made Products",
    image: "/twal.avif",
    alt: "Cotton bags towels and kitchen textile sourcing from Bangladesh suppliers",
    desc: "Cotton bags, towels, and kitchen textiles",
  },
  {
    name: "Jute Diversified Products",
    image: "/natural-jute-eco-friendly-sustainable-products.avif",
    alt: "Eco friendly jute product sourcing services in Bangladesh",
    desc: "Eco-friendly natural jute products from Bangladesh",
  },
  {
    name: "Apparel",
    image: "/quality-apparel-clothing-collection.avif",
    alt: "Apparel and garment sourcing services in Bangladesh factories",
    desc: "Premium quality garments and fabrics",
  },
  {
    name: "Cleaning Accessories",
    image: "/cleaning-supplies-brushes-tools.avif",
    alt: "Cleaning accessories and household tools sourcing in Bangladesh",
    desc: "Professional cleaning tools and accessories",
  },
  {
    name: "Toys",
    image: "/safe-toys-children-educational-play.avif",
    alt: "Safe toy sourcing services in Bangladesh for global markets",
    desc: "Safe and quality toys for children",
  },
  {
    name: "Stationery",
    image: "/premium-stationery-office-supplies.avif",
    alt: "Stationery and office supply sourcing from Bangladesh manufacturers",
    desc: "High-quality stationery and office supplies",
  },
  {
    name: "Melamine Products",
    image: "/melamine-dinnerware-dishware-unbreakable.avif",
    alt: "Melamine dinnerware and unbreakable dishware sourcing in Bangladesh",
    desc: "Durable melamine dinnerware products",
  },
  {
    name: "Footwear",
    image: "/quality-shoes-footwear-collection.avif",
    alt: "Footwear and shoe sourcing services in Bangladesh factories",
    desc: "Comfortable and stylish footwear collections",
  },
]

export default function Categories() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section
      id="products"
      className="py-10 px-4 sm:px-6 lg:px-8 relative overflow-hidden scroll-mt-24"
      style={{
        background:
          "radial-gradient(ellipse at center top, #00cc88 0%, #009966 40%, #006644 100%)",
      }}
    >
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-30 blur-3xl bg-emerald-400" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl bg-emerald-900" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-block mb-4 px-4 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
            Our Expertise
          </span>
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-4 font-serif">
            Product Categories
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            We provide product sourcing services in Bangladesh across multiple
            verified manufacturing categories.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, idx) => (
            <div
              key={category.name}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 h-56 transform hover:scale-105"
            >
              <Image
                src={category.image}
                alt={category.alt}
                fill
                sizes="(max-width: 640px) 100vw,
                       (max-width: 1024px) 50vw,
                       25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/95 via-gray-800/50 to-transparent flex flex-col justify-end p-6 transition-all duration-300 group-hover:from-green-900/95 group-hover:via-green-700/60">
                <h3 className="text-white font-bold text-xl mb-2">
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
