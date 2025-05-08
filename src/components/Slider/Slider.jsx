import React, { useState, useRef } from "react";
import "./Slider.scss";
import { motion } from "framer-motion";
import SliderLib from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import sliderIconImg from "../../assets/image/slider_icon.svg";
import connecticon from "../../assets/image/cil_arrow-left.svg";
import mainDirectorImg from "../../assets/image/directors 1.png";
import img2 from "../../assets/image/anurag-basu-home-img.png";
import img3 from "../../assets/image/Ashish-Gala-homeimg.png";
import img4 from "../../assets/image/kunal-wadhwa-home-img.png";
import slider_company1 from "../../assets/temp_image/image 17.png";
import slider_company2 from "../../assets/temp_image/image (7).png";
import slider_company3 from "../../assets/temp_image/image 17 (1).png";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";

const teamMembers = [
  {
    name: (
      <>
        Anurag Tripathi <br />
        Ashish Gala <br />
        Kunal Wadhwa
      </>
    ),
    image: mainDirectorImg,
    title: (
      <div className="title-container">
        <span className="title-bold">Ownership Rooted in Vision</span>
      </div>
    ),
  },
  {
    name: "Anurag Tripathi",
    image: img2,
    title: "Co-founder and Managing Partner",
    extraImage: slider_company1,
  },
  {
    name: "Ashish Gala",
    image: img3,
    title: "Co-founder and Managing Partner",
    extraImage: slider_company2,
  },
  {
    name: "Kunal Wadhwa",
    image: img4,
    title: "Co-founder and Managing Partner",
    extraImage: slider_company3,
  },
];
const listItems = [
  {
    label: "Founder and Management",
    tooltip:
      "Founders with visionary leadership, resilience, and adaptability, along with a proven track record of building strong teams and scalable businesses.",
  },
  {
    label: "Stage",
    tooltip:
      "Companies in the growth stage or relatively mature phase, well-positioned forto scale, and ideally backed by institutional investors.",
  },
  {
    label: "Unit Economics",
    tooltip:
      "Strong unit economics with a demonstrated business model with a clear path to profitability.",
  },
  {
    label: "Liquidity Profile",
    tooltip:
      "Sustenance dry powder in hand with additional impetus expected through funding",
  },
  {
    label: "ESG Alignment",
    tooltip:
      "Businesses that are building sustainable and scalable models, with measurable impact aligned to environmental, social, and/or governance priorities.",
  },
];
const alternateImages = {
  1: img2,
  2: img3,
  3: img4,
};

// Tooltip with custom width
const CustomWidthTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    maxWidth: 300,
  },
});
const Slider = () => {
  const [selectedMember, setSelectedMember] = useState(teamMembers[0]);
  const [backgroundImage, setBackgroundImage] = useState(mainDirectorImg);
  const sliderRef = useRef(null);

  const handleSlideChange = (index) => {
    setSelectedMember(teamMembers[index]);
    setBackgroundImage(alternateImages[index] || mainDirectorImg);

    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
    }
  };

  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    draggable: false,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 1000,
  };

  const listVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.2, duration: 0.5 },
    }),
  };
  return (
    <div className="mainSliderContainer">
      <div className="sliderContainer1">
        <div className="topContainer">
          <div className="topLeftContainer">
            <div className="topLeftContainer1">
              <SliderLib {...settings} ref={sliderRef} className="click-slide">
                {teamMembers.map((member, index) => (
                  <div
                    key={index}
                    onClick={() => handleSlideChange(index)}
                    className={`clickable-slide ${
                      selectedMember === member ? "active" : ""
                    }`}
                  >
                    <span>
                      <img src={member.image} alt={`Member ${index}`} />
                    </span>
                  </div>
                ))}
              </SliderLib>
            </div>
            <div className="topLeftContainer2">
              <h2>{selectedMember.name}</h2>
              {typeof selectedMember.title === "string" ? (
                <p>{selectedMember.title}</p>
              ) : (
                selectedMember.title
              )}
              {selectedMember.extraImage && (
                <img
                  src={selectedMember.extraImage}
                  alt={`${selectedMember.name} extra`}
                  className="extra-image"
                />
              )}
            </div>
          </div>
          <div className="topRightContainer">
            <motion.div className="mainDirectorImg" style={{}}>
              <img src={backgroundImage} alt="" />
            </motion.div>
          </div>
        </div>

        <div className="bottomContainer">
          <div className="bottomLeftContainer">
            {listItems.map((item, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                variants={listVariants}
                viewport={{ once: false, amount: 0.3 }}
                className="criteria-item"
              >
                {item.label}
                <CustomWidthTooltip title={item.tooltip} placement="right">
                  <span
                    className="list-icon"
                    style={{ cursor: "pointer", display: "inline-block" }}
                  >
                    <img src={sliderIconImg} alt="icon" />
                  </span>
                </CustomWidthTooltip>
              </motion.div>
            ))}
          </div>

          <div className="bottomRightContainer">
            <div className="bottomRightContainer1">
              <h2>Investing in lasting value</h2>
              <p>
                Redefining risk with technology, bridging credit gaps, and
                unlocking new financial frontiers through a data-driven,
                differentiated lending approach—shaping the future of the new
                credit economy.
              </p>
            </div>
            <div className="bottomRightContainer2">
              <div className="bottomButtonArrow">
                <button className="connectBtn">
                  Connect Now
                  <img src={connecticon} alt="Connect Now" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
