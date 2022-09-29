import React, { useState } from "react";
import "./App.css";
import SignInForm from "./components/SignIn/Sign-In";
import SignUpForm from "./components/SignUp/Sign-up";
import SignUpSuccess from "./components/SignUp/SignUpSucess/SignUpSuccessPage";

function App() {
  const [successful, setSuccessful] = useState(false);
  const [isSignedUp, setIsSignedUp] = useState(true);

  return (
    <div>
      <div className="mainContainer">
        <div className="contentContainer">
          {isSignedUp && (
            <SignInForm
              setContinue={setIsSignedUp}
              setSuccessful={setSuccessful}
            />
          )}
          {!isSignedUp && successful && (
            <SignUpSuccess setContinue={setIsSignedUp} />
          )}
          {!isSignedUp && !successful && (
            <SignUpForm setSuccessful={setSuccessful} />
          )}
        </div>
      </div>
    </div>
  );
}
export default App;
