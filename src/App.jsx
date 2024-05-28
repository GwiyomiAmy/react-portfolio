import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import AboutMePage from "./pages/AboutMePage"
import PortfolioPage from "./pages/PortfolioPage"
import ContactPage from "./pages/ContactPage"
import ResumePage from "./pages/ResumePage"

import "/node_modules/bootstrap/dist/css/bootstrap.min.css"

export default function App(){
  return(
    <div className="viewport">
      <header>
        <nav>
          <h1>Amy Jenkins</h1>
          <BrowserRouter>
            <Routes>
              <Route path ="/" element={<AboutMe />} />
              <Route path ="/portfolio" element={<Portfolio />} />
              <Route path ="/contact" element={<Contact />} />
              <Route path ="/resume" element={<Resume />} />
            </Routes>
          </BrowserRouter>
        </nav>
      </header>

      



      <footer>

      </footer>
    </div>
  )
}