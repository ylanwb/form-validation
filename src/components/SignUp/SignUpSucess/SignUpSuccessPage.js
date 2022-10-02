import React from "react";
import { useNavigate } from "react-router-dom";
import CheckIcon from "../../Icons/CheckIcon";
import "./SignUpSucessPage.css";

const SignUpSuccess = () => {
  let navigate = useNavigate()
  const handleContinueButton = () => {
    navigate("/")
  };
  return (
    <div id="card" className="animated fadeIn">
      <div id="upper-side">
        <CheckIcon />
        <h3 id="status">Success</h3>
      </div>
      <div id="lower-side">
        <p id="message">
          Congratulations, your account has been successfully created.
        </p>
        <button onClick={handleContinueButton} id="contBtn">
          Return to Login
        </button>
      </div>
    </div>
  );
};

export default SignUpSuccess;
