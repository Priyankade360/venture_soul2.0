import React from "react";
import "./NewsSection.scss";
import ProgressSlider from "../../assets/temp_image/ProgressSlider.svg";
// import { useEffect, useRef, useState } from "react";

// import Marquee from "react-fast-marquee";
// import NewsComponent from "./NewsComponent";
// import InsightComponent from "./InsightComponent";
// import { useDispatch, useSelector } from "react-redux";
// // import { getnews } from "../../store/newsSlice";
// // import { getinsights } from "../../store/insightsSlice";
// import PdfModal from "../PdfModal/PdfModal";

const NewsSection = () => {
  // const dispatch = useDispatch();
  // const storeVar = useSelector((state) => state.news);
  // const insightVar = useSelector((state) => state.insights);
  // const [showModal, setShowModal] = useState(false);
  // const [pdfUrl, setPdfUrl] = useState("");

  // useEffect(() => {
  //   dispatch(getnews(10, 0));
  //   dispatch(getinsights(10, 0));
  // }, [dispatch]);

  // const handleItemClick = (pdfLink) => {
  //   setPdfUrl(pdfLink);
  //   setShowModal(true);
  // };
  return (
    <div className="homeMainNewsSectionContainer">
      <div className="homeSubNewsSectionContainer">
        <div className="newsHeader">
          <h1 className="newsContainerHeading">News & Insights</h1>

          <div className="newsHeaderSliderImg">
            <h2 className="news-title">Trending News</h2>
            <img
              src={ProgressSlider}
              alt=" "
              className="newsHeadingSliderImg"
            />
          </div>
        </div>

        <div className="newsContainer">
          <div className="newsSubContainer">
            <div className="topBox">
              <h1>welcome</h1>
            </div>
            <div className="bottomBox">
              <h1>welcome</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
