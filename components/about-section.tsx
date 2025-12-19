"use client"

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="inline-block mb-4">
              <span className="px-4 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">About Us</span>
            </div>

            <div className="relative mb-6">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-600 to-teal-600 rounded-full"></div>
              <p className="text-sm text-emerald-700 font-medium pl-6 italic leading-relaxed">
                Third Eye Sourcing connects global buyers with reliable, compliant, and cost-efficient factories in
                Bangladesh
              </p>
            </div>

            <h2 className="text-5xl font-bold text-gray-900 mb-6 font-serif">Who We Are</h2>

            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              We provide end-to-end sourcing support from product development to shipment ensuring quality, compliance,
              and timely delivery at competitive pricing.
            </p>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200 mb-6">
              <h4 className="font-bold text-gray-900 mb-3 text-lg">Our Mission</h4>
              <p className="text-gray-700">To be the most trusted sourcing partner in Bangladesh</p>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
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
  )
}
