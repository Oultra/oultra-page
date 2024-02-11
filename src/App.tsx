import { HashRouter as Router, Routes, Route } from "react-router-dom"

import Home from "./pages/Home/Home"
import Navbar from "./components/Nav"
import Services from "./pages/Services/Services"

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicios" element={<Services/>} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
