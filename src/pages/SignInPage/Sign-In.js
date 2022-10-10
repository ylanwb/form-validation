import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import * as yup from "yup";
import { auth } from "../../firebase";
import LandingPage from "../LandingPage/LandingPage";
import { Password, Button, Email } from "../../components/FormComponents";
import { ValidationSchema } from "./Sign-In-Form-Validation";
import { useNavigate } from "react-router-dom";
import "./Sign-In.css"

const initialValues = {
  email: "",
  password: "",
};

const SignInForm = () => {
  let navigate = useNavigate()
  const handleSubmitButtonTwo = () => {
    navigate("/sign-Up")
  };
  const [inputValues, setInputValues] = useState(initialValues);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [user, setUser] = useState();
  const [formErrors, setFormErrors] = useState({
    ...initialValues,
    required: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    yup
      .reach(ValidationSchema, name)
      .validate(value)
      .then((valid) => {
        setInputValues({ ...inputValues, [name]: value });
        setFormErrors({ ...formErrors, [name]: "" });
      })
      .catch((err) => {
        setFormErrors({ ...formErrors, [name]: err.message });
      });
  };
  const handleSubmitButton = async () => {
    if (inputValues.email === "" || inputValues.password === "") {
      setFormErrors({ ...formErrors, required: "Required" });
    } else {
      await signInWithEmailAndPassword(
        auth,
        inputValues.email,
        inputValues.password
      )
        .then((response) => {
          setUser(response.user);
          console.log("went to home")
        })
        .catch((err) => {
          console.log(err);
          setFormErrors({ ...formErrors, required: err.message });
        });
    }
  };
  return (
    <div className="signInMainContainer">
      {isSignedIn && <LandingPage email={user.email} />}
      {!isSignedIn && (
        <div className="signInContainer">
          <h1>Sign in</h1>
          <Email name="email" handleChange={handleChange} />
          <Password
            name="password"
            handleChange={handleChange}
            placeholder={"Password"}
          />
          <Button onClick={handleSubmitButton} />
          <span style={{ color: "red" }}>{formErrors.email}</span>
          <span style={{ color: "red" }}>{formErrors.password}</span>
          <span style={{ color: "red" }}>{formErrors.required}</span>
          <div className="loginSignUpLink">
            <span>
              Don't have an account?
              {" "}
              <button onClick={handleSubmitButtonTwo} id="signUpLink">
                Sign Up.
              </button>
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignInForm;
