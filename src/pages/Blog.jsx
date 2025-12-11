import React, { useState } from "react";
import "../styles/Blog.css";

const categoriesData = [
  {
    img: "1.png",
    category: "Design",
    heading: "UX review presentations",
    text: "How do you create compelling presentations that wow your colleagues and impress your managers?",
    author: "Olivia Rhye",
    date: "20 Jan 2022",
    avatar: "1.1.png"
  },
  {
    img: "2.png",
    category: "Product",
    heading: "Migrating to Linear 101",
    text: "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.",
    author: "Phoenix Baker",
    date: "19 Jan 2022",
    avatar: "1.2.png"
  },
  {
    img: "3.png",
    category: "Software Engineering",
    heading: "Building your API Stack",
    text: "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
    author: "Lana Steiner",
    date: "18 Jan 2022",
    avatar: "1.3.png"
  },
  {
    img: "4.png",
    category: "Management",
    heading: "Bill Walsh leadership lessons",
    text: "Secrets of transforming a 2-14 team into a Super Bowl winning Dynasty.",
    author: "Alec Whitten",
    date: "17 Jan 2022",
    avatar: "1.4.png"
  },
  {
    img: "5.png",
    category: "Product",
    heading: "PM mental models",
    text: "Mental models are simple expressions of complex processes or relationships.",
    author: "Demi Wilkinson",
    date: "16 Jan 2022",
    avatar: "1.5.png"
  },
  {
    img: "6.png",
    category: "Design",
    heading: "What is Wireframing?",
    text: "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
    author: "Candice Wu",
    date: "15 Jan 2022",
    avatar: "1.6.png"
  },
  {
    img: "7.png",
    category: "Design",
    heading: "How collaboration makes us better designers",
    text: "Collaboration strengthens teams and improves individual designs.",
    author: "Natali Craig",
    date: "14 Jan 2022",
    avatar: "1.7.png"
  },
  {
    img: "8.png",
    category: "Product",
    heading: "Our top 10 Javascript frameworks to use",
    text: "JavaScript frameworks make development easier with extensive features.",
    author: "Drew Cano",
    date: "13 Jan 2022",
    avatar: "1.8.png"
  },
  {
    img: "9.png",
    category: "Customer",
    heading: "Podcast: Creating a better CX Community",
    text: "Starting a community doesn’t need to be complicated, but how do you get started?",
    author: "Orlando Diggs",
    date: "12 Jan 2024",
    avatar: "1.9.png"
  }
];

export default function BlogAccordion() {
  const [openCard, setOpenCard] = useState(null); // only one open at a time

  const toggleCard = (i) => {
    setOpenCard(openCard === i ? null : i);
  };

  return (
    <div className="blog-wrapper">
      <div className="blog-accordion-header">
        <div className="header-text">
          <h3 className="blog-title">Our Blog</h3>
          <h1 className="blog-heading">Resources And Insights</h1>
        </div>
      </div>

      <div className="cards">
        {categoriesData.map((item, i) => (
          <div className="card" key={i}>
            {/* IMAGE + HEADING ALWAYS VISIBLE */}
            <img src={item.img} alt="" className="card-img" />
            <div className="card-body">
              <div className="card-header" onClick={() => toggleCard(i)}>
                <p className="card-cat">{item.category}</p>
                <h2 className="card-title">
                  {item.heading}
                  <span className={`triangle small-triangle ${openCard === i ? "rotate" : ""}`}>
                    ▼
                  </span>
                </h2>
              </div>

              {/* ONLY OPENED CARD CONTENT */}
              {openCard === i && (
                <>
                  <p className="card-text">{item.text}</p>
                  <div className="card-footer">
                    <div className="author-box">
                      <img src={item.avatar} className="author-img" alt="" />
                      <p className="author">{item.author}</p>
                    </div>
                    <p className="date">{item.date}</p>
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}