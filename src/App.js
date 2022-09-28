import React, { useState } from "react";
import "./App.css";
import SignInForm from "./components/SignIn/Sign-In";
import SignUpForm from "./components/SignUp/Sign-up";
import SignUpSuccess from "./components/SignUpSucess/signUpSuccess";

function App() {
  const [successful, setSuccessful] = useState(false);
  const [Continue, setContinue] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div>
      <div className="mainContainer">
        <div className="contentContainer">
          {Continue && <SignInForm />}
          {!Continue && successful && <SignUpSuccess setContinue={setContinue} />}
          {!Continue && !successful && <SignUpForm setSuccessful={setSuccessful} />}
        </div>
      </div>
    </div>
  );
}
export default App;
