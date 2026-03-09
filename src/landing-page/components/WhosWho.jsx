const officials = [
  { name: 'Amit Kumar, JKAS', designation: 'Financial Advisor/CAO', photo: '/officials/amit-kumar.jpg' },
  { name: 'Shakeel Ahmed', designation: 'Dy. Legal Remembrancer', photo: '/officials/shakeel-ahmed.jpg' },
  { name: 'Dr. Vinod Sharma', designation: 'Health Officer', photo: '/officials/vinod-sharma.jpg' },
  { name: 'Abdul Star, JKAS', designation: 'Joint Commissioner (H & S)', photo: '/officials/abdul-star.jpg' },
]

export default function WhosWho() {
  return (
    <div className="bg-white rounded shadow-sm overflow-hidden">
      <div className="bg-[#003366] text-white px-4 py-3 flex items-center gap-2 border-b-2 border-[#FF6600]">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        <h2 className="font-bold text-lg">OFFICERS/OFFICIALS OF JMC</h2>
      </div>
      <div className="p-4 h-[250px] overflow-hidden relative">
        <div className="animate-slideUp">
          {[...officials, ...officials].map((official, idx) => (
            <div key={idx} className="mb-3 pb-3 border-b border-gray-100 last:border-0 flex items-center gap-3">
              <div className="w-14 h-16 flex-shrink-0 border border-gray-200 overflow-hidden bg-gray-100 flex items-center justify-center">
                <img
                  src={official.photo}
                  alt={official.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.parentNode.innerHTML = '<div class="text-center p-1"><div class="text-gray-400 text-xs leading-tight">Photo<br/>Not<br/>Available</div></div>'
                  }}
                />
              </div>
              <div>
                <h3 className="font-bold text-[#003366] text-sm leading-tight">{official.name}</h3>
                <p className="text-gray-600 text-xs mt-0.5">{official.designation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
