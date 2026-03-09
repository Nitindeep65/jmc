import SubpageTemplate from '../components/SubpageTemplate'

const higherOfficials = [
  { name: 'Mr. Manoj Sinha', title: "Hon'ble Lt. Governor", image: '/officials/LG.jpg' },
  { name: 'Mr. Omar Abdullah', title: "Hon'ble Chief Minister", image: '/officials/cm.jpg' },
  { name: 'Mr. Atul Dulloo', title: 'Chief Secretary, J&K', image: '/officials/cs.jpg' },
  { name: 'Ms. Mandeep Kaur, IAS', title: 'Commissioner Secretary, JKHUDD', image: null },
  { name: 'Mr. Devansh Yadav, IAS', title: 'Municipal Commissioner, Jammu', image: null },
]

const jmcOfficers = [
  { name: 'Devansh Yadav, IAS', designation: 'Commissioner' },
  { name: 'Rajeev Khajuria, JKAS', designation: 'Joint Comm. (Adm.)' },
  { name: 'Subah Mehta, JKAS', designation: 'Joint Comm. (R&E)' },
  { name: 'Lal Chand, JKAS', designation: 'Dy. Commissioner (South)' },
  { name: 'Chand Singh, JKAS', designation: 'Secretary' },
  { name: 'Sanjay Badyal, JKAS', designation: 'Dy. Commissioner (North)' },
  { name: 'Amit Kumar, JKAS', designation: 'Financial Advisor / CAO' },
  { name: 'Shakeel Ahmed', designation: 'Dy. Legal Remembrance' },
  { name: 'Dr. Vinod Sharma', designation: 'Health Officer' },
  { name: 'Abdul Star, JKAS', designation: 'Joint Commissioner (H & S)' },
  { name: 'S.P. Singh', designation: 'Executive Engineer (Electrical)' },
  { name: 'Dharam Vir Singh', designation: 'Chief Transport Officer' },
  { name: 'Dr. Jaswant Singh', designation: 'Municipal Veterinary Officer' },
  { name: 'Firdous Ahmed Qazi', designation: 'Joint Comm. (Works)' },
  { name: 'Manoj Kumar', designation: 'Senior Town Planner' },
  { name: 'Parveen Gupta', designation: 'Pvt. Secy. to Commissioner' },
  { name: 'Sunil Gandotra', designation: 'SE, PHE' },
]

function Avatar({ name }) {
  const initials = name.split(' ').slice(0, 2).map(w => w[0]).join('')
  return (
    <div className="w-full h-full flex items-center justify-center bg-[#003366] text-white text-2xl font-bold">
      {initials}
    </div>
  )
}

export default function Officials() {
  return (
    <SubpageTemplate title="Officers &amp; Officials" breadcrumb={[{ name: 'Officials' }]}>
      <div className="space-y-10">

        {/* Higher Officials */}
        <section>
          <h2 className="text-xl font-bold text-[#003366] border-b-2 border-[#FF6600] pb-2 mb-6 inline-block">
            Higher Officials
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {higherOfficials.map((official, idx) => (
              <div
                key={idx}
                className="bg-white rounded shadow-sm overflow-hidden text-center hover:shadow-md transition-shadow"
              >
                <div className="h-44 overflow-hidden bg-gray-100">
                  {official.image ? (
                    <img
                      src={official.image}
                      alt={official.name}
                      className="w-full h-full object-cover object-top"
                      onError={(e) => {
                        e.target.style.display = 'none'
                        e.target.parentNode.classList.add('flex', 'items-center', 'justify-center')
                        e.target.parentNode.innerHTML = `<div class="w-full h-full flex items-center justify-center bg-[#003366] text-white text-3xl font-bold">${official.name.split(' ').slice(0,2).map(w=>w[0]).join('')}</div>`
                      }}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-[#003366] text-white text-3xl font-bold">
                      {official.name.replace(/^(Mr\.|Ms\.|Dr\.)?\s*/i, '').split(' ').slice(0, 2).map(w => w[0]).join('')}
                    </div>
                  )}
                </div>
                <div className="p-3">
                  <p className="text-[#003366] font-bold text-xs leading-tight">{official.name}</p>
                  <p className="text-gray-500 text-xs mt-1">{official.title}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* JMC Officers */}
        <section id="jmc-officers">
          <h2 className="text-xl font-bold text-[#003366] border-b-2 border-[#FF6600] pb-2 mb-6 inline-block">
            Officers / Officials of JMC
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {jmcOfficers.map((officer, idx) => (
              <div
                key={idx}
                className="bg-white rounded shadow-sm p-4 flex items-center gap-3 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-full bg-[#003366] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {officer.name.split(' ').slice(0, 2).map(w => w[0]).join('')}
                </div>
                <div>
                  <p className="text-[#003366] font-semibold text-xs leading-tight">{officer.name}</p>
                  <p className="text-gray-500 text-xs mt-0.5">{officer.designation}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </SubpageTemplate>
  )
}
