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
    <section className="relative py-8 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <style jsx global>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        
        @keyframes pulse-custom {
          0%, 100% { transform: scale(1); opacity: 0.2; }
          50% { transform: scale(1.1); opacity: 0.3; }
        }
        
        @keyframes float-card {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        @keyframes shine {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        
        .animation-delay-3000 {
          animation-delay: 3s;
        }
      `}</style>
      
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-teal-50 to-green-50">
        <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/3 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        <div className="absolute bottom-40 right-1/4 w-80 h-80 bg-emerald-300 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-blob animation-delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-teal-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-3000"></div>
      </div>

      {/* Additional Pulse Effects */}
      <div className="absolute inset-0 -z-10">
        <div 
          className="absolute top-1/2 right-0 w-96 h-96 rounded-full blur-3xl"
          style={{ 
            background: '#B3FFE6',
            animation: 'pulse-custom 6s ease-in-out infinite'
          }}
        ></div>
        <div 
          className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full blur-3xl" 
          style={{ 
            background: '#99FFDD',
            animation: 'pulse-custom 6s ease-in-out infinite 3s' 
          }}
        ></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-block mb-4 px-4 py-2 bg-green-100 rounded-full">
            <span className="text-green-700 font-semibold text-sm">Quality Assurance</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 via-green-800 to-slate-900 bg-clip-text text-transparent mb-6">
            Our Commitment to Quality
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Quality is at the core of everything we do. We maintain the highest standards through rigorous processes and
            continuous improvement.
          </p>
        </div>

        {/* Quality Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {qualityPoints.map((point, idx) => {
            const Icon = point.icon
            return (
              <div
                key={idx}
                className="group relative flex gap-4 p-4 rounded-lg border-2 border-slate-200 hover:border-green-400 hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer"
                style={{
                  background: '#009966',
                  animation: 'float-card 6s ease-in-out infinite',
                  animationDelay: `${idx * 0.2}s`
                }}
              >
                {/* Animated gradient overlay on hover */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: 'linear-gradient(135deg, #99FFDD 0%, #B3FFE6 100%)',
                  }}
                ></div>

                {/* Shine effect */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{
                    background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)',
                    backgroundSize: '200% 100%',
                    animation: 'shine 2s infinite'
                  }}
                ></div>

                {/* Pulsing glow */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500 animate-pulse"
                  style={{ background: '#00ff99' }}
                ></div>

                {/* Corner accents */}
                <div className="absolute top-0 right-0 w-0 h-0 border-t-2 border-r-2 border-green-600 opacity-0 group-hover:w-10 group-hover:h-10 group-hover:opacity-60 transition-all duration-500"></div>
                <div className="absolute bottom-0 left-0 w-0 h-0 border-b-2 border-l-2 border-green-600 opacity-0 group-hover:w-10 group-hover:h-10 group-hover:opacity-60 transition-all duration-500"></div>

                <div className="flex-shrink-0 relative z-10">
                  <div 
                    className="w-10 h-10 rounded-lg flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-xl transition-all duration-300"
                    style={{ background: 'linear-gradient(135deg, #009966 0%, #00cc88 100%)' }}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div className="flex-1 relative z-10">
                  <h3 className="text-sm font-bold text-white mb-1.5 group-hover:text-white transition-colors">
                    {point.title}
                  </h3>
                  <p className="text-white group-hover:text-white transition-colors text-xs leading-relaxed">
                    {point.description}
                  </p>
                </div>

                {/* Bottom line animation */}
                <div 
                  className="absolute bottom-0 left-0 w-0 h-1 group-hover:w-full transition-all duration-700"
                  style={{ 
                    background: 'linear-gradient(90deg, #009966, #00cc88)',
                    boxShadow: '0 0 10px rgba(0, 153, 102, 0.5)'
                  }}
                ></div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}