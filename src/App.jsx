import { BrowserRouter, Routes, Route } from 'react-router-dom'
import useHubspotTracking from './hooks/useHubspotTracking'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Referrals from './pages/Referrals'
import Careers from './pages/Careers'
import Contact from './pages/Contact'

function AppContent() {
  useHubspotTracking()
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/"           element={<Home />}      />
        <Route path="/about"      element={<About />}     />
        <Route path="/services"   element={<Services />}  />
        <Route path="/referrals"  element={<Referrals />} />
        <Route path="/careers"    element={<Careers />}   />
        <Route path="/contact"    element={<Contact />}   />
      </Routes>
      <WhatsAppButton />
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}
