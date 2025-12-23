"use client"
import { MessageSquare, Package, Microscope, CheckCircle2, Zap, Target, Truck, ClipboardCheck } from "lucide-react"

// Desktop view - original names
const desktopSteps = [
{ step: 1, icon: MessageSquare, title: "Buyer Brief", description: "Understanding requirements" },
  { step: 2, icon: Target, title: "Factory Selection", description: "Finding the best match" },
  { step: 3, icon: Package, title: "Costing", description: "Competitive pricing" },
  { step: 4, icon: Package, title: "Sampling", description: "Product development" },
  { step: 8, icon: Truck, title: "Shipment", description: "Logistics coordination" },
  { step: 7, icon: Microscope, title: "Inspection", description: "Final QC check" },
  { step: 6, icon: Zap, title: "Production", description: "Quality monitoring" },
  { step: 5, icon: CheckCircle2, title: "Order Confirmation", description: "Finalize specifications" },
]

// Mobile view - different names
const mobileSteps = [
  { step: 1, icon: MessageSquare, title: "Brief", description: "Client requirements" },
  { step: 2, icon: Target, title: "Sourcing", description: "Factory matching" },
  { step: 3, icon: Package, title: "Quote", description: "Price calculation" },
  { step: 4, icon: ClipboardCheck, title: "Sample", description: "Product prototype" },
  { step: 5, icon: CheckCircle2, title: "Confirm", description: "Order finalization" },
  { step: 6, icon: Zap, title: "Produce", description: "Manufacturing" },
  { step: 7, icon: Microscope, title: "QC Check", description: "Quality control" },
  { step: 8, icon: Truck, title: "Ship", description: "Delivery" },
]

export default function ProcessTimeline() {
  return (
    <section
      id="process"
      className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{ backgroundColor: '#98ccb0' }}
    >
      {/* Animated blob background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <style>{`
          @keyframes blob {
            0%, 100% { transform: translate(0, 0) scale(1); }
            25% { transform: translate(20px, -30px) scale(1.1); }
            50% { transform: translate(-20px, 20px) scale(0.9); }
            75% { transform: translate(20px, 10px) scale(1.05); }
          }
          .animate-blob {
            animation: blob 7s ease-in-out infinite;
          }
          .animation-delay-1000 {
            animation-delay: 1s;
          }
          .animation-delay-2000 {
            animation-delay: 2s;
          }
          .animation-delay-4000 {
            animation-delay: 4s;
          }
        `}</style>
        
        <div className="absolute top-10 left-10 w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-10 left-1/2 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        <div className="absolute bottom-20 right-1/3 w-72 h-72 bg-emerald-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-1000"></div>
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

        {/* DESKTOP VIEW - Hidden on mobile */}
        <div className="relative hidden lg:block">
          {/* Connection lines - curved paths between circles */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
            <defs>
              <marker id="arrowhead" markerWidth="14" markerHeight="14" refX="12" refY="4" orient="auto">
                <polygon points="0 0, 14 4, 0 8" fill="#009966" />
              </marker>
            </defs>
            {/* Draw connecting paths - 1→2→3→4 (top row, left to right) */}
            <path d="M 165 85 Q 250 30, 335 85" stroke="#009966" strokeWidth="3.5" fill="none" markerEnd="url(#arrowhead)" strokeDasharray="10,5" />
            
            {/* 2→3 Factory Selection to Costing */}
            <path d="M 465 85 Q 550 30, 635 85" stroke="#009966" strokeWidth="3.5" fill="none" markerEnd="url(#arrowhead)" strokeDasharray="10,5" />
            
            {/* 3→4 Costing to Sampling */}
            <path d="M 765 85 Q 850 30, 935 85" stroke="#009966" strokeWidth="3.5" fill="none" markerEnd="url(#arrowhead)" strokeDasharray="10,5" />
            
            {/* 4→5 (right side going down) */}
            <path d="M 950 180 Q 970 300, 950 420" stroke="#009966" strokeWidth="4" fill="none" markerEnd="url(#arrowhead)" opacity="0.8" strokeDasharray="8,6" />
            
            {/* 5→6→7→8 (bottom row, right to left) */}
            <path d="M 820 500 Q 700 520, 580 500" stroke="#009966" strokeWidth="4" fill="none" markerEnd="url(#arrowhead)" opacity="0.8" strokeDasharray="8,6" />
            <path d="M 420 500 Q 300 520, 180 500" stroke="#009966" strokeWidth="4" fill="none" markerEnd="url(#arrowhead)" opacity="0.8" strokeDasharray="8,6" />
          </svg>

          {/* Steps in circular layout */}
          <div className="grid grid-cols-4 gap-12 relative" style={{ zIndex: 10 }}>
            {desktopSteps.map((item, idx) => {
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
                      className="relative w-32 h-32 rounded-full flex flex-col items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-300 border-4 border-white"
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
                    <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-green-700 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-tight">
                      {item.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* MOBILE VIEW - Hidden on desktop */}
        <div className="relative lg:hidden">
          <div className="grid grid-cols-2 gap-8 sm:gap-10 relative" style={{ zIndex: 10 }}>
            {mobileSteps.map((item, idx) => {
              const color = '#009966'
              
              return (
                <div key={idx} className="flex flex-col items-center text-center group">
                  {/* Circular bubble */}
                  <div className="relative mb-3">
                    {/* Outer glow effect */}
                    <div 
                      className="absolute inset-0 rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-300"
                      style={{ backgroundColor: color }}
                    ></div>
                    
                    {/* Main circle */}
                    <div 
                      className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full flex flex-col items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-300 border-4 border-white"
                      style={{ backgroundColor: color }}
                    >
                      <item.icon className="text-white mb-1" size={28} strokeWidth={2} />
                      
                      {/* Step number badge */}
                      <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-white shadow-lg flex items-center justify-center border-2" style={{ borderColor: color }}>
                        <span className="text-xs font-bold" style={{ color: color }}>{item.step}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Title and description below circle */}
                  <div className="max-w-[130px]">
                    <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1 group-hover:text-green-700 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-tight">
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
            <p className="text-white font-semibold text-sm sm:text-base">
              Every step is handled with precision to ensure quality and compliance
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}