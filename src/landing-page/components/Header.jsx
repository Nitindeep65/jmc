export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          {/* Left - Emblem and Title */}
          <div className="flex items-center gap-4">
            <img
              src="/banner/images.jpeg"
              width={32}
              height={32}
              alt="JMC"
              className="h-[70px] w-auto"
            />
            <div>
              <p className="text-[#006400] text-sm font-medium">GOVERNMENT OF JAMMU & KASHMIR</p>
              <h1 className="text-[#003366] text-xl md:text-2xl font-bold leading-tight">JAMMU MUNICIPAL CORPORATION</h1>
              <p className="text-[#006400] text-sm">Keen to server you better</p>
            </div>
          </div>

          {/* Right - Toll Free + Digital India Logo */}
          <div className="hidden md:flex flex-col items-end gap-2">
            <div className="text-right">
              <p className="text-[#003366] text-xs font-semibold">Toll Free: <strong className="text-[#FF6600] text-sm">18001807207</strong></p>
              <p className="text-gray-500 text-[10px]">10:00 AM – 05:00 PM (Working Days)</p>
            </div>
            <a href="https://www.digitalindia.gov.in/" target="_blank" rel="noopener noreferrer">
              <img
                src="/footer/dic.png"
                alt="Digital India"
                className="h-[40px] w-auto"
                onError={(e) => { e.target.src = 'https://www.digitalindia.gov.in/sites/all/themes/digitalindia/images/logo.png' }}
              />
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
