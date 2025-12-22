"use client"
import { MessageSquare, Package, Microscope, CheckCircle2, Zap, Target, Truck } from "lucide-react"

const steps = [
  { step: 1, icon: MessageSquare, title: "Buyer Brief", description: "Understanding requirements" },
  { step: 2, icon: Target, title: "Factory Selection", description: "Finding the best match" },
  { step: 3, icon: Package, title: "Costing", description: "Competitive pricing" },
  { step: 4, icon: Package, title: "Sampling", description: "Product development" },
  { step: 8, icon: Truck, title: "Shipment", description: "Logistics coordination" },
  { step: 7, icon: Microscope, title: "Inspection", description: "Final QC check" },
  { step: 6, icon: Zap, title: "Production", description: "Quality monitoring" },
  { step: 5, icon: CheckCircle2, title: "Order Confirmation", description: "Finalize specifications" },
]

export default function ProcessTimeline() {
  return (
    <section
      id="process"
      className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{ backgroundColor: '#B3FFE6' }}
    >
      {/* Animated background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <style>{`
          @keyframes float {
            0%, 100% { transform: translate(0, 0) scale(1); }
            25% { transform: translate(30px, -30px) scale(1.1); }
            50% { transform: translate(-20px, 20px) scale(0.9); }
            75% { transform: translate(40px, 10px) scale(1.05); }
          }
          @keyframes float-reverse {
            0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); }
            25% { transform: translate(-40px, 30px) scale(1.15) rotate(90deg); }
            50% { transform: translate(30px, -20px) scale(0.85) rotate(180deg); }
            75% { transform: translate(-30px, -40px) scale(1.1) rotate(270deg); }
          }
          @keyframes drift {
            0%, 100% { transform: translate(0, 0); }
            33% { transform: translate(50px, -50px); }
            66% { transform: translate(-30px, 30px); }
          }
          .animate-float { animation: float 20s ease-in-out infinite; }
          .animate-float-reverse { animation: float-reverse 25s ease-in-out infinite; }
          .animate-drift { animation: drift 15s ease-in-out infinite; }
        `}</style>
        
        <div 
          className="absolute top-1/4 right-10 w-80 h-80 rounded-full opacity-20 blur-3xl animate-float"
          style={{ background: 'radial-gradient(circle, #99FFDD 0%, #66FFD1 100%)' }}
        ></div>
        <div 
          className="absolute bottom-1/4 left-10 w-96 h-96 rounded-full opacity-15 blur-3xl animate-float-reverse"
          style={{ background: 'radial-gradient(circle, #80FFCC 0%, #4DFFBB 100%)' }}
        ></div>
        <div 
          className="absolute top-1/2 left-1/2 w-72 h-72 rounded-full opacity-10 blur-3xl animate-drift"
          style={{ background: 'radial-gradient(circle, #99FFDD 0%, #00cc88 100%)' }}
        ></div>
        <div 
          className="absolute top-10 left-1/4 w-64 h-64 rounded-full opacity-15 blur-2xl animate-pulse"
          style={{ background: '#66FFD1', animationDuration: '7s' }}
        ></div>
        <div 
          className="absolute bottom-10 right-1/4 w-80 h-80 rounded-full opacity-10 blur-3xl animate-float"
          style={{ background: 'radial-gradient(circle, #4DFFBB 0%, #009966 100%)', animationDelay: '3s' }}
        ></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 rounded-full text-sm font-semibold" style={{ backgroundColor: '#009966', color: 'white' }}>
              How we work
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 font-serif">Our Process Flow</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            A streamlined eight-step journey from brief to delivery
          </p>
        </div>

        {/* Circular Flow Design */}
        <div className="relative">
          {/* Connection lines - curved paths between circles */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block" style={{ zIndex: 1 }}>
            <defs>
              <marker id="arrowhead" markerWidth="14" markerHeight="14" refX="12" refY="4" orient="auto">
                <polygon points="0 0, 14 4, 0 8" fill="#009966" />
              </marker>
            </defs>
            {/* Draw connecting paths - 1→2→3→4 (top row, left to right) */}
            <path d="M 180 100 Q 300 80, 420 100" stroke="#009966" strokeWidth="4" fill="none" markerEnd="url(#arrowhead)" opacity="0.8" strokeDasharray="8,6" />
            <path d="M 580 100 Q 700 80, 820 100" stroke="#009966" strokeWidth="4" fill="none" markerEnd="url(#arrowhead)" opacity="0.8" strokeDasharray="8,6" />
            
            {/* 4→5 (right side going down) */}
            <path d="M 950 180 Q 970 300, 950 420" stroke="#009966" strokeWidth="4" fill="none" markerEnd="url(#arrowhead)" opacity="0.8" strokeDasharray="8,6" />
            
            {/* 5→6→7→8 (bottom row, right to left) */}
            <path d="M 820 500 Q 700 520, 580 500" stroke="#009966" strokeWidth="4" fill="none" markerEnd="url(#arrowhead)" opacity="0.8" strokeDasharray="8,6" />
            <path d="M 420 500 Q 300 520, 180 500" stroke="#009966" strokeWidth="4" fill="none" markerEnd="url(#arrowhead)" opacity="0.8" strokeDasharray="8,6" />
          </svg>

          {/* Steps in circular layout */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-8 lg:gap-12 relative" style={{ zIndex: 10 }}>
            {steps.map((item, idx) => {
              const color = '#009966'
              
              return (
                <div key={idx} className="flex flex-col items-center text-center group">
                  {/* Circular bubble */}
                  <div className="relative mb-4">
                    {/* Outer glow effect */}
                    <div 
                      className="absolute inset-0 rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-300"
                      style={{ backgroundColor: color }}
                    ></div>
                    
                    {/* Main circle */}
                    <div 
                      className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full flex flex-col items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-300 border-4 border-white"
                      style={{ backgroundColor: color }}
                    >
                      <item.icon className="text-white mb-2" size={32} strokeWidth={2} />
                      
                      {/* Step number badge */}
                      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center border-2" style={{ borderColor: color }}>
                        <span className="text-xs font-bold" style={{ color: color }}>{item.step}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Title and description below circle */}
                  <div className="max-w-[140px]">
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1 group-hover:text-green-700 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-tight">
                      {item.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Bottom text */}
        <div className="mt-14 text-center">
          <div 
            className="inline-block px-6 py-3 backdrop-blur-sm border rounded-xl transition-all duration-300"
            style={{ 
              backgroundColor: '#009966',
              borderColor: '#007a52'
            }}
          >
            <p className="text-white font-semibold text-base">
              Every step is handled with precision to ensure quality and compliance
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}