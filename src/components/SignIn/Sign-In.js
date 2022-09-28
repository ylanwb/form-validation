import React from "react";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import * as yup from "yup";
import Button from "../Button";
import Email from "../Email";
import Password from "../Password";
import { auth } from "../../firebase";
import { validationSchema } from "./Sign-In-Form-Validation";

const logInWithEmailAndPassword = async (email, password) => {};
const initialValues = {
  email: "",
  password: "",
};

const SignInForm = () => {
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
      .reach(validationSchema, name)
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
          setIsSignedIn(true);
        })
        .catch((err) => {
          console.log(err);
          setFormErrors({ ...formErrors, required: err.message });
        });
    }
  };
  return (
    <div className="signInMainContainer">
      {isSignedIn && <div>{user.email}</div>}
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
        </div>
      )}
    </div>
  );
};

export default SignInForm;
