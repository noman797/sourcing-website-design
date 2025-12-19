"use client"

const factoryCategories = [
  { name: "Natural Fiber & Cotton", count: 10, icon: "🌾" },
  { name: "Apparel & Textile", count: 14, icon: "👕" },
  { name: "Plastic Household", count: 4, icon: "🏠" },
  { name: "Tableware", count: 5, icon: "🍽️" },
  { name: "Leather & Footwear", count: 4, icon: "👞" },
  { name: "Camping & Outdoor", count: 4, icon: "🏕️" },
  { name: "Toys", count: 3, icon: "🧸" },
  { name: "Others", count: 3, icon: "⭐" },
]

export default function FactoryNetwork() {
  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="px-4 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold">
              Our Network
            </span>
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 font-serif">Factory Network</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            50+ partner factories across Bangladesh specializing in diverse product categories. All factories are
            ethically compliant, technically capable, and export-experienced.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {factoryCategories.map((category, idx) => (
            <div
              key={idx}
              className="group bg-gradient-to-br from-white to-gray-50 p-5 rounded-xl border border-gray-200 hover:border-emerald-300 hover:shadow-lg transition-all duration-300 text-center"
            >
              <div className="text-4xl mb-3 transform group-hover:scale-125 transition-transform">{category.icon}</div>
              <h3 className="text-base font-bold text-gray-900 mb-2">{category.name}</h3>
              <div className="text-3xl font-bold text-emerald-600 mb-1">{category.count}</div>
              <p className="text-xs text-gray-600">partner factories</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
