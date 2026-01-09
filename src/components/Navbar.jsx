
import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container flex">
        {/* Logo */}
        <div className="logo-group">
           <div className="nav-cloud">
            <svg viewBox="0 0 64 64" aria-hidden="true">
              <path d="M44.8 30.2A12.8 12.8 0 0 0 20 32a9.6 9.6 0 0 0 .8 19.2h24A8 8 0 0 0 44.8 30.2Z"/>
            </svg>
          </div>
          <span className="logo-text">Soft Atlas</span>
        </div>

        {/* Navigation links */}
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/atlas">Atlas</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}
