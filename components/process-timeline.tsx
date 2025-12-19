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
      className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-50 via-white to-emerald-50 relative overflow-hidden"
    >
    
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-100/40 via-transparent to-transparent"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-emerald-500/10 text-emerald-600 rounded-full text-sm font-semibold border border-emerald-500/20 backdrop-blur-sm">
              Our Journey
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4 font-serif">Our Process Flow</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A streamlined eight-step journey from brief to delivery
          </p>
        </div>

        {/* Central Timeline */}
        <div className="relative">
          {/* Central vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 via-emerald-600 to-emerald-500 transform -translate-x-1/2 hidden lg:block"></div>

          {/* Steps */}
          <div className="space-y-8">
            {steps.map((item, idx) => (
              <div key={idx} className="relative">
                {/* Step container */}
                <div className={`flex items-center gap-6 ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  
                  {/* Content Box */}
                  <div className={`flex-1 ${idx % 2 === 0 ? 'lg:text-right lg:pr-6' : 'lg:text-left lg:pl-6'}`}>
                    <div className="inline-block">
                      <div className="bg-white/80 backdrop-blur-xl border border-emerald-200/60 rounded-xl p-5 hover:bg-white hover:border-emerald-300 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/20 group max-w-sm">
                        <div className={`flex items-center gap-4 ${idx % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                          {/* Icon */}
                          <div className="flex-shrink-0">
                            <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg shadow-emerald-500/30">
                              <item.icon className="text-white" size={20} />
                            </div>
                          </div>

                          {/* Text Content */}
                          <div className={`flex-1 ${idx % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                            <h3 className="text-base font-bold text-gray-800 mb-1 group-hover:text-emerald-600 transition-colors duration-300">{item.title}</h3>
                            <p className="text-gray-600 text-sm">{item.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Center number badge */}
                  <div className="hidden lg:block flex-shrink-0 relative z-20">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center border-4 border-white shadow-xl shadow-emerald-500/40 hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-base">{String(item.step).padStart(2, '0')}</span>
                    </div>
                  </div>

                  {/* Mobile number badge */}
                  <div className="lg:hidden absolute -left-3 top-0">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center border-4 border-white shadow-lg shadow-emerald-500/40">
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
          <div className="inline-block px-6 py-3 bg-emerald-500/10 backdrop-blur-sm border border-emerald-500/30 rounded-xl">
            <p className="text-emerald-600 font-semibold text-base">
              Every step is handled with precision to ensure quality and compliance
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}