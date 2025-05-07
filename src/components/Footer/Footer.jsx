import React from "react";
import "./Footer.scss";
import logo from "../../assets/image/Logo.png";
import linkedin from "../../assets/image/linkdin (1).svg";
import twitter from "../../assets/image/Twitter (1).svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="footerContainer">
        <div className="footer-logo">
          <img src={logo} alt="VentureSoul Partners" />
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <div className="container1">
              <h4>Learn More</h4>
            </div>
            <Link to={"#"} className="texer">
              About Us
            </Link>
            <Link href="#" className="texer">
              Team
            </Link>
            <Link to={"#"} className="texer">
              Contact Us
            </Link>
          </div>

          <div className="footer-column">
            <div className="container1">
              <h4>Stay Connected</h4>
            </div>
            <Link to={"#"} className="texer">
              News
            </Link>
            <Link to={"#"} className="texer">
              Insights
            </Link>
          </div>

          <div className="footer-column">
            <div className="container1">
              <h4>Contact Us</h4>
            </div>
            <div className="contact-row">
              <span className="contact-label">Phone: +91 9920099848</span>
            </div>
            <div className="contact-row">
              <span className="contact-label">Email:</span>
              <div className="contact-info">
                <Link to={"#"}  className="texer">anurag.tripathi@venturesoul.in </Link>
                <Link to={"#"}  className="texer">ashish.gala@venturesoul.in </Link>
                <Link to={"#"}  className="texer">kunal.wadhwa@venturesoul.in </Link>
              </div>
            </div>
          </div>

          <div className="footer-column">
            <div className="container1">
              <h4>Social</h4>
            </div>
            <div className="social-icons">
              <Link to={"#"}  className="texer">
                <img src={linkedin} alt="linkedin" className="social-icon" />
              </Link>
              <Link to={"#"}  className="texer">
                <img src={twitter} alt="twitter" className="social-icon" />
              </Link>
            </div>
          </div>
        </div>

      </div>
      <div className="footer-bottom-container">
        <div className="footer-bottom">

        <p>© 2025 Venture Solution | All Rights Reserved</p>
        </div>
        </div>
    </div>
  );
};

export default Footer;
