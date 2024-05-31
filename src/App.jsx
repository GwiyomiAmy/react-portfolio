import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'

import Header from "./components/Header"
import Footer from "./components/Footer"

import AboutMePage from "./pages/AboutMePage"
import PortfolioPage from "./pages/PortfolioPage"
import ResumePage from "./pages/ResumePage"
import ContactPage from "./pages/ContactPage"

export default function App() {

  return (
    <div className="viewport">
      <Header />
      
      <div className="card">
        <BrowserRouter>
           <Routes>
             <Route path ="/" element={<AboutMePage />} />
             <Route path ="/portfolio" element={<PortfolioPage />} />
             <Route path ="/contact" element={<ContactPage />} />
             <Route path ="/resume" element={<ResumePage />} />
           </Routes>
         </BrowserRouter> 
      </div>
      <Footer />
    </div>
  )
}