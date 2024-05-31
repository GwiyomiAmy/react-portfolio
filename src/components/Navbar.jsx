import React from "react"
import { useState, useEffect } from "react"

import AboutMePage from "../pages/AboutMePage"
import PortfolioPage from "../pages/PortfolioPage"
import ContactPage from "../pages/ContactPage"
import ResumePage from "../pages/ResumePage"

const styles = { 
   ul: {
     listStyleType: "none",
     color: "white"
   }
 }

export default function Navbar() {

  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'AboutMe') {
      return <AboutMePage />;
    }
    if (currentPage === 'Contact') {
      return <ContactPage />;
    }
    if (currentPage === 'Portfolio') {
      return <PortfolioPage />;
    }
    return <ResumePage />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
   <div>
      <ul style={styles.ul}>
          <li className="d-flex">
            <a href="/" className="d-block px-2 text-light text-decoration-none">AboutMe </a>
            <a href="/contact" className="d-block px-2 text-light text-decoration-none"> Contact </a>
            <a href="/portfolio" className="d-block px-2 text-light text-decoration-none"> Portfolio </a>
            <a href="/resume" className="d-block px-2 text-light text-decoration-none"> Resume</a>
          </li>
        </ul>
         
   </div>
 );
}