import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import * as yup from "yup";
import { auth } from "../../firebase";
import { LandingPage } from "../LandingPage/LandingPage";
import { Password, Button, Email } from "../../components/FormComponents";
import { ValidationSchema } from "./Sign-In-Form-Validation";
import { useNavigate } from "react-router-dom";
import "./Sign-In.css";
import axios from "axios";

const initialValues = {
  email: "",
  password: "",
};

export const SignInForm = () => {
  const navigate = useNavigate();
  const handleSubmitButtonTwo = () => {
    navigate("/sign-Up");
  };
  const [inputValues, setInputValues] = useState(initialValues);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [user, setUser] = useState<any>();
  const [formErrors, setFormErrors] = useState<any>({
    ...initialValues,
    required: "",
  });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    yup
      .reach(ValidationSchema, name)
      .validate(value)
      .then((valid: any) => {
        setInputValues({ ...inputValues, [name]: value });
        setFormErrors({ ...formErrors, [name]: "" });
      })
      .catch((err: { message: any }) => {
        setFormErrors({ ...formErrors, [name]: err.message });
      });
  };
  const handleSubmitButton = async () => {
    if (inputValues.email === "" || inputValues.password === "") {
      setFormErrors({ ...formErrors, required: "Required" });
    } else {
      await axios
        .post(
          "http://localhost:1212/login",
          {
            email: inputValues.email,
            password: inputValues.password,
          },
          {
            headers: { "Content-Type": "application/json" },
          }
        )
        .then((response) => {
          console.log(response);
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <div className="signInMainContainer">
      {isSignedIn && <LandingPage email={user?.email} />}
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
              Don't have an account?{" "}
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
