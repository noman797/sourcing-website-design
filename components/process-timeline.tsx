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
      style={{
        background: 'radial-gradient(ellipse at center, #ffffff 0%, #ffffff 40%, #26FFB7 100%)'
      }}
    >
      {/* Animated background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-1/4 right-10 w-80 h-80 rounded-full opacity-20 blur-3xl animate-pulse"
          style={{ background: '#26FFB7', animationDuration: '4s' }}
        ></div>
        <div 
          className="absolute bottom-1/4 left-10 w-96 h-96 rounded-full opacity-15 blur-3xl animate-pulse"
          style={{ background: '#1ad9a0', animationDuration: '6s', animationDelay: '2s' }}
        ></div>
        <div 
          className="absolute top-1/2 left-1/2 w-72 h-72 rounded-full opacity-10 blur-3xl animate-pulse"
          style={{ background: '#26FFB7', animationDuration: '5s', animationDelay: '1s' }}
        ></div>
      </div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-gray-800/10 text-gray-800 rounded-full text-sm font-semibold border border-gray-800/20 backdrop-blur-sm">
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
            style={{ background: 'linear-gradient(180deg, #26FFB7 0%, #1ad9a0 50%, #26FFB7 100%)' }}
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
                      <div className="bg-white/95 backdrop-blur-xl border border-gray-200 rounded-xl p-5 hover:bg-white hover:border-cyan-300 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/30 group max-w-sm hover:scale-105">
                        <div className={`flex items-center gap-4 ${idx % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                          {/* Icon */}
                          <div className="flex-shrink-0">
                            <div 
                              className="w-11 h-11 rounded-lg flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg"
                              style={{ background: 'linear-gradient(135deg, #26FFB7 0%, #1ad9a0 100%)' }}
                            >
                              <item.icon className="text-gray-900" size={20} />
                            </div>
                          </div>

                          {/* Text Content */}
                          <div className={`flex-1 ${idx % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                            <h3 className="text-base font-bold text-gray-800 mb-1 group-hover:text-cyan-700 transition-colors duration-300">{item.title}</h3>
                            <p className="text-gray-600 text-sm">{item.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Center number badge */}
                  <div className="hidden lg:block flex-shrink-0 relative z-20">
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center border-4 border-white shadow-xl hover:scale-110 transition-transform duration-300"
                      style={{ background: 'linear-gradient(135deg, #26FFB7 0%, #1ad9a0 100%)' }}
                    >
                      <span className="text-gray-900 font-bold text-base">{String(item.step).padStart(2, '0')}</span>
                    </div>
                  </div>

                  {/* Mobile number badge */}
                  <div className="lg:hidden absolute -left-3 top-0">
                    <div 
                      className="w-10 h-10 rounded-full flex items-center justify-center border-4 border-white shadow-lg"
                      style={{ background: 'linear-gradient(135deg, #26FFB7 0%, #1ad9a0 100%)' }}
                    >
                      <span className="text-gray-900 font-bold text-sm">{String(item.step).padStart(2, '0')}</span>
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
          <div className="inline-block px-6 py-3 bg-gray-800/10 backdrop-blur-sm border border-gray-800/20 rounded-xl hover:bg-gray-800/20 transition-all duration-300">
            <p className="text-gray-800 font-semibold text-base">
              Every step is handled with precision to ensure quality and compliance
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}