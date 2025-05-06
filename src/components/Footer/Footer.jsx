import React from "react";
import "./Footer.scss";
import logo from "../../assets/image/Logo.png";
// import linkedin from "../../assets/image/linkdin (1).svg";
// import twitter from "../../assets/image/Twitter (1).svg";

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
            {/* <Link to={"#"} className="texer">
              About Us
            </Link>
            <Link href="#" className="texer">
              Team
            </Link>
            <Link to={"#"} className="texer">
              Contact Us
            </Link> */}
          </div>

          <div className="footer-column">
            <div className="container2">
              <h4>Stay Connected</h4>
            </div>
            {/* <Link to={"#"} className="texer">
              News
            </Link>
            <Link to={"#"} className="texer">
              Insights
            </Link> */}
          </div>

          <div className="footer-column">
            <div className="container3">
              <h4>Contact Us</h4>
            </div>
            {/* <div className="contact-row">
              <span className="contact-label">Phone: +91 9920099848</span>
            </div>
            <div className="contact-row">
              <span className="contact-label">Email:</span>
              <div className="contact-info">
                <Link to={"#"}>anurag.tripathi@venturesoul.in </Link>
                <Link to={"#"}>ashish.gala@venturesoul.in </Link>
                <Link to={"#"}>kunal.wadhwa@venturesoul.in </Link>
              </div>
            </div> */}
          </div>

          <div className="footer-column">
            <div className="container4">
              <h4>Social</h4>
            </div>
            {/* <div className="social-icons">
              <Link to={"#"}>
                <img src={linkedin} alt="linkedin" className="social-icon" />
              </Link>
              <Link to={"#"}>
                <img src={twitter} alt="twitter" className="social-icon" />
              </Link>
            </div> */}
          </div>

        </div>

      </div>
    </div>
  );
};

export default Footer;
