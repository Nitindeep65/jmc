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

          {/* Right - Digital India Logo */}
          <div className="hidden md:flex items-center">
            <a href="https://www.digitalindia.gov.in/" target="_blank" rel="noopener noreferrer">
              <img
                src="/footer/dic.png"
                alt="Digital India"
                className="h-[50px] w-auto"
                onError={(e) => { e.target.src = 'https://www.digitalindia.gov.in/sites/all/themes/digitalindia/images/logo.png' }}
              />
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
