"use client"
import { ArrowRight } from "lucide-react"

export default function CTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 to-green-700 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6">Ready to Transform Your Supply Chain?</h2>
        <p className="text-lg text-green-100 mb-10 max-w-2xl mx-auto">
          Join 500+ global brands trusting Third Eye Sourcing for reliable, cost-effective supply chain solutions
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="px-8 py-3 bg-white text-green-600 rounded-full hover:bg-green-50 transition font-semibold flex items-center gap-2">
            Get Started Now
            <ArrowRight size={20} />
          </button>
          <button className="px-8 py-3 border-2 border-white text-white rounded-full hover:bg-white/10 transition font-semibold">
            Contact Us
          </button>
        </div>

        {/* Trust badges */}
        <div className="mt-12 grid grid-cols-3 gap-4 pt-12 border-t border-white/20">
          <div>
            <div className="text-3xl font-bold mb-1">500+</div>
            <div className="text-green-100 text-sm">Global Brands</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-1">100%</div>
            <div className="text-green-100 text-sm">QC Coverage</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-1">24/7</div>
            <div className="text-green-100 text-sm">Support</div>
          </div>
        </div>
      </div>
    </section>
  )
}
