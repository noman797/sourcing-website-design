"use client"

const team = [
  {
    name: "Md. Rustam Khan (Ruman)",
    role: "Sourcing Director",
    image: "/images/male-executive-sourcing-director.jpg",
    experience: "13+ years in hardline industry",
    expertise: ["20+ product categories", "200+ global buyer network", "Market trends expert"],
  },
  {
    name: "Lutfor Rahman Mamun",
    role: "Apparel Sourcing Lead",
    image: "/images/male-apparel-sourcing-professional.jpg",
    experience: "15+ years in apparel sourcing",
    expertise: ["100+ apparel factories", "Woven, knit & denim expert", "Cost negotiation specialist"],
  },
  {
    name: "Halimul Haque",
    role: "Business Development",
    image: "/images/male-business-development-manager.jpg",
    experience: "15+ years in international B2B",
    expertise: ["Multi-category portfolios", "Supplier management", "Buyer relationships"],
  },
]

export default function Team() {
  return (
    <section id="team" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="px-4 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
              Our Leadership
            </span>
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 font-serif">Meet Our Experts</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            45+ years of combined expertise leading the global sourcing industry
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="h-80 overflow-hidden bg-gradient-to-br from-green-100 to-gray-100 relative">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-500"
                />
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-green-600 font-semibold text-base mb-4">{member.role}</p>

                <div className="mb-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-100">
                  <p className="text-sm font-medium text-gray-700 flex items-start gap-2">
                    <span className="text-green-600 font-bold mt-0.5">→</span>
                    {member.experience}
                  </p>
                </div>

                <div className="space-y-3">
                  {member.expertise.map((exp, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-700 font-medium">{exp}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
