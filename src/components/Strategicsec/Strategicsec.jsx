import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./Strategicsec.scss";
import strategicBanner from "../../assets/image/homeStrategicGrowthBanner.png";
import img1 from "../../assets/image/tech-driven.svg";
import img2 from "../../assets/image/tech-driven.svg";
import img3 from "../../assets/image/tech-driven.svg";

const Strategicsec = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollY } = useScroll();
  const yBackground = useTransform(scrollY, [0, 300], ["0%", "-30%"]);
  const yText = useTransform(scrollY, [0, 300], ["0%", "-10%"]);

  const Card = ({ img, title, content, isLast, animationProps = {} }) => (
    <motion.div className="growth-card" {...animationProps}>
      <div className="image-wrapper">
        <img src={img} alt={title} />
      </div>
      <h3 className="card-title">{title}</h3>
      <ul className={isLast ? "card-content-last" : "card-content"}>
        {content.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </motion.div>
  );
  return (
    <div className="homeMainStrategicsecContainer">
      <div className="homeSubStrategicsecContainer">
        <div className="StrategicsecBannerContainer">
          <img src={strategicBanner} />

          <motion.div
            className="strategic-growth-content"
            style={isMobile ? {} : { y: yText }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: 0.5 }}
          >
            <h2 className="section-title">
              Startups Need Partners Not Investors
            </h2>
            <p className="section-subtitle">
              Redefining risk with technology, bridging credit gaps, and
              unlocking new financial frontiers through a data-driven,
              differentiated lending approach
            </p>
          </motion.div>

          <div className="StrategicsecCardContainer">
            <div className="StrategicsecSubCardContainer">
              <div className="growth-cards">
                <>
                  <Card
                    img={img1}
                    title="Data-Driven Underwriting for Smarter Decisions"
                    content={[
                      "Data insights are leveraged to assess risk, underwrite based on performance, and determine market fit.",
                      "This ensures that decisions are grounded in real-time performance and long-term potential.",
                    ]}
                    animationProps={{
                      initial: { x: 1000 },
                      whileInView: { opacity: 1, x: 0 },
                      transition: { duration: 1 },
                      viewport: { once: false, amount: 0.1 },
                    }}
                  />
                  <Card
                    img={img2}
                    title="Flexible Capital for Scalable Growth"
                    content={[
                      "Solutions are structured to align with the stage of business’s life-cycle",
                      "Tailored to unique needs, scalable funding is provided, adapting as businesses expand",
                      "Offering financial flexibility to navigate each stage of growth.",
                    ]}
                    animationProps={{
                      initial: { x: 800 },
                      whileInView: { opacity: 1, x: 0 },
                      transition: { duration: 1, delay: 0.2 },
                      viewport: { once: false, amount: 0.1 },
                    }}
                  />
                  <Card
                    img={img3}
                    title="Strategic Support Beyond Funding"
                    content={[
                      "The approach goes beyond funding, focusing on investing in long-term success.",
                      "The team actively tracks progress and, assists alignment with growth plans, and",
                      "Facilitates access to new opportunities by building linkages",
                    ]}
                    isLast
                    animationProps={{
                      initial: { x: 400 },
                      whileInView: { opacity: 1, x: 0 },
                      transition: { duration: 1, delay: 0.4 },
                      viewport: { once: false, amount: 0.1 },
                    }}
                  />
                </>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Strategicsec;
