import React, { useState } from "react";
import "./App.css";
import SignInForm from "./components/SignIn/Sign-In";
import SignUpForm from "./components/SignUp/Sign-up";

function App() {
  const [successful, setSuccessful] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div>
      <div className="mainContainer">
        <div className="contentContainer">
          {successful && <SignInForm />}
          {!successful && <SignUpForm setSuccessful={setSuccessful} />}
        </div>
      </div>
    </div>
  );
}
export default App;
