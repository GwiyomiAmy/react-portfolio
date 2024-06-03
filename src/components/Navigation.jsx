import React from "react"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react"

import AboutMePage from "../pages/AboutMePage"
import PortfolioPage from "../pages/PortfolioPage"
import ContactPage from "../pages/ContactPage"
import ResumePage from "../pages/ResumePage"


function Navigation() {

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
  <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav id="sidebar">
          <NavLink to="/">About Me   |</NavLink>
          <NavLink to="/contact">   Contact   |</NavLink>
          <NavLink to="/portfolio">   Portfolio   |</NavLink>
          <NavLink to="/resume">   Resume</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);
}

export default Navigation;