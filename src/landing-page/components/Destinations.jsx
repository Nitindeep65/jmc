const destinations = [
  { image: 'circle/circle.jpeg' },
  { image: 'circle/circle2.jpeg' },
  { image: 'circle/circle3.jpeg' },
  { image: 'circle/circle4.jpeg' },
]

export default function Destinations() {
  return (
    <section className="py-8 bg-[#f5f5f5]">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-[#003366] inline-block relative">
            Welcome to Jammu Municipal Corporation
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-[#FF6600]"></span>
          </h2>
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl">
            {destinations.map((dest, idx) => (
              <a key={idx} href="#" className="bg-white rounded shadow-sm overflow-hidden group hover:shadow-lg transition-shadow">
                <div className="relative h-[150px] overflow-hidden">
                  <img
                    src={dest.image}
                    alt={`JMC Image ${idx + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400' }}
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
        <div className="text-center mt-6">
          <a href="#" className="inline-block bg-[#003366] hover:bg-[#002244] text-white px-6 py-2 rounded font-medium transition-colors">
            View All
          </a>
        </div>
      </div>
    </section>
  )
}
