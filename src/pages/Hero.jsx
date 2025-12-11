import React from "react";
import "../styles/Hero.css";

// FontAwesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faMobileAlt, faLaptopCode, faBug } from "@fortawesome/free-solid-svg-icons";

// React Icons
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaArrowLeft, FaArrowRight as FaRight } from "react-icons/fa";

export default function Hero() {
  return (
    <div className="page">

      {/* ------------------ HERO SECTION ------------------ */}
      <section id="home" className="hero">

        <div className="circle circle-top"></div>
        <div className="circle circle-bottom"></div>

        <div className="hero-content">
          <div className="hero-left">
            <h1 className="small-title">
              Great <span>Product</span> Is
            </h1>

            <h1 className="big-title">
              built by great <span>teams</span>
            </h1>

            <p className="hero-text">
              We help build and manage a team of world-class developers to bring your vision to life.
            </p>

            <button className="get-btn">Let’s get Started!</button>
          </div>
         

          <div className="hero-right">
            <img className="hero-image" src="/home.jpg" alt="Team" />
          </div>
        </div>
      </section>
  {/* ------------------About  ------------------ */}
       <section className="about-section" id="about">

      <div className="about-container">

        {/* LEFT IMAGE */}
        <div className="about-left">
          <img
            src="/about.jpg"
            alt="About Abhyaas India"
            className="about-img"
          />
        </div>

        {/* RIGHT TEXT */}
        <div className="about-right">
          <h2 className="about-title">About Us</h2>

          <p className="about-description">
            Abhyaas India is a leading digital solutions provider focused on
            transforming ideas into powerful results. We deliver high-quality
            development, design, branding, and marketing services that help
            businesses grow and perform better.
          </p>

          <div className="about-points">
            <p>✔ 10+ Years of Experience</p>
            <p>✔ 100+ Successful Projects</p>
            <p>✔ Customer-centric Approach</p>
            <p>✔ Team of Skilled Professionals</p>
          </div>

          <button className="about-btn">Know More</button>
        </div>
      </div>

    </section>

      {/* ------------------ SERVICES SECTION ------------------ */}
      <section id="services" className="services">

        <h2>Services We Offer</h2>

        <div className="service-boxes">

          <div className="box">
            <div className="icon">
              <FontAwesomeIcon icon={faMobileAlt} />
            </div>
            <h3>Mobile App Development</h3>
            <p className="custom-para">
              We build high-performance Android & iOS apps with modern UI/UX and robust backend integration.
            </p>
          </div>

          <div className="box">
            <div className="icon">
              <FontAwesomeIcon icon={faLaptopCode} />
            </div>
            <h3>Web Design & Development</h3>
            <p>
              Modern, responsive and fast websites built to match your brand identity and business goals.
            </p>
          </div>

          <div className="box">
            <div className="icon">
              <FontAwesomeIcon icon={faBug} />
            </div>
            <h3>Software Testing Service</h3>
            <p className="custom-para">
              We ensure your product is bug-free with full functional, UI/UX, performance and security testing.
            </p>
          </div>

        </div>

        <div className="big-circle"></div>
      </section>

      {/* ------------------ COMPANIES SECTION ------------------ */}
      <section id="companies" className="companies">

        <div className="circle circle-left"></div>
        <div className="circle circle-right"></div>

        <div className="companies-left">
          <h1 className="line"></h1>

          <h2 className="text">Leading Companies trust us</h2>
          <span className="text-bold">to develop software</span>

          <div className="companies-description">
            <p>We add development capacity to tech teams.</p>
            <p>We support the complete lifecycle of your project.</p>
            <p>We guarantee successful project delivery.</p>
          </div>

          <a className="see-more">See more Informations →</a>
          <h1 className="line"></h1>
        </div>

        <div className="companies-right">
          <img src="/companies.webp" alt="Office" />
        </div>

        <div className="icon-circles">
          <div className="icon-box">
            <FaArrowLeft />
          </div>
          <div className="icon-box">
            <FaRight />
          </div>
        </div>

      </section>

      {/* ------------------ FOOTER ------------------ */}
      <footer className="footer">
        <div className="footer-container">

          <div className="footer-box">
            <h3>Address</h3>
            <p>Hi-Tech City, Madhapur,<br />Hyderabad – 500081</p>
            <p>+91 8008394564</p>
            <p>support@abhyasindia.com</p>
          </div>

          <div className="footer-box">
            <h3>Navigation</h3>
            <p>Home</p>
            <p>Products</p>
            <p>Services</p>
            <p>About</p>
          </div>

          <div className="footer-box">
            <h3>Features</h3>
            <p>We're Hiring</p>
            <p>Help</p>
          </div>

          <div className="footer-box">
            <h3>Cookies</h3>
            <p>Data Collect</p>
            <p>Terms</p>
            <p>Privacy</p>
          </div>

          <div className="footer-box">
            <h3>Connect With Us</h3>

            <div className="footer-icons">
              <FaFacebook />
              <FaInstagram />
              <FaTwitter />
              <FaLinkedin />
            </div>

            <div className="newsletter">
              <p>Subscribe to Our Newsletter</p>
              <div className="newsletter-row">
                <input type="text" placeholder="Enter your email" />
                <button>Subscribe</button>
              </div>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <span>© AbhyaasIndia. All rights reserved</span>
          <span className="footer-right">Terms & Conditions</span>
        </div>
      </footer>

    </div>
  );
}
