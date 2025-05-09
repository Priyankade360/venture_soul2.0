import React from "react";
import "./Mapsection.scss";
import mapImage from "../../assets/image/mapImage2.png";
import logo2 from "../../assets/image/logo1.png";
import logo4 from "../../assets/image/logo2.png";
import logo3 from "../../assets/image/logo3.png";
import logo1 from "../../assets/image/logo4.png";
import logo5 from "../../assets/image/logo5.png";
import img1 from "../../assets/image/portfolio-card-1.png";
import img2 from "../../assets/image/portfolio-card-2.png";
import img3 from "../../assets/image/portfolio-card-3.png";
import img4 from "../../assets/image/metalbook.png";
import img5 from "../../assets/image/metro.png";
import iconImage from "../../assets/image/mapImage-icon.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination, Autoplay } from "swiper/modules";

const portfolioData = [
  {
    id: 1,
    image: img1,
    title: "True Credits",
    description: "Full stack lending platform based out of Gurugram.",
  },
  {
    id: 2,
    image: img4,
    title: "Metalbook",
    description:
      "Tech enabled B2B animal protein marketplace focused on organizing fragmented supply chains and with a successful pivot",
  },
  {
    id: 3,
    image: img5,
    title: "Metro Telworks",
    description:
      "A global pioneer in wireless telecom services, operating across 19+ countries in Asia, Africa, the Middle East, and Latin America - powering connectivity through innovation and scale.",
  },
  {
    id: 2,
    image: img2,
    title: "Mozark AI",
    description:
      "Digital experience management partner offering services such as app performance monitoring for improved user experience.",
  },
  {
    id: 4,
    image: img3,
    title: "Captain Fresh",
    description:
      "Captain Fresh uses technology to manage and grow seafood brands across the world. With full control over the supply chain, it focuses on making seafood access better and faster in different markets through strong local brands.",
  },
];

const Mapsection = () => {
  const boldBet = [
    { image: logo4 },
    { image: logo1 },
    { image: logo3 },
    { image: logo2 },
    { image: logo5 },
  ];
  return (
    <div className="homeMapMainContainer">
      <div className="homeMapMainSubContainer">
        <div className="homeMapMainNestContainer">
          <h1 className="mapContainerHeading">Our Bold Bets</h1>

          <div className="mapContainerScrollingLogo">
            <Swiper
              slidesPerView={3}
              spaceBetween={10}
              speed={2000}
              loop={true}
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: false,
              }}
              breakpoints={{
                0: {
                  slidesPerView: 3,
                },
                640: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 4,
                },
              }}
              modules={[Autoplay]}
              className="mySwiper"
            >
              {boldBet.map((item, index) => (
                <SwiperSlide className="swiperItems" key={index}>
                  <img src={item.image} alt="" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="mapWrapp">
            <div className="mapContainerMapSection">
              <img src={mapImage} alt="Map" className="mapImage" />
              <div
                className="map-marker map1"
                style={{ top: "28%", left: "42%" }}
              >
                <img src={iconImage} alt="Marker" className="map-icon" />
                <div className="popup-box">
                  <div className="portfolioGrid">
                    <div key={portfolioData[0].id} className="portfolioCard">
                      <div className="imageContainer">
                        <img
                          src={portfolioData[0].image}
                          alt={portfolioData[0].title}
                        />
                      </div>
                      <div className="content">
                        <h2>{portfolioData[0].title}</h2>
                        <p>{portfolioData[0].description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="map-marker map2"
                style={{ top: "65%", left: "37%" }}
              >
                <img src={iconImage} alt="Marker" className="map-icon" />
                <div className="popup-box">
                  <div className="portfolioGrid">
                    <div key={portfolioData[3].id} className="portfolioCard">
                      <div className="imageContainer">
                        <img
                          src={portfolioData[3].image}
                          alt={portfolioData[3].title}
                        />
                      </div>
                      <div className="content">
                        <h2>{portfolioData[3].title}</h2>
                        <p>{portfolioData[3].description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="map-marker map3"
                style={{ top: "33%", left: "42%" }}
              >
                <img src={iconImage} alt="Marker" className="map-icon" />
                <div className="popup-box">
                  <div className="portfolioGrid">
                    <div key={portfolioData[1].id} className="portfolioCard">
                      <div className="imageContainer">
                        <img
                          src={portfolioData[1].image}
                          alt={portfolioData[1].title}
                        />
                      </div>
                      <div className="content">
                        <h2>{portfolioData[1].title}</h2>
                        <p>{portfolioData[1].description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="map-marker map4"
                style={{ top: "54%", left: "35%" }}
              >
                <img src={iconImage} alt="Marker" className="map-icon" />
                <div className="popup-box">
                  <div className="portfolioGrid">
                    <div key={portfolioData[2].id} className="portfolioCard">
                      <div className="imageContainer">
                        <img
                          src={portfolioData[2].image}
                          alt={portfolioData[2].title}
                        />
                      </div>
                      <div className="content">
                        <h2>{portfolioData[2].title}</h2>
                        <p>{portfolioData[2].description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="map-marker map5"
                style={{ top: "75%", left: "42%" }}
              >
                <img src={iconImage} alt="Marker" className="map-icon" />
                <div className="popup-box">
                  <div className="portfolioGrid">
                    <div key={portfolioData[4].id} className="portfolioCard">
                      <div className="imageContainer">
                        <img
                          src={portfolioData[4].image}
                          alt={portfolioData[4].title}
                        />
                      </div>
                      <div className="content">
                        <h2 className="contentHeading">{portfolioData[4].title}</h2>
                        <p className="contentParagraph">{portfolioData[4].description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mapsection;
