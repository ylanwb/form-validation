import "./App.css";
import { useState } from "react";
import Age from "./components/Age";
import Button from "./components/Button";
import Email from "./components/Email";
import Name from "./components/Name";
import Password from "./components/Password";
import Dob from "./components/Dob";

const initialValues = {
  name: "",
  email: "",
  age: "",
  dob: "",
  password: "",
  confPassword: "",
};

function App() {
  const [inputValues, setInputValues] = useState(initialValues);
  const [error, setError] = useState("");

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleNameInputChange = (value) => {
    setInputValues({ ...inputValues, name: value });
  };
  const handleEmailInputChange = (value) => {
    setInputValues({ ...inputValues, email: value });
  };
  const handleAgeInputChange = (value) => {
    setInputValues({ ...inputValues, age: value });
  };
  const handlePasswordInputChange = (value) => {
    setInputValues({ ...inputValues, password: value });
  };
  const handleConfPasswordInputChange = (value) => {
    setInputValues({ ...inputValues, confPassword: value });
  };

  const handleDobInputChange = (value) => {
    setInputValues({ ...inputValues, dob: value });
  };

  const handleSubmitButton = () => {
    const cutDate = inputValues.dob.substring(0, 4)
    console.log(Number(cutDate))

    
    if (inputValues.name.length < 4) {
      setError("Name must be more than 4 characters");
    }
    if (!isValidEmail(inputValues.email)) {
      setError("Email is invalid");
    } else {
      setError("");
    }
    if ((inputValues.name.length < 4) & !isValidEmail(inputValues.email)) {
      setError("Name and Email Invalid");
    }
    if (inputValues.password.length < 8) {
      setError("Password must be more than 8 characters");
    }
    if (inputValues.confPassword !== inputValues.password) {
      setError("Invalid Confirm Password");
    }
    if (inputValues.age < 18) {
      setError("Must be 18 or older to sign up");
    }
    if ( Number(cutDate) > 1996 || Number(cutDate) === 0 ) {
      setError("Must be 18 or older to sign up v2")
    }
  };
  return (
    <div className="mainContainer">
      <div className="contentContainer">
        <div className="signInContainer">
          <h1>Sign in</h1>
          <Name />
          <Password />
          <Button />
        </div>
        <div className="signUpContainer">
          <h1>Sign up</h1>
          <Name value={inputValues.name} handleChange={handleNameInputChange} />
          <Email
            value={inputValues.email}
            handleChange={handleEmailInputChange}
          />
          <Age value={inputValues.age} handleChange={handleAgeInputChange} />
          <Dob value={inputValues.dob} handleChange={handleDobInputChange} />
          <Password
            value={inputValues.password}
            handleChange={handlePasswordInputChange}
          />
          <Password
            value={inputValues.confPassword}
            handleChange={handleConfPasswordInputChange}
          />
          <p style={{ color: "red" }}>{error}</p>
          <Button onClick={handleSubmitButton} />
        </div>
      </div>
    </div>
  );
}

export default App;
