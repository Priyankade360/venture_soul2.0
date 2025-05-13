import React from "react";
import "./newsComponent.scss";
import date from "../../assets/image/date.png";
const NewsComponent = ({ props }) => {
  const handlnavigate = () => {
    window.open(props.link, "_blank");
  };

  return (
    <div className="newsBox" onClick={handlnavigate}>
      <img src={props.image} alt="" />
      <div className="textContainer">
        <div className="textBox">
          <div className="newBox">
            <div className="tags">
              <p className="title">{props.tag}</p>
            </div>
            <p className="desc">{props.title}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsComponent;
