import React, { useState, useEffect, useRef } from "react";
import { FaBars, FaTwitter } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav>
      <div className="nav-center">
      <div className="nav-header">
        <h1>LOGO</h1>
        <button className="nav-toggle">
          <FaBars />
        </button>       
      </div>
      <div className="links-container show-container"></div>
      <ul className="social-icons"></ul>
      </div>
    </nav>
  );
} 

export default Navbar;