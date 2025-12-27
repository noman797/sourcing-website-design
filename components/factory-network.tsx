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
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float-card {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
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
        
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>
      
      <section className="py-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ backgroundColor: 'rgba(179, 255, 230, 0.3)' }}>
        {/* Animated background elements with #B3FFE6 */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 w-32 h-32 rounded-full opacity-40 animate-float blur-2xl" style={{ backgroundColor: '#B3FFE6' }}></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 rounded-full opacity-35 animate-float-delayed blur-2xl" style={{ backgroundColor: '#99FFDD' }}></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full opacity-40 animate-float-slow blur-xl" style={{ backgroundColor: '#B3FFE6' }}></div>
          <div className="absolute top-1/4 right-1/3 w-28 h-28 rounded-full opacity-35 animate-float blur-xl" style={{ backgroundColor: '#99FFDD' }}></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-8">
            <div className="inline-block mb-4">
              <span className="px-4 py-1 rounded-full text-sm font-semibold" style={{ backgroundColor: '#009966', color: 'white' }}>
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
                className="relative p-3 rounded-lg border border-gray-200 hover:border-green-300 hover:scale-105 hover:-translate-y-2 shadow-sm hover:shadow-xl transition-all duration-500 text-center animate-fadeInUp overflow-hidden cursor-pointer"
                style={{ 
                  animationDelay: `${idx * 0.1}s`,
                  background: '#009966',
                  animation: `fadeInUp 0.6s ease-out forwards ${idx * 0.1}s, float-card 6s ease-in-out infinite ${idx * 0.3}s`
                }}
              >
                <div className="relative z-10">
                  <div className="text-5xl mb-2 transition-all duration-300">{category.icon}</div>
                  <h3 className="text-sm font-bold text-white mb-1.5 transition-colors duration-300">{category.name}</h3>
                  <div className="text-2xl font-bold mb-0.5 transition-all duration-300 text-white">{category.count}</div>
                  <p className="text-xs text-white transition-colors duration-300">partner factories</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}