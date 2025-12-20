"use client"
import { MessageSquare, Package, Microscope, CheckCircle2, Zap, Target, Truck } from "lucide-react"

const steps = [
  { step: 1, icon: MessageSquare, title: "Buyer Brief", description: "Understanding requirements" },
  { step: 2, icon: Target, title: "Factory Selection", description: "Finding the best match" },
  { step: 3, icon: Package, title: "Costing", description: "Competitive pricing" },
  { step: 4, icon: Package, title: "Sampling", description: "Product development" },
  { step: 5, icon: CheckCircle2, title: "Order Confirmation", description: "Finalize specifications" },
  { step: 6, icon: Zap, title: "Production", description: "Quality monitoring" },
  { step: 7, icon: Microscope, title: "Inspection", description: "Final QC check" },
  { step: 8, icon: Truck, title: "Shipment", description: "Logistics coordination" },
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
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 rounded-full text-sm font-semibold" style={{ backgroundColor: '#009966', color: 'white' }}>
              Our Journey
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 font-serif">Our Process Flow</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            A streamlined eight-step journey from brief to delivery
          </p>
        </div>

        {/* Central Timeline */}
        <div className="relative">
          {/* Central vertical line */}
          <div 
            className="absolute left-1/2 top-0 bottom-0 w-1 transform -translate-x-1/2 hidden lg:block rounded-full"
            style={{ background: 'linear-gradient(180deg, #009966 0%, #00cc88 50%, #009966 100%)' }}
          ></div>

          {/* Steps */}
          <div className="space-y-8">
            {steps.map((item, idx) => (
              <div key={idx} className="relative">
                {/* Step container */}
                <div className={`flex items-center gap-6 ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  
                  {/* Content Box */}
                  <div className={`flex-1 ${idx % 2 === 0 ? 'lg:text-right lg:pr-6' : 'lg:text-left lg:pl-6'}`}>
                    <div className="inline-block">
                      <div 
                        className="backdrop-blur-xl border border-gray-200 rounded-xl p-5 hover:border-green-300 transition-all duration-300 hover:shadow-xl hover:scale-105 group max-w-sm"
                        style={{ backgroundColor: '#009966' }}
                      >
                        <div className={`flex items-center gap-4 ${idx % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                          {/* Icon */}
                          <div className="flex-shrink-0">
                            <div 
                              className="w-11 h-11 rounded-lg flex items-center justify-center transition-all duration-300 shadow-lg"
                              style={{ background: 'linear-gradient(135deg, #007a52 0%, #009966 100%)' }}
                            >
                              <item.icon className="text-white" size={20} />
                            </div>
                          </div>

                          {/* Text Content */}
                          <div className={`flex-1 ${idx % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                            <h3 className="text-base font-bold text-white mb-1 transition-colors duration-300">{item.title}</h3>
                            <p className="text-white text-sm">{item.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Center number badge */}
                  <div className="hidden lg:block flex-shrink-0 relative z-20">
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center border-4 shadow-xl hover:scale-110 transition-transform duration-300"
                      style={{ 
                        background: 'linear-gradient(135deg, #009966 0%, #00cc88 100%)',
                        borderColor: '#B3FFE6'
                      }}
                    >
                      <span className="text-white font-bold text-base">{String(item.step).padStart(2, '0')}</span>
                    </div>
                  </div>

                  {/* Mobile number badge */}
                  <div className="lg:hidden absolute -left-3 top-0">
                    <div 
                      className="w-10 h-10 rounded-full flex items-center justify-center border-4 shadow-lg"
                      style={{ 
                        background: 'linear-gradient(135deg, #009966 0%, #00cc88 100%)',
                        borderColor: '#B3FFE6'
                      }}
                    >
                      <span className="text-white font-bold text-sm">{String(item.step).padStart(2, '0')}</span>
                    </div>
                  </div>

                  {/* Spacer for alignment */}
                  <div className="flex-1 hidden lg:block"></div>
                </div>
              </div>
            ))}
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