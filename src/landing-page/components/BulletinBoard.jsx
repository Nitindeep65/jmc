const pressReleases = [
  {
    date: '30th April 2025',
    title: 'Visit of Commissioner Secretary, Housing & Urban Development Department and Commissioner, Jammu Municipal Corporation to Animal Care Facilities in Jammu'
  },
  {
    date: '28th April 2025',
    title: 'JMC Commissioner Conducts Field Visit to Oversee Street Light Repairs in Jammu City'
  },
  {
    date: '25th April 2025',
    title: 'JMC Commissioner lays foundation of public toilet complex Says efforts afoot to make Jammu ODF'
  }
]

export default function BulletinBoard() {
  return (
    <div className="bg-white rounded shadow-sm overflow-hidden">
      <div className="bg-[#003366] text-white px-4 py-3 flex items-center gap-2">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
        <h2 className="font-bold text-lg">Bulletin Board</h2>
      </div>
      <div className="p-4 h-[250px] overflow-hidden relative">
        <div className="animate-slideUp">
          {[...pressReleases, ...pressReleases].map((item, idx) => (
            <div key={idx} className="mb-4 pb-3 border-b border-gray-100">
              <div className="flex items-start gap-2">
                <span className="text-[#FF6600] text-lg">♦</span>
                <div>
                  <p className="text-xs text-[#FF6600] font-semibold mb-1">Press Release on {item.date}</p>
                  <a href="#" className="text-sm text-gray-700 hover:text-[#003366] hover:underline leading-tight block">
                    {item.title}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
