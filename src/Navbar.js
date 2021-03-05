import React, { useState, useEffect, useRef } from "react";
import { FaBars, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import { links, social } from './data';

const Navbar = () => {
  return (
    <nav>
      <div className="nav-center">
      <div className="nav-header">
        <h3 className="logo">LOGO</h3>
        <button className="nav-toggle">
          <FaBars />
        </button>       
      </div>
      <div className="links-container show-container">
        <ul className="links">
          {links.map((link)=> {
            const {id, url, text} = link;
            return <li key={id}>
              <a href={url}>{text}</a>
            </li>
          })}
        </ul>
      </div>
      <ul className="social-icons">
        {social.map((socialIcon)=> {
          const {id, url, icon} = socialIcon;
          return <li key={id}>
            <a href={url}>{icon}</a>
          </li>
        })}
      </ul>
      </div>
    </nav>
  );
} 

export default Navbar;