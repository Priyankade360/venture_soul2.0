import React, { useEffect, useState } from "react";
import "./Homebanner.scss";
import Img1 from "../../assets/image/banner-img-1.png";
import Img2 from "../../assets/image/banner-img-2.png";
import leftArrow from "../../assets/image/leftArrow.svg";
import rightArrow from "../../assets/image/rightArrow.svg";
import card_underline from "../../assets/image/card_underline.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const videoSrc =
  "https://res.cloudinary.com/dj9xxvera/video/upload/v1746164821/iStock-1315346872_qjf5qp.mp4";

const Homebanner = () => {
  const [textIndex, setTextIndex] = useState(0);

  const content = [
    {
      title1: "Debt Partners ",
      title2: "With A Difference.",
      subtitle:
        "India focused SEBI registered Cat-II AIF focusing on flexible and structured solutions to the relatively mature New Economy Companies, along with providing growth. ",
      description: "Supporting founders driving the next phase of growth",
    },
    {
      title1: "Leveraging Robust ",
      title2: "Data Stack",
      subtitle:
        "Strong ecosystem ties strengthen our access to opportunities across the New Economy.",
      description:
        "India is home to over 1,69,000+ New Economy companies - and that number is growing everyday. As a fund built for today and engineered for the future , we tap into this momentum,backing the innovators shaping tomorrow's economy.",
    },
    {
      title1: "Beyond Investment, ",
      title2: "Cementing Relationships",
      subtitle: "Partner in the founders’ journey ",
      description:
        "Our role goes beyond funding. We’re co-builders— providing strategic partnerships to scale with clarity and lead with intent.",
    },
  ];

  const nextText = () => {
    setTextIndex((prevIndex) => (prevIndex + 1) % content.length);
  };

  const prevText = () => {
    setTextIndex(
      (prevIndex) => (prevIndex - 1 + content.length) % content.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextText, 3000);

    return () => clearInterval(interval);
  }, [content.length]);

  return (
    <section className="homeHomeBannerMainContainer">
      <div className="homeHomeBannerSubContainer">
        <div className="homeHomeBannerTestContainer">
          <div className="homeHomeBannerTestLeftContainer">
            <video autoPlay loop muted playsInline className="homebannerVideo">
              <source src={videoSrc} type="video/mp4" />
            </video>
          </div>
          <div className="homeHomeBannerTestRightContainer">
            <div className="homeHomeBannerTestSubRightContainer">
              <div className="homeHomeBannerRightContainerLeft">
                <div className="homeHomeBannerRightContainerLeftHeadingPara">
                  <h2 className="rightContainerLeftHeading">
                    The Bold Deserve More Than Just Capital
                  </h2>
                  <div className="rightContainerLeftParagraph">
                    <p>
                      History honors those who dared—those who saw potential
                      where others saw roadblocks. The relentless, the
                      visionaries, the ones who refused to wait for the
                      future—they built it.
                    </p>
                    <p>
                      We don’t just invest in ideas; we back the audacious. The
                      founders who challenge norms, defy limits, and turn bold
                      ambition into lasting impact.
                    </p>
                  </div>
                </div>
              </div>
              <div className="homeHomeBannerRightContainerRight">
                <div className="homeHomeBannerImgLeftContainer">
                  <img src={Img1} />
                </div>
                <div className="homeHomeBannerImgRightContainer">
                  <img src={Img2} />
                </div>
              </div>
            </div>
          </div>

          <div className="homeBannerCardContainer">
            <Swiper
              modules={[Autoplay, Navigation, Pagination]}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              navigation={{
                prevEl: ".navigation-arrows .prev-button",
                nextEl: ".navigation-arrows .next-button",
              }}
              pagination={false}
              loop={true}
            >
              {content.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="card">
                    <h2 className="cardHeading">
                      <span>{item.title1}</span> <br />
                      <span>{item.title2}</span>
                    </h2>
                    <p className="cardParagraph">{item.subtitle}</p>
                    <div className="navigationArrows">
                      <button className="prevButton">
                        <img src={leftArrow} alt="Previous" />
                      </button>
                      <button className="nextButton">
                        <img src={rightArrow} alt="Next" />
                      </button>
                    </div>
                    <div className="divider"></div>
                    <p className="description">{item.description}</p>
                    <div className="bordered-icon">
                      <img src={card_underline} alt="Icon" />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homebanner;
