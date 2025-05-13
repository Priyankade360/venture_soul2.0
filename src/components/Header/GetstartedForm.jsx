import React, { useState, useEffect } from "react";
import "./GetstartedForm1.scss";
import { Link } from "react-router-dom";

function GetstartedForm({ show, onClose }) {
  const [step, setStep] = useState("choose"); 
  const [selectedRole, setSelectedRole] = useState(""); 

  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [show]);

  const handleCloseClick = () => {
    onClose();
    setStep("choose");
    setSelectedRole("");
  };

  const handleInvestorClick = () => {
    setSelectedRole("investor");
    setTimeout(() => setStep("investor"), 300); 
  };

  const handleSeekingClick = () => {
    setSelectedRole("seeking");
    setTimeout(() => setStep("seeking"), 300);
  };

  const goBack = () => {
    setStep("choose");
    setSelectedRole(""); 
  };

  if (!show) return null;

  return (
    <div className="custom-modal-overlay" onClick={handleCloseClick}>
      <div className="custom-modal" onClick={(e) => e.stopPropagation()}>
        <div className="custom-modal-header">
          <button className="close-button" onClick={handleCloseClick}>
            ×
          </button>
        </div>

        <div className="custom-modal-body">
          {step === "choose" && (
            <>
              <h1>Choose your role :</h1>
              <div className="role-buttons">
                <button
                  className={`role-btn ${
                    selectedRole === "investor" ? "active" : ""
                  }`}
                  onClick={handleInvestorClick}
                >
                  I am an Investor
                </button>
                <button
                  className={`role-btn ${
                    selectedRole === "seeking" ? "active" : ""
                  }`}
                  onClick={handleSeekingClick}
                >
                  Seeking Investment
                </button>
              </div>
            </>
          )}

          {step === "investor" && (
            <div className="form-section">
              <div className="description1">
                <h2>
                  For detailed assistance or additional information, please
                  contact us via email.
                </h2>
                <Link to={"#"}>kunal.wadhwa@venturesoul.in</Link>
              </div>
           
              <button className="back-btn">Send Mail</button>
            </div>
          )}

          {step === "seeking" && (
            <div className="form-section">
              <div className="description1">
                <h2>
                  For detailed assistance or additional information, please
                  contact us via email.
                </h2>
                <Link to={"#"}>kunal.wadhwa@venturesoul.in</Link>
              </div>
             
              <button className="back-btn">Send Mail</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default GetstartedForm;
