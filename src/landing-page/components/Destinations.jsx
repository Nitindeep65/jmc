const photos = [
  { src: 'circle/circle.jpeg', alt: 'JMC Activity' },
  { src: 'circle/circle2.jpeg', alt: 'JMC Activity' },
  { src: 'circle/circle3.jpeg', alt: 'JMC Activity' },
  { src: 'circle/circle4.jpeg', alt: 'JMC Activity' },
  { src: 'banner/banner1.jpg', alt: 'JMC Event' },
  { src: 'banner/banner2.jpg', alt: 'JMC Event' },
]

const events = [
  {
    image: 'circle/circle.jpeg',
    title: 'JMC Commissioner Field Visit – Street Light Repairs',
    date: 'April 28, 2025',
    description:
      'JMC Commissioner conducted a comprehensive field visit to oversee ongoing street light repair works across all major roads in Jammu city.',
  },
  {
    image: 'circle/circle2.jpeg',
    title: 'Public Toilet Complex Foundation Stone Laying',
    date: 'April 25, 2025',
    description:
      'JMC Commissioner laid the foundation stone of a new public toilet complex as part of the ODF Plus initiative for cleaner Jammu city.',
  },
  {
    image: 'circle/circle3.jpeg',
    title: 'Cleanliness Drive at Gandhi Nagar Market',
    date: 'April 20, 2025',
    description:
      'A large-scale cleanliness drive was conducted at Gandhi Nagar Market involving sanitation staff, citizens, and local traders.',
  },
]

export default function Destinations() {
  return (
    <section className="py-10 bg-[#f5f5f5]">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">

          {/* Photo Gallery */}
          <div>
            <h2 className="text-xl font-bold text-[#003366] mb-1 pb-2 border-b-2 border-[#FF6600] inline-block">
              Photo Gallery
            </h2>
            <div className="grid grid-cols-3 gap-2 mt-4">
              {photos.map((photo, idx) => (
                <a
                  key={idx}
                  href={photo.src}
                  className="block overflow-hidden rounded border border-gray-200 hover:opacity-90 transition-opacity"
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-24 object-cover hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400'
                    }}
                  />
                </a>
              ))}
            </div>
            <div className="mt-4">
              <a
                href="#"
                className="border border-[#FF6600] text-[#FF6600] hover:bg-[#FF6600] hover:text-white text-sm px-5 py-2 inline-block transition-colors rounded"
              >
                View All Photos
              </a>
            </div>
          </div>

          {/* Events */}
          <div>
            <div className="bg-[#003366] text-white px-4 py-3 mb-4 inline-block rounded-sm">
              <h2 className="text-xl font-bold">Events &amp; Activities</h2>
            </div>
            <div className="space-y-4">
              {events.map((event, idx) => (
                <div key={idx} className="bg-white rounded shadow-sm overflow-hidden flex">
                  <div className="w-24 flex-shrink-0">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400'
                      }}
                    />
                  </div>
                  <div className="p-3 flex-1 min-w-0">
                    <a href="#" className="text-sm font-semibold text-[#003366] hover:underline line-clamp-2 block">
                      {event.title}
                    </a>
                    <p className="text-xs text-[#FF6600] mt-1 font-medium">{event.date}</p>
                    <p className="text-xs text-gray-500 mt-1 line-clamp-2">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <a
                href="#"
                className="border border-[#FF6600] text-[#FF6600] hover:bg-[#FF6600] hover:text-white text-sm px-5 py-2 inline-block transition-colors rounded"
              >
                View All Events
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
