import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

export default function Footer() {

  return (
    <div>
      <p className="read-the-docs">
        <a href="https://github.com/GwiyomiAmy">
          <span className="footer-link">GitHub </span>
        </a>
        <a href="">
          <span className="footer-link"> LinkedIn </span>
        </a>
        <a href="https://stackoverflow.com/users/25384508/gwiyomiamy">
          <span className="footer-link"> Stack Overflow</span>
        </a>
         
      </p>
    </div>
  );
}