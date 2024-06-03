import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
 
import Navigation from "./Navigation"

export default function Header() {

  return (
    
    <div>
      <h1 className="flex">Amy Jenkins</h1> 
      <Navigation />
    </div>
  );
}