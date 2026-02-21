export default function NewsTicker() {
  return (
    <div className="bg-[#f8f8f8] border-b border-gray-200 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 flex items-center">
        <div className="bg-[#FF6600] text-white px-4 py-2 font-bold text-sm flex-shrink-0">
          <span className="animate-pulse">●</span> INFO
        </div>
        <div className="overflow-hidden flex-1 py-2">
          <div className="animate-marquee whitespace-nowrap text-[#333] text-sm">
           PHE Department has launched a new water conservation initiative. | JMC to host a public health awareness camp on 15th June. | New waste management guidelines released for residents. | JMC announces free health check-up camps across the city. | Upcoming: JMC's annual cleanliness drive scheduled for 20th June.
          </div>
        </div>
      </div>
    </div>
  )
}
