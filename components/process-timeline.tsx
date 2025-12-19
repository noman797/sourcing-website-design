"use client"
import { ArrowRight } from "lucide-react"
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
      className="py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-50 via-white to-emerald-50"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold">
              Our Journey
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 font-serif">Our Process Flow</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A streamlined eight-step journey from brief to delivery
          </p>
        </div>

        {/* Flowchart Design */}
        <div className="relative">
          {/* Process flow - visual flowchart layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((item, idx) => (
              <div key={idx} className="relative">
                {/* Flowchart Box */}
                <div className="bg-white border-2 border-emerald-500 rounded-lg p-5 shadow-md hover:shadow-xl transition-all duration-300 group hover:scale-105">
                  {/* Step Number Circle */}
                  <div className="absolute -top-4 -right-4 w-10 h-10 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-sm">{item.step}</span>
                  </div>

                  {/* Icon Circle */}
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-600 to-emerald-700 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <item.icon className="text-white" size={32} />
                  </div>

                  {/* Content */}
                  <div className="text-center pt-2">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>

                  {/* Arrow indicator - show on all except last */}
                  {idx < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-8 transform -translate-y-1/2 z-20">
                      <ArrowRight className="text-emerald-600 w-6 h-6" />
                    </div>
                  )}
                </div>

                {/* Mobile/Tablet Arrow - vertical */}
                {idx < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-4">
                    <div className="text-emerald-600 transform rotate-90">
                      <ArrowRight className="w-6 h-6" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom text */}
        <div className="mt-12 text-center">
          <p className="text-gray-700 font-semibold text-lg">
            Every step is handled with precision to ensure quality and compliance
          </p>
        </div>
      </div>
    </section>
  )
}
