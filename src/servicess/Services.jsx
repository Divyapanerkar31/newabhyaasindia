import React from "react";
import "../styles/Services.css";
import { FaGlobe, FaMobileAlt, FaPencilRuler, FaLaptopCode, FaShoppingCart, FaCube } from "react-icons/fa";

export default function ServicesPage() {
  
  // SERVICES DATA
  const services = [
    {
      icon: <FaGlobe />,
      title: "Website Development",
      desc: "We build fast, secure, and modern websites tailored to your business needs. Our team uses the latest technologies for high performance and clean UI."
    },
    {
      icon: <FaMobileAlt />,
      title: "App Development",
      desc: "We create smooth, user-friendly mobile apps for both Android and iOS. Our apps are optimized for speed, design, and long-term scalability."
    },
    {
      icon: <FaPencilRuler />,
      title: "UI/UX & Figma Design",
      desc: "We design clean, modern, and intuitive interfaces using Figma. User-focused layouts ensure better engagement and smooth experience."
    },
    {
      icon: <FaLaptopCode />,
      title: "Software Development",
      desc: "We develop custom software that simplifies processes and boosts productivity. Our solutions are secure, scalable, and built using industry standards."
    },
    {
      icon: <FaShoppingCart />,
      title: "E-commerce Development",
      desc: "We build powerful online stores that convert visitors into customers. Fast checkout, secure payments, and easy product management included."
    },
    {
      icon: <FaCube />,
      title: "Product Design",
      desc: "We design digital products that are visually modern and highly functional. Our approach focuses on user needs, usability, and seamless flow."
    }
  ];

  // DETAILED SERVICES
  const detailData = [
    { title: "Website Development", list: ["Fast loading websites", "Responsive design", "Custom development"], img: "web.jpg" },
    { title: "App Development", list: ["Android & iOS apps", "Smooth UI", "High performance"], img: "app.jpg" },
    { title: "UI/UX & Figma Design", list: ["Wire framing", "Prototyping", "Design System"], img: "figma.jpg" },
    { title: "Software Development", list: ["Custom solutions", "Automation", "Security features"], img: "soft.jpg" },
    { title: "Cloud & DevOps", list: ["Cloud setup", "CI/CD automation", "Monitoring"], img: "cloud.jpg" },
    { title: "Product Design", list: ["Concept to prototype", "User journey", "UI system"], img: "p.jpg" },
  ];

  // PORTFOLIO
  const projects = [
    { img: "p1.png", title: "Website" },
    { img: "p2.png", title: "App" },
    { img: "p3.png", title: "Dashboard" }
  ];

  return (
    <div>

      {/* ================= SERVICES ================= */}
      <section className="services-section">
        <h1 className="services-title">Services We Offer</h1>

        <div className="services-container">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="icon-circle">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="why-section">
        <h2 className="why-title">Why Choose Us?</h2>
        <div className="why-line"></div>

        <div className="why-row">
          <div className="why-text">
            <p>
              We deliver high-quality digital solutions with a strong focus on user
              experience, performance, and reliability. Our team of experts and innovation
              to help your business grow faster.
            </p>
          </div>

          <div className="why-image-box">
            <img src="why.png" alt="Why choose us" className="why-main-img" />
          </div>
        </div>
      </section>

      {/* ================= DETAILED SERVICES ================= */}
      <section className="detail-section">
        <h2 className="detail-title">Detailed Services</h2>

        <div className="detail-grid">
          {detailData.map((service, index) => (
            <div className="detail-card" key={index}>
              <h3 className="detail-heading">{service.title}</h3>

              <ul>
                {service.list.map((item, i) => (
                  <li key={i}>{i + 1}. {item}</li>
                ))}
              </ul>

              <img src={service.img} alt="" className="detail-img" />
            </div>
          ))}
        </div>
      </section>

      {/* ================= PORTFOLIO ================= */}
      <section className="portfolio-section">
        <h2 className="portfolio-title">Portfolio</h2>

        <div className="portfolio-grid">
          <div className="portfolio-card full-width">
            <img src={projects[0].img} className="portfolio-img" alt="" />
            <p className="portfolio-name">{projects[0].title}</p>
          </div>

          <div className="portfolio-card">
            <img src={projects[1].img} className="portfolio-img" alt="" />
            <p className="portfolio-name">{projects[1].title}</p>
          </div>

          <div className="portfolio-card">
            <img src={projects[2].img} className="portfolio-img" alt="" />
            <p className="portfolio-name">{projects[2].title}</p>
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section className="contact-section">
        <h2 className="contact-title">Contact Us</h2>

        <div className="contact-details">
          <p>📧 <strong>Email:</strong> <strong>yourmail@gmail.com</strong></p>
          <p>📞 <strong>Phone:</strong> <strong>+919876543210</strong></p>
          <p>📍 <strong>Location:</strong> <strong>Hitech City, Madhapur,<br/>Hyderabad, Telangana, India</strong></p>
        </div>

        <button className="contact-bt">Contact</button>
      </section>
    </div>
  );
}
