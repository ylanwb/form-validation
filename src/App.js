import "./App.css";
import { useState } from "react";
import * as yup from "yup";
import Age from "./components/Age";
import Button from "./components/Button";
import Email from "./components/Email";
import Name from "./components/Name";
import Password from "./components/Password";
import Dob from "./components/Dob";
import { object } from "yup/lib/locale";
import { auth } from "./firebase";

const validationSchema = yup.object().shape({
  name: yup.string().min(4, "Name must be more than 4 letters").required(),
  email: yup.string().email("Invalid Email").required(),
  age: yup
    .number()
    .min(18, "You must be 18+ to sign up")
    .typeError("Age is required")
    .required(),
  dob: yup
    .date()
    .test("DOB", "Date of Birth should be after 2004", (value) => {
      const newDate = String(value);
      const newerDate = newDate.substr(11, 4);
      return Number(newerDate) < 2004;
    })
    .required(),
  password: yup
    .string()
    .min(8, "Password must be more than 8 letters")
    .required(),
  confirmPassword: yup
    .string()
    .min(8, "Password must be more than 8 letters")
    .required(),
});

const initialValues = {
  name: "",
  email: "",
  age: "",
  dob: "",
  password: "",
  confirmPassword: "",
};

function App() {
  const [inputValues, setInputValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({
    ...initialValues,
    required: "",
  });
  const [successful, setSuccessful] = useState(false);

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

  const handleSubmit = () => {
    if (inputValues.password !== inputValues.confirmPassword) {
      setFormErrors({ ...formErrors, required: "Password needs to match" });
    }
    if (
      inputValues.name === "" ||
      inputValues.age === "" ||
      inputValues.email === "" ||
      inputValues.password === "" ||
      inputValues.dob === ""
    ) {
      setFormErrors({ ...formErrors, required: "All the inputs are required" });
      setSuccessful(false);
    } else if (
      formErrors.name === "" ||
      formErrors.age === "" ||
      formErrors.email === "" ||
      formErrors.dob === "" ||
      formErrors.password === ""
    ) {
      console.log("here");
      setSuccessful(true);
    }
  };

  return (
    <>
      <div className="mainContainer">
        <div className="contentContainer">
          {successful ? (
            <div className="signInContainer">
              <h1>Sign in</h1>
              <Name />
              <Password placeholder={"Password"} />
              <Button />
            </div>
          ) : (
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
          )}
        </div>
      </div>
    </>
  );
}

export default App;
