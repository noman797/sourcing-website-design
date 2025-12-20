"use client"
import { Globe, Factory, Zap, Award, Heart, BarChart3 } from "lucide-react"

const strengths = [
  {
    icon: Globe,
    title: "Deep Market Understanding",
    description: "European & USA retail requirements expertise",
  },
  {
    icon: Factory,
    title: "50+ Audited Partners",
    description: "Reliable manufacturing network across Bangladesh",
  },
  {
    icon: Zap,
    title: "Multi-Category Capability",
    description: "Diverse sourcing expertise across industries",
  },
  {
    icon: Award,
    title: "Dedicated QC Teams",
    description: "Professional product development & quality assurance",
  },
  {
    icon: Heart,
    title: "Transparent Communication",
    description: "Quick response and clear partnership approach",
  },
  {
    icon: BarChart3,
    title: "Flexible & Competitive",
    description: "Custom MOQs and premium pricing solutions",
  },
]

export default function Strengths() {
  return (
    <>
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
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
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
        
        .animation-delay-5000 {
          animation-delay: 5s;
        }
      `}</style>
      
      <section id="strength" className="relative py-8 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated Background Blobs */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-teal-50 to-green-50">
          <div className="absolute top-10 left-10 w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute top-20 right-20 w-96 h-96 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-10 left-1/3 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
          <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-emerald-300 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-blob animation-delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-teal-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-3000"></div>
          <div className="absolute top-1/3 right-1/2 w-64 h-64 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-blob animation-delay-5000"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-8">
            <div className="inline-block mb-4">
              <span className="px-4 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                Our Capabilities
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Our Strength</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We stand out with dedicated expertise and proven results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {strengths.map((strength, idx) => {
              const Icon = strength.icon
              return (
                <div
                  key={idx}
                  className="relative p-4 rounded-lg backdrop-blur-sm border border-gray-200 hover:border-green-300 hover:scale-105 hover:-translate-y-2 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden cursor-pointer"
                  style={{
                    background: '#009966',
                    animation: 'float 6s ease-in-out infinite',
                    animationDelay: `${idx * 0.2}s`
                  }}
                >
                  <div className="relative z-10">
                    <div 
                      className="w-9 h-9 bg-white/40 backdrop-blur-sm rounded-lg flex items-center justify-center mb-2.5 transition-all duration-500 shadow-lg"
                    >
                      <Icon className="text-green-700 transition-transform duration-500" size={18} />
                    </div>
                    <h3 className="text-sm font-semibold text-white mb-1.5 transition-transform duration-300">{strength.title}</h3>
                    <p className="text-white text-xs leading-relaxed transition-colors duration-300">{strength.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}