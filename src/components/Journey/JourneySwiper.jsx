import React, { useEffect, useRef, useState } from "react";
import "./journeySwiper.scss";
import Marquee from "react-fast-marquee";

import journeyImage from "../../assets/image/ourjourney.jpg";
import "intersection-observer";

const JourneySwiper = () => {
  const [scales, setScales] = useState([]);
  const marqueeRef = useRef(null);

  const milestonesMObile = [
    {
      id: 1,
      date: "Dec 2023 - Jan 2024",
      text: "Fund set up",
    },
    {
      id: 2,
      date: "April 2024",
      text: "Received SEBI Registration",
    },
    {
      id: 3,
      date: "June 2024",
      text: "Fund Launch",
    },
    {
      id: 4,
      date: "August 2024",
      text: "Announced First close ",
      text1: "Anchor Investor Micro Labs",
    },
    {
      id: 5,
      date: "October 2024",
      text: "First Investment",
    },
    {
      id: 6,
      date: "November 2024",
      text: "2nd Anchor Investor",
    },
    {
      id: 7,
      date: "December 2024",
      text: "Second Investment",
      text1: "Announced second close",
    },
    {
      id: 8,
      date: "January 2025",
      text: "Third investment",
      text1: "First distribution to unitholders",
    },
    {
      id: 9,
      date: "March 2025",
      text: "Fourth and Fifth investment",
    },
    {
      id: 10,
      date: "April 2025",
      text: "Sixth Investment",
      text1: "Second Distribution to Investors",
    },
  ];
  const milestones = [
    {
      id: 1,
      date: "Dec 2023 - Jan 2024",
      text: "Fund set up",
    },
    {
      id: 2,
      date: "April 2024",
      text: "Received SEBI Registration",
    },
    {
      id: 3,
      date: "June 2024",
      text: "Fund Launch",
    },
    {
      id: 4,
      date: "August 2024",
      text: "Announced First close ",
      text1: "Anchor Investor Micro Labs",
    },
    {
      id: 5,
      date: "October 2024",
      text: "First Investment",
    },
    {
      id: 6,
      date: "November 2024",
      text: "2nd Anchor Investor",
    },
    {
      id: 7,
      date: "December 2024",
      text: "Second Investment",
      text1: "Announced second close",
    },
    {
      id: 8,
      date: "January 2025",
      text: "Third investment",
      text1: "First distribution to unitholders",
    },
    {
      id: 9,
      date: "March 2025",
      text: "Fourth and Fifth investment",
    },
    {
      id: 10,
      date: "April 2025",
      text: "Sixth Investment",
      text1: "Second Distribution to Investors",
    },
    {
      id: 1,
      date: "Dec 2023 - Jan 2024",
      text: "Fund set up",
    },
    {
      id: 2,
      date: "April 2024",
      text: "Received SEBI Registration",
    },
    {
      id: 3,
      date: "June 2024",
      text: "Fund Launch",
    },
    {
      id: 4,
      date: "August 2024",
      text: "Announced First close ",
      text1: "Anchor Investor Micro Labs",
    },
    {
      id: 5,
      date: "October 2024",
      text: "First Investment",
    },
    {
      id: 6,
      date: "November 2024",
      text: "2nd Anchor Investor",
    },
    {
      id: 7,
      date: "December 2024",
      text: "Second Investment",
      text1: "Announced second close",
    },
    {
      id: 8,
      date: "January 2025",
      text: "Third investment",
      text1: "First distribution to unitholders",
    },
    {
      id: 9,
      date: "March 2025",
      text: "Fourth and Fifth investment",
    },
    {
      id: 10,
      date: "April 2025",
      text: "Sixth Investment",
      text1: "Second Distribution to Investors",
    },
    {
      id: 1,
      date: "Dec 2023 - Jan 2024",
      text: "Fund set up",
    },
    {
      id: 2,
      date: "April 2024",
      text: "Received SEBI Registration",
    },
    {
      id: 3,
      date: "June 2024",
      text: "Fund Launch",
    },
    {
      id: 4,
      date: "August 2024",
      text: "Announced First close ",
      text1: "Anchor Investor Micro Labs",
    },
    {
      id: 5,
      date: "October 2024",
      text: "First Investment",
    },
    {
      id: 6,
      date: "November 2024",
      text: "2nd Anchor Investor",
    },
    {
      id: 7,
      date: "December 2024",
      text: "Second Investment",
      text1: "Announced second close",
    },
    {
      id: 8,
      date: "January 2025",
      text: "Third investment",
      text1: "First distribution to unitholders",
    },
    {
      id: 9,
      date: "March 2025",
      text: "Fourth and Fifth investment",
    },
    {
      id: 10,
      date: "April 2025",
      text: "Sixth Investment",
      text1: "Second Distribution to Investors",
    },
    {
      id: 1,
      date: "Dec 2023 - Jan 2024",
      text: "Fund set up",
    },
    {
      id: 2,
      date: "April 2024",
      text: "Received SEBI Registration",
    },
    {
      id: 3,
      date: "June 2024",
      text: "Fund Launch",
    },
    {
      id: 4,
      date: "August 2024",
      text: "Announced First close ",
      text1: "Anchor Investor Micro Labs",
    },
    {
      id: 5,
      date: "October 2024",
      text: "First Investment",
    },
    {
      id: 6,
      date: "November 2024",
      text: "2nd Anchor Investor",
    },
    {
      id: 7,
      date: "December 2024",
      text: "Second Investment",
      text1: "Announced second close",
    },
    {
      id: 8,
      date: "January 2025",
      text: "Third investment",
      text1: "First distribution to unitholders",
    },
    {
      id: 9,
      date: "March 2025",
      text: "Fourth and Fifth investment",
    },
    {
      id: 10,
      date: "April 2025",
      text: "Sixth Investment",
      text1: "Second Distribution to Investors",
    },
    {
      id: 1,
      date: "Dec 2023 - Jan 2024",
      text: "Fund set up",
    },
    {
      id: 2,
      date: "April 2024",
      text: "Received SEBI Registration",
    },
    {
      id: 3,
      date: "June 2024",
      text: "Fund Launch",
    },
    {
      id: 4,
      date: "August 2024",
      text: "Announced First close ",
      text1: "Anchor Investor Micro Labs",
    },
    {
      id: 5,
      date: "October 2024",
      text: "First Investment",
    },
    {
      id: 6,
      date: "November 2024",
      text: "2nd Anchor Investor",
    },
    {
      id: 7,
      date: "December 2024",
      text: "Second Investment",
      text1: "Announced second close",
    },
    {
      id: 8,
      date: "January 2025",
      text: "Third investment",
      text1: "First distribution to unitholders",
    },
    {
      id: 9,
      date: "March 2025",
      text: "Fourth and Fifth investment",
    },
    {
      id: 10,
      date: "April 2025",
      text: "Sixth Investment",
      text1: "Second Distribution to Investors",
    },
    {
      id: 1,
      date: "Dec 2023 - Jan 2024",
      text: "Fund set up",
    },
    {
      id: 2,
      date: "April 2024",
      text: "Received SEBI Registration",
    },
    {
      id: 3,
      date: "June 2024",
      text: "Fund Launch",
    },
    {
      id: 4,
      date: "August 2024",
      text: "Announced First close ",
      text1: "Anchor Investor Micro Labs",
    },
    {
      id: 5,
      date: "October 2024",
      text: "First Investment",
    },
    {
      id: 6,
      date: "November 2024",
      text: "2nd Anchor Investor",
    },
    {
      id: 7,
      date: "December 2024",
      text: "Second Investment",
      text1: "Announced second close",
    },
    {
      id: 8,
      date: "January 2025",
      text: "Third investment",
      text1: "First distribution to unitholders",
    },
    {
      id: 9,
      date: "March 2025",
      text: "Fourth and Fifth investment",
    },
    {
      id: 10,
      date: "April 2025",
      text: "Sixth Investment",
      text1: "Second Distribution to Investors",
    },
    {
      id: 1,
      date: "Dec 2023 - Jan 2024",
      text: "Fund set up",
    },
    {
      id: 2,
      date: "April 2024",
      text: "Received SEBI Registration",
    },
    {
      id: 3,
      date: "June 2024",
      text: "Fund Launch",
    },
    {
      id: 4,
      date: "August 2024",
      text: "Announced First close ",
      text1: "Anchor Investor Micro Labs",
    },
    {
      id: 5,
      date: "October 2024",
      text: "First Investment",
    },
    {
      id: 6,
      date: "November 2024",
      text: "2nd Anchor Investor",
    },
    {
      id: 7,
      date: "December 2024",
      text: "Second Investment",
      text1: "Announced second close",
    },
    {
      id: 8,
      date: "January 2025",
      text: "Third investment",
      text1: "First distribution to unitholders",
    },
    {
      id: 9,
      date: "March 2025",
      text: "Fourth and Fifth investment",
    },
    {
      id: 10,
      date: "April 2025",
      text: "Sixth Investment",
      text1: "Second Distribution to Investors",
    },
    {
      id: 1,
      date: "Dec 2023 - Jan 2024",
      text: "Fund set up",
    },
    {
      id: 2,
      date: "April 2024",
      text: "Received SEBI Registration",
    },
    {
      id: 3,
      date: "June 2024",
      text: "Fund Launch",
    },
    {
      id: 4,
      date: "August 2024",
      text: "Announced First close ",
      text1: "Anchor Investor Micro Labs",
    },
    {
      id: 5,
      date: "October 2024",
      text: "First Investment",
    },
    {
      id: 6,
      date: "November 2024",
      text: "2nd Anchor Investor",
    },
    {
      id: 7,
      date: "December 2024",
      text: "Second Investment",
      text1: "Announced second close",
    },
    {
      id: 8,
      date: "January 2025",
      text: "Third investment",
      text1: "First distribution to unitholders",
    },
    {
      id: 9,
      date: "March 2025",
      text: "Fourth and Fifth investment",
    },
    {
      id: 10,
      date: "April 2025",
      text: "Sixth Investment",
      text1: "Second Distribution to Investors",
    },
    {
      id: 1,
      date: "Dec 2023 - Jan 2024",
      text: "Fund set up",
    },
    {
      id: 2,
      date: "April 2024",
      text: "Received SEBI Registration",
    },
    {
      id: 3,
      date: "June 2024",
      text: "Fund Launch",
    },
    {
      id: 4,
      date: "August 2024",
      text: "Announced First close ",
      text1: "Anchor Investor Micro Labs",
    },
    {
      id: 5,
      date: "October 2024",
      text: "First Investment",
    },
    {
      id: 6,
      date: "November 2024",
      text: "2nd Anchor Investor",
    },
    {
      id: 7,
      date: "December 2024",
      text: "Second Investment",
      text1: "Announced second close",
    },
    {
      id: 8,
      date: "January 2025",
      text: "Third investment",
      text1: "First distribution to unitholders",
    },
    {
      id: 9,
      date: "March 2025",
      text: "Fourth and Fifth investment",
    },
    {
      id: 10,
      date: "April 2025",
      text: "Sixth Investment",
      text1: "Second Distribution to Investors",
    },
    {
      id: 1,
      date: "Dec 2023 - Jan 2024",
      text: "Fund set up",
    },
    {
      id: 2,
      date: "April 2024",
      text: "Received SEBI Registration",
    },
    {
      id: 3,
      date: "June 2024",
      text: "Fund Launch",
    },
    {
      id: 4,
      date: "August 2024",
      text: "Announced First close ",
      text1: "Anchor Investor Micro Labs",
    },
    {
      id: 5,
      date: "October 2024",
      text: "First Investment",
    },
    {
      id: 6,
      date: "November 2024",
      text: "2nd Anchor Investor",
    },
    {
      id: 7,
      date: "December 2024",
      text: "Second Investment",
      text1: "Announced second close",
    },
    {
      id: 8,
      date: "January 2025",
      text: "Third investment",
      text1: "First distribution to unitholders",
    },
    {
      id: 9,
      date: "March 2025",
      text: "Fourth and Fifth investment",
    },
    {
      id: 10,
      date: "April 2025",
      text: "Sixth Investment",
      text1: "Second Distribution to Investors",
    },
    {
      id: 1,
      date: "Dec 2023 - Jan 2024",
      text: "Fund set up",
    },
    {
      id: 2,
      date: "April 2024",
      text: "Received SEBI Registration",
    },
    {
      id: 3,
      date: "June 2024",
      text: "Fund Launch",
    },
    {
      id: 4,
      date: "August 2024",
      text: "Announced First close ",
      text1: "Anchor Investor Micro Labs",
    },
    {
      id: 5,
      date: "October 2024",
      text: "First Investment",
    },
    {
      id: 6,
      date: "November 2024",
      text: "2nd Anchor Investor",
    },
    {
      id: 7,
      date: "December 2024",
      text: "Second Investment",
      text1: "Announced second close",
    },
    {
      id: 8,
      date: "January 2025",
      text: "Third investment",
      text1: "First distribution to unitholders",
    },
    {
      id: 9,
      date: "March 2025",
      text: "Fourth and Fifth investment",
    },
    {
      id: 10,
      date: "April 2025",
      text: "Sixth Investment",
      text1: "Second Distribution to Investors",
    },
    {
      id: 1,
      date: "Dec 2023 - Jan 2024",
      text: "Fund set up",
    },
    {
      id: 2,
      date: "April 2024",
      text: "Received SEBI Registration",
    },
    {
      id: 3,
      date: "June 2024",
      text: "Fund Launch",
    },
    {
      id: 4,
      date: "August 2024",
      text: "Announced First close ",
      text1: "Anchor Investor Micro Labs",
    },
    {
      id: 5,
      date: "October 2024",
      text: "First Investment",
    },
    {
      id: 6,
      date: "November 2024",
      text: "2nd Anchor Investor",
    },
    {
      id: 7,
      date: "December 2024",
      text: "Second Investment",
      text1: "Announced second close",
    },
    {
      id: 8,
      date: "January 2025",
      text: "Third investment",
      text1: "First distribution to unitholders",
    },
    {
      id: 9,
      date: "March 2025",
      text: "Fourth and Fifth investment",
    },
    {
      id: 10,
      date: "April 2025",
      text: "Sixth Investment",
      text1: "Second Distribution to Investors",
    },
    {
      id: 1,
      date: "Dec 2023 - Jan 2024",
      text: "Fund set up",
    },
    {
      id: 2,
      date: "April 2024",
      text: "Received SEBI Registration",
    },
    {
      id: 3,
      date: "June 2024",
      text: "Fund Launch",
    },
    {
      id: 4,
      date: "August 2024",
      text: "Announced First close ",
      text1: "Anchor Investor Micro Labs",
    },
    {
      id: 5,
      date: "October 2024",
      text: "First Investment",
    },
    {
      id: 6,
      date: "November 2024",
      text: "2nd Anchor Investor",
    },
    {
      id: 7,
      date: "December 2024",
      text: "Second Investment",
      text1: "Announced second close",
    },
    {
      id: 8,
      date: "January 2025",
      text: "Third investment",
      text1: "First distribution to unitholders",
    },
    {
      id: 9,
      date: "March 2025",
      text: "Fourth and Fifth investment",
    },
    {
      id: 10,
      date: "April 2025",
      text: "Sixth Investment",
      text1: "Second Distribution to Investors",
    },
    {
      id: 1,
      date: "Dec 2023 - Jan 2024",
      text: "Fund set up",
    },
    {
      id: 2,
      date: "April 2024",
      text: "Received SEBI Registration",
    },
    {
      id: 3,
      date: "June 2024",
      text: "Fund Launch",
    },
    {
      id: 4,
      date: "August 2024",
      text: "Announced First close ",
      text1: "Anchor Investor Micro Labs",
    },
    {
      id: 5,
      date: "October 2024",
      text: "First Investment",
    },
    {
      id: 6,
      date: "November 2024",
      text: "2nd Anchor Investor",
    },
    {
      id: 7,
      date: "December 2024",
      text: "Second Investment",
      text1: "Announced second close",
    },
    {
      id: 8,
      date: "January 2025",
      text: "Third investment",
      text1: "First distribution to unitholders",
    },
    {
      id: 9,
      date: "March 2025",
      text: "Fourth and Fifth investment",
    },
    {
      id: 10,
      date: "April 2025",
      text: "Sixth Investment",
      text1: "Second Distribution to Investors",
    },
    {
      id: 1,
      date: "Dec 2023 - Jan 2024",
      text: "Fund set up",
    },
    {
      id: 2,
      date: "April 2024",
      text: "Received SEBI Registration",
    },
    {
      id: 3,
      date: "June 2024",
      text: "Fund Launch",
    },
    {
      id: 4,
      date: "August 2024",
      text: "Announced First close ",
      text1: "Anchor Investor Micro Labs",
    },
    {
      id: 5,
      date: "October 2024",
      text: "First Investment",
    },
    {
      id: 6,
      date: "November 2024",
      text: "2nd Anchor Investor",
    },
    {
      id: 7,
      date: "December 2024",
      text: "Second Investment",
      text1: "Announced second close",
    },
    {
      id: 8,
      date: "January 2025",
      text: "Third investment",
      text1: "First distribution to unitholders",
    },
    {
      id: 9,
      date: "March 2025",
      text: "Fourth and Fifth investment",
    },
    {
      id: 10,
      date: "April 2025",
      text: "Sixth Investment",
      text1: "Second Distribution to Investors",
    },
    {
      id: 1,
      date: "Dec 2023 - Jan 2024",
      text: "Fund set up",
    },
    {
      id: 2,
      date: "April 2024",
      text: "Received SEBI Registration",
    },
    {
      id: 3,
      date: "June 2024",
      text: "Fund Launch",
    },
    {
      id: 4,
      date: "August 2024",
      text: "Announced First close ",
      text1: "Anchor Investor Micro Labs",
    },
    {
      id: 5,
      date: "October 2024",
      text: "First Investment",
    },
    {
      id: 6,
      date: "November 2024",
      text: "2nd Anchor Investor",
    },
    {
      id: 7,
      date: "December 2024",
      text: "Second Investment",
      text1: "Announced second close",
    },
    {
      id: 8,
      date: "January 2025",
      text: "Third investment",
      text1: "First distribution to unitholders",
    },
    {
      id: 9,
      date: "March 2025",
      text: "Fourth and Fifth investment",
    },
    {
      id: 10,
      date: "April 2025",
      text: "Sixth Investment",
      text1: "Second Distribution to Investors",
    },
  ];

  const trackItemScales = () => {
    const items = marqueeRef.current?.querySelectorAll(".marquee-item") || [];
    const centerX = window.innerWidth / 2;
    const maxScale = 1.2;
    const minScale = 0.8;
    const maxDistance = window.innerWidth / 2;

    const newScales = Array.from(items).map((item) => {
      const rect = item.getBoundingClientRect();
      const itemCenter = rect.left + rect.width / 1;
      const distance = Math.abs(centerX - itemCenter);

      let scale;

      if (itemCenter < centerX) {
        scale = maxScale;
      } else {
        scale = Math.min(
          maxScale,
          minScale + (1 - distance / maxDistance) * (maxScale - minScale)
        );
      }

      return scale.toFixed(2);
    });

    setScales(newScales);
  };

  useEffect(() => {
    const interval = setInterval(trackItemScales, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="journeySwiper">
        <div className="backgroundContainer">
          <img src={journeyImage} alt="" />
        </div>
        <div className="marquee-visible-wrapper">
          <Marquee
            speed={150}
            gradient={false}
            className="marquee-strip"
            loop={0}
            ref={marqueeRef}
          >
            {milestones.map((item, index) => (
              <div
                className="marquee-item"
                style={{
                  transform: `scale(${scales[index] || 1})`,
                  transition: "transform 0.2s ease-out",
                }}
                key={index}
              >
                <div className="circle">
                  <div className="CircleBox">
                    {item.text && <p className="text">{item.text}</p>}
                    <p className="date">{item.date}</p>
                    {item.text1 && <p className="text">{item.text1}</p>}
                  </div>
                </div>
                <div className="line"></div>
                <div className="base">
                  {item.id === 1 && <p className="start">Start</p>}
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
      <div className="mobile-roadmap">
        {milestonesMObile.map((milestone, index) => (
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
  );
};

export default JourneySwiper;
