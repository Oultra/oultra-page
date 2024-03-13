import { HashRouter as Router, Routes, Route } from "react-router-dom"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"

import Home from "./pages/Home/Home"
import Navbar from "./components/Nav"
import Services from "./pages/Services/Services"
import Contact from "./pages/Contact/Contact"
import Web from "./pages/Web/Web"
import ErrorPage from "./pages/Error404/Error404"
import SobreNosotros from "./pages/SobreNosotros/SobreNosotros"
import Footer from "./components/Footer"


function App() {

  return (
    <>
      <Analytics />
      <SpeedInsights/>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicios" element={<Services/>} />
          <Route path="/contacto" element={<Contact/>} />
          <Route path="/sobre-nosotros" element={<SobreNosotros/>} />
          <Route path="/web" element={ <Web/> } />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
