import React from "react";
import "./Header.scss";
import logo from "../../assets/image/Logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="HeaderMainContainer">
      <div className="headerContent">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="headerContentText">
          <Link to={"/"} className="texer">
            Home
          </Link>
          <Link to={"/AboutUs"} className="texer">
            About Us
          </Link>
          <Link to={"/Team"} className="texer">
            Team
          </Link>
          <Link to={"/Portfolio"} className="texer">
            Portfolio
          </Link>
          <Link to={"/News"} className="texer">
            News
          </Link>
          <Link to={"/Insights"} className="texer">
            Insights
          </Link>
          <Link to={"/ContactUs"} className="texer">
            Contact Us
          </Link>
        </div>

        <div className="getStartedButton">
          <button className="startedButton">
            <span>Get Started</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
