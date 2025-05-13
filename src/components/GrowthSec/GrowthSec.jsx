import React from "react";
import "./GrowthSec.scss";
import growthImg from "../../assets/image/growthsecimg.png";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const GrowthSec = () => {
  const handleVideoClick = () => {
    setIsPlaying((prev) => !prev);
  };

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div className="homeMainGrowthSecContainer">
      <div className="homeSubGrowthSecContainer">
        <div className="homeSubNestGrowthSecContainer">
          <div className="GrowthSecRightContainer">
            <div className="growthSecSubRightContainer">
              <div className="growthSecSubRightContainerContent">
                <h2 className="growthSecRightContainerHeading1">
                  Beyond Capital
                </h2>

                <h1 className="growthSecRightContainerHeading">
                  A Strategic Growth Partner
                </h1>

                <p className="growthSecRightContainerPara1">
                  Bold ideas deserve bold backing. At the intersection of vision
                  and venture, capital is more than just funding—it’s fuel for
                  transformation. Navigating the ever-evolving landscapes of
                  FinTech, SaaS, B2B, and B2C, we seek the disruptors, the
                  game-changers, and the resilient pioneers reshaping
                  industries. From Logistics to Energy Transition, HealthTech to
                  AgriTech, every investment is a step toward a smarter, more
                  sustainable future.
                </p>
                <p className="growthSecRightContainerPara2">
                  Not just investors, but architects of opportunity—our approach
                  is rooted in technology-driven risk differentiation,
                  leveraging deep market intelligence to redefine growth
                  potential. Startups find more than capital; they find partners
                  in scale, strategy, and success. For investors, sponsors, and
                  fund managers, we unlock untapped potential, bridging ambition
                  with execution. In a world where innovation demands agility,
                  we stand at the forefront, championing those who dare to build
                  what’s next.
                </p>
              </div>
            </div>
          </div>

          <div className="GrowthSecbottomContainer">
            <div className="GrowthSecSubbottomContainer" ref={ref}>
              <div className="bottomContainerbox">
                <div className="bottomContainerSubbox">
                  <h1 className="subbottomContainerHeading">
                    {inView && <CountUp end={280} duration={2} />}+
                  </h1>
                  <h2 className="bottomContainerboxHeading">Cities</h2>
                </div>
              </div>
              <div className="bottomContainerbox">
                <div className="bottomContainerSubbox">
                  <h1 className="subbottomContainerHeading">
                    {inView && <CountUp end={899} duration={2} />}+
                  </h1>
                  <h2 className="bottomContainerboxHeading">Working Project</h2>
                </div>
              </div>
              <div className="bottomContainerbox">
                <div className="bottomContainerSubbox">
                  <h1 className="subbottomContainerHeading">
                    {inView && <CountUp end={349} duration={2} />}+
                  </h1>
                  <h2 className="bottomContainerboxHeading">Happy Clients</h2>
                </div>
              </div>
              <div className="bottomContainerbox">
                <div className="bottomContainerSubbox">
                  <h1 className="subbottomContainerHeading">
                    {inView && <CountUp end={600} duration={2} />}+
                  </h1>
                  <h2 className="bottomContainerboxHeading">Working Staff</h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="homeGrowthSecLeftContainer">
          <div className="homeGrowthSecSubLeftContainer">
            <img src={growthImg} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrowthSec;
