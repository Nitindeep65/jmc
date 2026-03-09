import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './landing-page'
import About from './pages/About'
import Officials from './pages/Officials'
import Commissioner from './pages/Commissioner'
import Notices from './pages/Notices'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import Services from './pages/Services'
import SmartCity from './pages/SmartCity'
import DevelopmentWorks from './pages/DevelopmentWorks'
import Feedback from './pages/Feedback'
import RTI from './pages/RTI'
import SwachhMission from './pages/SwachhMission'
import EGov from './pages/EGov'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/officials" element={<Officials />} />
        <Route path="/commissioner" element={<Commissioner />} />
        <Route path="/notices" element={<Notices />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/smart-city" element={<SmartCity />} />
        <Route path="/development-works" element={<DevelopmentWorks />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/rti" element={<RTI />} />
        <Route path="/swachh-mission" element={<SwachhMission />} />
        <Route path="/egov" element={<EGov />} />
      </Routes>
    </BrowserRouter>
  )
}
