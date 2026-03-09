import SubpageTemplate from '../components/SubpageTemplate'

const offices = [
  {
    title: 'Main Office (Head Quarters)',
    address: 'Rail Head Complex, Jammu – 180012',
    phone: '18001807207 (Toll Free)',
    hours: '10:00 AM – 05:00 PM (Working Days)',
  },
  {
    title: 'Zone – North Office',
    address: 'Peer Mitha, Jammu',
    phone: 'Contact HQ',
    hours: '10:00 AM – 05:00 PM',
  },
  {
    title: 'Zone – South Office',
    address: 'Bohri, Jammu',
    phone: 'Contact HQ',
    hours: '10:00 AM – 05:00 PM',
  },
]

export default function Contact() {
  return (
    <SubpageTemplate title="Contact Us" breadcrumb={[{ name: 'Contact Us' }]}>
      <div>
        <div className="grid md:grid-cols-2 gap-8">

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-white rounded shadow-sm p-6">
              <h2 className="text-lg font-bold text-[#003366] border-b-2 border-[#FF6600] pb-2 mb-5 inline-block">
                Office Addresses
              </h2>
              {offices.map((office, idx) => (
                <div key={idx} className="mb-5 last:mb-0">
                  <h3 className="font-bold text-[#003366] text-sm mb-2">{office.title}</h3>
                  <div className="pl-3 border-l-2 border-gray-200 space-y-1 text-sm text-gray-600">
                    <p>📍 {office.address}</p>
                    <p>📞 {office.phone}</p>
                    <p>🕐 {office.hours}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-[#003366] text-white rounded shadow-sm p-6">
              <h2 className="text-lg font-bold mb-4">Helpline Numbers</h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center bg-white/10 rounded px-4 py-3">
                  <span className="text-sm">General Helpline (Toll Free)</span>
                  <strong className="text-[#FF6600] text-sm">18001807207</strong>
                </div>
                <div className="flex justify-between items-center bg-white/10 rounded px-4 py-3">
                  <span className="text-sm">PHE Water Supply Helpline</span>
                  <a href="https://jmc.jk.gov.in/adminjmcpanel/noticefiles/318202558462347.pdf" target="_blank" rel="noopener noreferrer" className="text-[#FF6600] text-sm hover:underline">View Numbers</a>
                </div>
                <div className="flex justify-between items-center bg-white/10 rounded px-4 py-3">
                  <span className="text-sm">Online Grievance Portal</span>
                  <a href="https://jmc.jk.gov.in/OnlineGrievances.aspx" target="_blank" rel="noopener noreferrer" className="text-[#FF6600] text-sm hover:underline">Register Now</a>
                </div>
              </div>
            </div>
          </div>

          {/* Grievance Form */}
          <div className="bg-white rounded shadow-sm p-6">
            <h2 className="text-lg font-bold text-[#003366] border-b-2 border-[#FF6600] pb-2 mb-5 inline-block">
              Register a Complaint / Grievance
            </h2>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                window.open('https://jmc.jk.gov.in/OnlineGrievances.aspx', '_blank')
              }}
              className="space-y-4"
            >
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Enter your full name"
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-[#003366]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="10-digit mobile number"
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-[#003366]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-[#003366]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Department *</label>
                <select required className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-[#003366] bg-white">
                  <option value="">Select Department</option>
                  <option>Water Supply / PHE</option>
                  <option>Sanitation / Solid Waste</option>
                  <option>Roads / Engineering</option>
                  <option>Street Lighting</option>
                  <option>Property Tax</option>
                  <option>Health Department</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Complaint Description *</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Describe your grievance in detail..."
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-[#003366] resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#003366] hover:bg-[#004080] text-white py-2.5 rounded font-medium text-sm transition-colors"
              >
                Submit on JMC Portal
              </button>
              <p className="text-xs text-gray-500 text-center">
                For immediate help, call Toll Free: <strong>18001807207</strong>
              </p>
            </form>
          </div>

        </div>

        {/* Map placeholder */}
        <div className="mt-8 bg-white rounded shadow-sm p-6">
          <h2 className="text-lg font-bold text-[#003366] border-b-2 border-[#FF6600] pb-2 mb-4 inline-block">Location</h2>
          <div className="rounded overflow-hidden border border-gray-200 h-72">
            <iframe
              title="JMC Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3370.8!2d74.8636!3d32.7266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391e84b2f2e35c5d%3A0x2b3e5c98e4e64a3e!2sJammu%20Municipal%20Corporation!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </SubpageTemplate>
  )
}
