"use client"

export default function AboutSection() {
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
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>

      <section id="about" className="relative py-8 px-4 sm:px-6 lg:px-8 overflow-hidden scroll-mt-24">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50">
          <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <div className="inline-block mb-4">
                <span className="px-4 py-1 bg-green-100 text-green-700 rounded-full text-5xl font-semibold">About Us</span>
              </div>

              <div className="relative mb-6">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-600 to-teal-600 rounded-full"></div>
                <p className="text-sm text-emerald-700 font-medium pl-6 italic leading-relaxed">
                  Third Eye Sourcing connects global buyers with reliable, compliant, and cost-efficient factories in
                  Bangladesh.   We provide end-to-end sourcing support from product development to shipment ensuring quality, compliance,
                  and timely delivery at competitive pricing.
                </p>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border-2 border-green-300 shadow-md mb-6">
                <h4 className="font-bold text-gray-900 mb-3 text-lg">Our Mission</h4>
                <p className="text-gray-700">To be the most trusted sourcing partner in Bangladesh</p>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border-2 border-green-300 shadow-md">
                <h4 className="font-bold text-gray-900 mb-3 text-lg">Our Vision</h4>
                <p className="text-gray-700">
                  Empowering global trade through transparency, innovation, and sustainability
                </p>
              </div>
            </div>

            {/* Image with tagline on top */}
            <div>
              <div className="rounded-2xl overflow-hidden shadow-2xl h-[700px]">
                <img
                  src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=700&fit=crop"
                  alt="Our Operations"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}