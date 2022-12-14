import React from "react";
import { useNavigate } from "react-router-dom";
import { CheckIcon } from "../../../components/index";
import "./SignUpSucessPage.css";

export const SignUpSuccess = () => {
  const navigate = useNavigate();
  const handleContinueButton = () => {
    navigate("/sign-in");
  };
  return (
    <div className="signUpSuccessContainer">
      <div id="card" className="animated fadeIn">
        <div id="upper-side">
          <CheckIcon />
          <h3 id="status">Success</h3>
        </div>
        <div id="lower-side">
          <p id="message">Your account has been successfully created.</p>
          <button onClick={handleContinueButton} id="contBtn">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};
