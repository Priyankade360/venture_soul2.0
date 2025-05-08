import React from "react";
import "./Homebanner.scss";

const videoSrc =
  "https://res.cloudinary.com/dj9xxvera/video/upload/v1746164821/iStock-1315346872_qjf5qp.mp4";

const Homebanner = () => {
  return (
    <section className="homeTeamMainContainer">
      <div className="homeTeamSubContainer">
        <div className="homeTeamTestContainer">
          <div className="homeTeamTestLeftContainer">
            <video autoPlay loop muted playsInline className="homebannerVideo">
              <source src={videoSrc} type="video/mp4" />
            </video>
          </div>
          <div className="homeTeamTestRightContainer">
            <h1>welcome</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homebanner;
