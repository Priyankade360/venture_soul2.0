import React from "react";
import "./Homepage.scss";
import Homebanner from "../../components/Homebanner/Homebanner";
import Mapsection from "../../components/Mapsection/Mapsection";
import Strategicsec from "../../components/Strategicsec/Strategicsec";
import Slider from "../../components/Slider/Slider";
import GrowthSec from "../../components/GrowthSec/GrowthSec";
import JourneySwiper from "../../components/Journey/JourneySwiper";
import NewsSection from "../../components/NewsSection/NewsSection";

const Homepage = () => {
  return (
    <div className="all-divs">
      <div className="container1">
        <Homebanner />
        <Mapsection />
        <Strategicsec />
        <Slider />
        <GrowthSec />
        <JourneySwiper />
        <NewsSection />
      </div>
    </div>
  );
};

export default Homepage;
