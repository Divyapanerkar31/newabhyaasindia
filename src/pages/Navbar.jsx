import { Link as RouterLink } from "react-router-dom";
import { useState } from "react";
import "../styles/Navbar.css";
import { Link } from "react-scroll";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">

      {/* Logo + Text */}
      <div className="logo-section">
        <img src="/logo.png" alt="Logo" className="logo-img" />

        <div className="name-container">
          <div className="name-line">
            <span className="abhyaas-text">ABHYAAS</span>
            <span className="india-text">INDIA</span>
          </div>
          <span className="tagline-text">PRACTICE | PROFICIENCY | PERFECTION</span>
        </div>
      </div>

      {/* Menu */}
      <ul className={`nav-links ${open ? "open" : ""}`}>
        <li>
          <Link to="home" smooth={true} duration={500} offset={-80}>
            Home
          </Link>
        </li>

        <li>
          <Link to="about" smooth={true} duration={500} offset={-80}>
            About
          </Link>
        </li>

        <li>
          <RouterLink to="/services">
            Services
          </RouterLink>
        </li>

        <li>
          <RouterLink to="/CaseStudies">
            CaseStudies
          </RouterLink>
        </li>

        <li>
          <RouterLink to="/Blog">
            Blog
          </RouterLink>
        </li>

        <li>Hire</li>
      </ul>

      {/* Contact Button */}
      <button className="contact-btn">Contact</button>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={() => setOpen(!open)}>
        <div></div>
        <div></div>
        <div></div>
      </div>

    </nav>
  );
}
