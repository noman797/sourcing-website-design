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
    <>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-25px) translateX(-15px); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-15px) translateX(8px); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        
        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
        }
      `}</style>
      
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 w-32 h-32 bg-emerald-50 rounded-full opacity-40 animate-float"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-50 rounded-full opacity-30 animate-float-delayed"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-purple-50 rounded-full opacity-30 animate-float-slow"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-8">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {factoryCategories.map((category, idx) => (
              <div
                key={idx}
                className="group bg-gradient-to-br from-white to-gray-50 p-3 rounded-lg border border-gray-200 hover:border-emerald-300 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 text-center"
              >
                <div className="text-3xl mb-2 transform group-hover:scale-125 transition-transform duration-300">{category.icon}</div>
                <h3 className="text-sm font-bold text-gray-900 mb-1.5">{category.name}</h3>
                <div className="text-2xl font-bold text-emerald-600 mb-0.5">{category.count}</div>
                <p className="text-xs text-gray-600">partner factories</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}