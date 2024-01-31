import { HashRouter as Router, Routes, Route } from "react-router-dom"

import Home from "./pages/Home/Home"
import Navbar from "./components/Nav"

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
