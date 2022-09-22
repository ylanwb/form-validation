import "./App.css";
import { useState } from "react";
import * as yup from "yup";
import Age from "./components/Age";
import Button from "./components/Button";
import Email from "./components/Email";
import Name from "./components/Name";
import Password from "./components/Password";
import Dob from "./components/Dob";

const validationSchema = yup.object().shape({
  name: yup.string().min(4, "Name must be more than 4 letters").required(),
  email: yup.string().email("Invalid Email").required(),
  age: yup
    .number()
    .min(18, "You must be 18+ to sign up")
    .typeError("Age is required")
    .required(),
  dob: yup.date().required(),
  password: yup
    .string()
    .min(8, "Password must be more than 8 letters")
    .required(),
  confirmPassword: yup.string().required(),
});

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
  const [formErrors, setFormErrors] = useState(initialValues);

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
  return (
    <div className="mainContainer">
      <div className="contentContainer">
        <div className="signInContainer">
          <h1>Sign in</h1>
          <Name />
          <Password placeholder={"Password"} />
          <Button />
        </div>
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
          <p style={{ color: "red" }}>{formErrors.name}</p>
          <p style={{ color: "red" }}>{formErrors.email}</p>
          <p style={{ color: "red" }}>{formErrors.age}</p>
          <p style={{ color: "red" }}>{formErrors.password}</p>
          <Button />
        </div>
      </div>
    </div>
  );
}

export default App;
