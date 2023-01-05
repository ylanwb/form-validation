/* eslint-disable @typescript-eslint/no-misused-promises */
import axios from "axios";
import Cookies from "js-cookie";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { Button, Email, Password } from "../../components/FormComponents";
import { ValidationSchema } from "./Sign-In-Form-Validation";
import "./Sign-In.css";

const setCookie = (token: string) => {
  const current = new Date();
  const expirationDate = new Date(current.getTime() + 86400000);
  return Cookies.set("userToken", `${token}`, {
    path: "/",
    expires: expirationDate,
  });
};

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
  const [formErrors, setFormErrors] = useState<any>({
    ...initialValues,
    required: "",
  });

  const handleChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    yup
      .reach(ValidationSchema, name)
      .validate(value)
      .then((valid: boolean) => {
        setInputValues({ ...inputValues, [name]: value });
        setFormErrors({ ...formErrors, [name]: "" });
      })
      .catch((err: { message: string }) => {
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
          const token = response.data.data.token;
          setCookie(token);
          navigate("/");
          window.location.reload()
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <div className="signInMainContainer">
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
            Don&apos;t have an account?{" "}
            <button onClick={handleSubmitButtonTwo} id="signUpLink">
              Sign Up.
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};
