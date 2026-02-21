export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white">
      <div className="max-w-[1200px] mx-auto px-4 py-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-bold mb-4 text-[#FF6600]">About Us</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              State Tourism Department is committed to promoting tourism and providing world-class facilities to all visitors.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-[#FF6600]">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white hover:underline">Website Policies</a></li>
              <li><a href="#" className="hover:text-white hover:underline">Help</a></li>
              <li><a href="#" className="hover:text-white hover:underline">Contact Us</a></li>
              <li><a href="#" className="hover:text-white hover:underline">Feedback</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-[#FF6600]">Important Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white hover:underline">Who's Who</a></li>
              <li><a href="#" className="hover:text-white hover:underline">Where to Stay</a></li>
              <li><a href="#" className="hover:text-white hover:underline">Video Gallery</a></li>
              <li><a href="#" className="hover:text-white hover:underline">Tourist Visa</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-[#FF6600]">Connect With Us</h4>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-[#3b5998] rounded-full flex items-center justify-center hover:opacity-80">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 bg-[#1da1f2] rounded-full flex items-center justify-center hover:opacity-80">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 bg-[#e1306c] rounded-full flex items-center justify-center hover:opacity-80">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 bg-[#ff0000] rounded-full flex items-center justify-center hover:opacity-80">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700">
        <div className="max-w-[1200px] mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
            <p>Content Owned by Copyright Name</p>
            <p>Developed and hosted by <a href="http://www.nic.in/" className="hover:underline">National Informatics Centre</a>, <a href="http://meity.gov.in/" className="hover:underline">Ministry of Electronics & Information Technology</a>, Government of India</p>
          </div>
          <div className="text-center mt-3 text-xs text-gray-500">
            <p>Last Updated: July 11, 2025</p>
            <div className="flex flex-wrap justify-center gap-3 mt-2">
              <a href="https://s3waas.gov.in/" className="hover:text-white">Secure, Scalable and Sugamya Website as a Service</a>
              <span>|</span>
              <a href="http://www.nic.in/" className="hover:text-white">National Informatics Centre</a>
              <span>|</span>
              <a href="http://www.digitalindia.gov.in/" className="hover:text-white">Digital India</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
