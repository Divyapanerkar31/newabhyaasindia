import React from "react";
import "../styles/CaseStudies.css";


export default function CaseStudies() {
  return (
    <div className="case-container">

      {/* ---- TOP HEADING ---- */}
      <div className="case-header">
        <h1>Case Studies</h1>
        <p>Real results we’ve delivered for our clients.</p>
      </div>

      {/* ---- TOP 3 CARDS ---- */}
      <div className="case-top-cards">

        <div className="case-card">
          <img src="10.png" alt="case" />
          <h4>UI/UX</h4>
          <h3>How we increased conversions by 40%</h3>
          <p>
            We redesigned the UK of the platform and significantly 
improved the conversion rate.
          </p>
          <a href="#">View Case study →</a>
        </div>

        <div className="case-card">
          <img src="11.png" alt="case" />
          <h4>App</h4>
          <h3>Redesigning a mobile app</h3>
          <p>
           We updated the Ul of the app for a more infultive experience.
          </p>
          <a href="#">View Case study →</a>
        </div>

        <div className="case-card">
          <img src="12.png" alt="case" />
          <h4>Web</h4>
          <h3>Redesigning the website for better SEO</h3>
          <p>
           A modern website redesign that improved search engine ralinings.
          </p>
          <a href="#">View Case study →</a>
        </div>

      </div>

      <hr />

      {/* ---- FEATURED CASE ---- */}
      <div className="featured-section">

        <div className="featured-left">
          <img
            src="13.png"
            alt="featured"
          />
        </div>

        <div className="featured-right">
          <p className="tag">Featured Case Study</p>
          <h2>Increasing sales for an<br></br> e-commerce store</h2>
          <p className="desc">
            A comprehensive approach that helped increase sales by 62%.
          </p>
          <a className="view-btn" href="#">view Case study →</a>
        </div>

      </div>

      {/* ---- FILTER BUTTONS ---- */}
      <div className="filters">
        <button>All</button>
        <button>U/UK</button>
        <button>Branding</button>
        <button>Website</button>
        <button>Mobile App</button>
      </div>

      {/* ---- BOTTOM CARDS ---- */}
      <div className="bottom-cards">

        <div className="bottom-card">
          <h4>U/UK</h4>
          <h3>Improving user engagement</h3>
          <p>Redesigned the app's user interface to improve user enga-gement.</p>
        </div>

        <div className="bottom-card">
          <h4>Branding</h4>
          <h3>Rebranding of a tech company</h3>
          <p>A fresh new brand identify that reconated with the target audience.</p>
        </div>

        <div className="bottom-card">
          <h4>Website</h4>
          <h3>Developing a responsive website</h3>
          <p>A user-friendly mobile-responsive website with a modern design.
</p>
        </div>

      </div>

      {/* --- CTA SECTION --- */}
      <div className="cta-section">
        <h3>Want to work with us?</h3>
        <button className="cta-btn">Start a Project →</button>
      </div>

    </div>
  );
}