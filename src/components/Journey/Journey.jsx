import React from "react";
import { useEffect, useState } from "react";
import "./Journey.scss";
import journeyImage from "../../assets/image/journey-background.png";
import journeyImage2 from "../../assets/image/journeyImage2.png";
import { motion } from "framer-motion";

const milestones = [
  {
    date: "Dec 2023 - Jan 2024",
    text: "Fund set up",
    size: "large",
  },
  {
    date: "April 2024",
    text: "Received SEBI Registration",
    size: "medium",
  },
  {
    date: "June 2024",
    text: "Fund Launch",
    size: "medium",
  },
  {
    date: "August 2024",
    text: "Announced First close ",
    text1: "Anchor Investor Micro Labs",
    size: "medium",
  },
  {
    date: "October 2024",
    text: "First Investment",
    size: "medium",
  },
  {
    date: "Novemver 2024",
    text: "2nd Anchor Investor",
    size: "medium",
  },
  {
    date: "December 2024",
    text: "Second Investment",
    text1: "Announced second close",
    size: "medium",
  },
  {
    date: "January 2025",
    text: "Third investment",
    text1: "First distribution to unitholders",
    size: "medium",
  },
];
const Journey = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex < milestones.length - 1 ? prevIndex + 1 : 0
      );
    }, 7000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <>
        <div className="journey-section">
          <div className="journey-backgorund-section">
            <img src={journeyImage} alt="Background" />
            <img
              src={journeyImage2}
              alt=" "
              className="journey-backgorund-section-2"
            />
          </div>
          <motion.div
            className="milestone-container"
            animate={{ x: [0, "-100%"] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          >
            <div className="milestone-container">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  className={`milestone ${milestone.size}`}
                  animate={{ scale: index === activeIndex ? 1.3 : 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className={`circle ${milestone.size}`}>
                    <p className="date">{milestone.date}</p>
                    <p className="text">{milestone.text}</p>
                  </div>
                  <div className={`line ${milestone.size}`}></div>
                  <div className={`base ${milestone.size}`}></div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        <div className="mobile-roadmap">
          {milestones.map((milestone, index) => (
            <div className="roadmap-item" key={index}>
              <div className="roadmap-dot"></div>
              <div className="roadmap-content">
                <h4>{milestone.date}</h4>
                <p>{milestone.text}</p>
              </div>
            </div>
          ))}
        </div>
      </>
    </div>
  );
};

export default Journey;
