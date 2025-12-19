"use client"

import { CheckCircle, Users, Target, Shield, FileCheck } from "lucide-react"

export default function QualityCommitmentSection() {
  const qualityPoints = [
    {
      icon: Shield,
      title: "Factory Audits",
      description:
        "Comprehensive audits of all manufacturing facilities to ensure compliance with international standards",
    },
    {
      icon: Users,
      title: "QC Team Training",
      description: "Regular training programs for quality control teams to maintain excellence and consistency",
    },
    {
      icon: CheckCircle,
      title: "Zero Tolerance Policy",
      description: "Strict adherence to zero tolerance for non-compliance and quality deviations",
    },
    {
      icon: Target,
      title: "AQL System",
      description: "Acceptance Quality Level (AQL) based quality system for precise quality measurement",
    },
    {
      icon: FileCheck,
      title: "Third-Party Inspection Support",
      description:
        "We support and facilitate independent third-party inspections to provide transparency and assurance to all our partners",
    },
  ]

  return (
    <section className="py-8 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-emerald-100 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-teal-100 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4 px-4 py-2 bg-emerald-100 rounded-full">
            <span className="text-emerald-700 font-semibold text-sm">Quality Assurance</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 via-emerald-800 to-slate-900 bg-clip-text text-transparent mb-6">
            Our Commitment to Quality
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Quality is at the core of everything we do. We maintain the highest standards through rigorous processes and
            continuous improvement.
          </p>
        </div>

        {/* Quality Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {qualityPoints.map((point, idx) => {
            const Icon = point.icon
            return (
              <div
                key={idx}
                className="group relative flex gap-6 p-8 rounded-2xl bg-white border-2 border-slate-200 hover:border-emerald-400 hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer"
              >
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>

                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center group-hover:scale-110 group-hover:shadow-xl transition-all duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors">
                    {point.title}
                  </h3>
                  <p className="text-slate-600 group-hover:text-slate-700 transition-colors text-sm leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
