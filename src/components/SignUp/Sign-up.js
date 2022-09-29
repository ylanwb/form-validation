import React, { useState } from "react";
import * as yup from "yup";
import { Password, Name, Email, Button, Age, Dob } from "../FormComponents";
import { auth } from "../../firebase";
import { ValidationSchema } from "./Sign-Up-Form-Validation";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase";

const initialValues = {
  name: "",
  email: "",
  age: "",
  dob: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = ({ setSuccessful }) => {
  const [inputValues, setInputValues] = useState(initialValues);
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

  const handleSubmit = async () => {
    if (inputValues.password !== inputValues.confirmPassword) {
      setFormErrors({ ...formErrors, required: "Password needs to match" });
      setSuccessful(false);
    }
    if (
      inputValues.name === "" ||
      inputValues.age === "" ||
      inputValues.email === "" ||
      inputValues.dob === "" ||
      inputValues.password === "" ||
      inputValues.confirmPassword === ""
    ) {
      setFormErrors({ ...formErrors, required: "All the inputs are required" });
      setSuccessful(false);
    } else if (
      formErrors.name === "" ||
      formErrors.age === "" ||
      formErrors.email === "" ||
      formErrors.dob === "" ||
      formErrors.required === ""
    ) {
      setFormErrors({ ...formErrors, required: "" });
      await createUserWithEmailAndPassword(
        auth,
        inputValues.email,
        inputValues.password
      )
        .then(async (response) => {
          const user = response.user;
          const userRef = doc(collection(db, "users"));
          await setDoc(userRef, {
            uid: user.uid,
            email: user.email,
          });
          setSuccessful(true);
        })
        .catch((err) => {
          setFormErrors({ ...formErrors, required: err.message });
          setSuccessful(false);
        });
    }
  };

  return (
    <div className="signUpContainer">
      <h1>Sign up</h1>
      <Name name="name" handleChange={handleChange} />
      <Email name="email" handleChange={handleChange} />
      <Age name="age" handleChange={handleChange} />
      <Dob name="dob" handleChange={handleChange} />
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
  );
};

export default SignUpForm;
