import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="nav-wrapper">
      <div className="nav-content">
        <h1 className="manikiran">ManiKiran</h1>
        <div className={`menu-toggle ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
          <span />
          <span />
          <span />
        </div>
        <ul className={`nav-links ${isOpen ? "active" : ""}`}>
          <li><a className="menu-item" href="#home">Home</a></li>
          <li><a className="menu-item" href="#skills">Skills</a></li>
          <li><a className="menu-item" href="#exp">Experience</a></li>
          <li><a className="menu-item" href="#projects">Projects</a></li>
          <li><a className="menu-item" href="#contact">Contact Me</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
