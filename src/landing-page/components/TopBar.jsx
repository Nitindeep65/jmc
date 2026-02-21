import { useState, useEffect } from 'react'

export default function TopBar() {
  const [fontSize, setFontSize] = useState(100)

  useEffect(() => {
    const root = document.documentElement
    root.style.fontSize = `${fontSize}%`
    
    return () => {
      root.style.fontSize = '100%'
    }
  }, [fontSize])

  const decreaseFont = () => {
    if (fontSize > 80) setFontSize(prev => prev - 10)
  }

  const resetFont = () => {
    setFontSize(100)
  }

  const increaseFont = () => {
    if (fontSize < 130) setFontSize(prev => prev + 10)
  }

  return (
    <div className="bg-[#333] text-white text-xs">
      <div className="max-w-[1200px] mx-auto px-4 py-1 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <a href="#main-content" className="hover:underline text-white">Skip to Main Content</a>
          <span className="text-gray-500">|</span>
          <a href="#" className="hover:underline text-white">Screen Reader Access</a>
        </div>
        <div className="flex items-center gap-3">
          <select className="bg-[#444] text-white border-0 px-2 py-1 text-xs rounded">
            <option>Select Language</option>
            <option>English</option>
            <option>हिंदी</option>
          </select>
          <div className="flex items-center gap-1">
            <button 
              onClick={decreaseFont}
              className="w-6 h-6 bg-[#555] text-xs rounded hover:bg-[#666]"
              title="Decrease Font Size"
            >A-</button>
            <button 
              onClick={resetFont}
              className="w-6 h-6 bg-[#555] text-sm rounded hover:bg-[#666]"
              title="Reset Font Size"
            >A</button>
            <button 
              onClick={increaseFont}
              className="w-6 h-6 bg-[#555] text-base rounded hover:bg-[#666]"
              title="Increase Font Size"
            >A+</button>
          </div>
          <div className="flex items-center gap-1">
            <button className="w-6 h-6 bg-[#555] rounded hover:bg-[#666]" title="Default Theme">◐</button>
            <button className="w-6 h-6 bg-[#555] rounded hover:bg-[#666]" title="Dark Theme">●</button>
          </div>
        </div>
      </div>
    </div>
  )
}
