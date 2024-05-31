import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
 
import Navbar from "./Navbar"

export default function Header() {

  return (
    <div>
      <h1>Amy Jenkins</h1>
      <Navbar />
    </div>
  );
}