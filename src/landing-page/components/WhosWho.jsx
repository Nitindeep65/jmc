const officials = [
  { name: 'Devansh Yadav, IAS', designation: 'Commissioner' },
  { name: 'Rajeev Khajuria, JKAS', designation: 'Joint Comm. (Adm.)' },
  { name: 'Subah Mehta, JKAS', designation: 'Joint Comm., (R&E)' },
  { name: 'Lal Chand, JKAS', designation: 'Dy. Comm. (South)' }
]

export default function WhosWho() {
  return (
    <div className="bg-white rounded shadow-sm overflow-hidden">
      <div className="bg-[#003366] text-white px-4 py-3 flex items-center gap-2">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        <h2 className="font-bold text-lg">OFFICERS/OFFICIALS OF JMC</h2>
      </div>
      <div className="p-4 h-[250px] overflow-hidden relative">
        <div className="animate-slideUp">
          {[...officials, ...officials].map((official, idx) => (
            <div key={idx} className="mb-6 pb-4 border-b border-gray-100 last:border-0">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#003366] rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {official.name.charAt(0)}
                </div>
                <div>
                  <h3 className="font-bold text-[#003366] text-sm">{official.name}</h3>
                  <p className="text-[#FF6600] text-xs font-medium">{official.designation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
