"use client"

import { Handshake, TrendingUp } from "lucide-react"

export default function PartnershipSection() {
  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative bg-gradient-to-r from-emerald-600 via-emerald-600 to-teal-600 rounded-2xl p-10 shadow-2xl overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-48 h-48 bg-white rounded-full blur-3xl"></div>
            </div>
            <div className="relative z-10 text-center">
              <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                <Handshake className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Partnerships & Collaboration</h3>
              <div className="text-emerald-100 text-lg leading-relaxed max-w-3xl mx-auto space-y-3">
                <p>
                  We aim to become an extension of our clients' sourcing team, managing their Bangladesh operations
                  efficiently and transparently.
                </p>
                <p className="flex items-center justify-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Our flexible and proactive approach ensures mutual growth and long-term collaboration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}