import Navbar from "./Navbar"
import Work from "./pages/Work"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Hobbify from "./pages/Hobbify"
import { Route, Routes } from "react-router-dom"


function App() {
  return (
    <>
       <Navbar />
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/hobbify" element={<Hobbify />} />
      </Routes>
    </>
  )
}

export default App

