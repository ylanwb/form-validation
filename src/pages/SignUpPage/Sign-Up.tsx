/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useState } from "react";
import * as yup from "yup";
import { ValidationSchema } from "./Sign-Up-Form-Validation";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { collection, doc, setDoc } from "firebase/firestore";
import "./Sign-Up.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Password,
  Name,
  Email,
  Button,
  Age,
  Dob,
} from "../../components/FormComponents";
// const { auth } = require("../../firebase");
// const { db } = require("../../firebase");

const initialValues = {
  name: "",
  email: "",
  age: "",
  dob: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm: React.FC = () => {
  const navigate = useNavigate();
  const successfulNavigation = () => {
    navigate("/successful");
  };
  const [inputValues, setInputValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({
    ...initialValues,
    required: "",
  });
  const handleChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    yup
      .reach(ValidationSchema, name)
      .validate(value)
      .then((valid: string) => {
        setInputValues({ ...inputValues, [name]: value });
        setFormErrors({ ...formErrors, [name]: "" });
      })
      .catch((err: { message: string }) => {
        setFormErrors({ ...formErrors, [name]: err.message });
      });
  };

  const handleSubmit = async () => {
    await axios
      .post(
        "http://localhost:1212/signUp",
        {
          firstName: inputValues.name,
          // lastName: inputValues.lastName,
          email: inputValues.email,
          password: inputValues.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then(async (response) => {
        console.log(response);
        successfulNavigation();
      })
      .catch((err) => {
        setFormErrors({ ...formErrors, required: err.message });
        console.log("Error");
      });
    // if (inputValues.password !== inputValues.confirmPassword) {
    //   setFormErrors({ ...formErrors, required: "Password needs to match" });
    // }
    // if (
    //   inputValues.name === "" ||
    //   inputValues.age === "" ||
    //   inputValues.email === "" ||
    //   inputValues.dob === "" ||
    //   inputValues.password === "" ||
    //   inputValues.confirmPassword === ""
    // ) {
    //   setFormErrors({ ...formErrors, required: "All the inputs are required" });
    // } else if (
    //   formErrors.name === "" ||
    //   formErrors.age === "" ||
    //   formErrors.email === "" ||
    //   formErrors.dob === "" ||
    //   formErrors.required === ""
    // ) {
    //   setFormErrors({ ...formErrors, required: "" });
    //   await axios
    //     .post("https://backend-start-qzt7e7j3b-zchi.vercel.app/sign-up", {
    //       firstName: "test",
    //     })
    //     .then(async (response) => {
    //       console.log(response);
    //     })
    //     .catch((err) => {
    //       setFormErrors({ ...formErrors, required: err.message });
    //       console.log("Error");
    //     });
    // }
  };

  return (
    <div className="signUpMainContainer">
      <div className="signUpContentContainer">
        <h1>Sign up</h1>
        <Name name="name" handleChange={handleChange} />
        <Email name="email" handleChange={handleChange} />
        <Age name="age" handleChange={handleChange} />
        <Dob name="dob" handleChange={handleChange} placeholder="test" />
        <Password
          name="password"
          handleChange={handleChange}
          placeholder={"Password"}
        />
        <Password
          name="confirmPassword"
          handleChange={handleChange}
          placeholder={"Confirm password"}
        />
        <span style={{ color: "red" }}>{formErrors.name}</span>
        <span style={{ color: "red" }}>{formErrors.email}</span>
        <span style={{ color: "red" }}>{formErrors.age}</span>
        <span style={{ color: "red" }}>{formErrors.dob}</span>
        <span style={{ color: "red" }}>{formErrors.password}</span>
        <span style={{ color: "red" }}>{formErrors.confirmPassword}</span>
        <span style={{ color: "red" }}>{formErrors.required}</span>
        <Button onClick={handleSubmit} />
      </div>
    </div>
  );
};

export default SignUpForm;
