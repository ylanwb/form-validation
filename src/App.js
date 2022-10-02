import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./App.css";
import SignInForm from "./components/SignIn/Sign-In";
import SignUpForm from "./components/SignUp/Sign-up";
import { auth } from "./firebase";
import LandingPage from "./pages/LandingPage";

function App() {
  const [user, setUser] = useState();

  if (auth.onAuthStateChanged) {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  }

  return (
    <div>
      <div className="mainContainer">
        <div className="contentContainer">
          <BrowserRouter>
            {user && (
              <Routes>
                <Route path="/" element={<LandingPage user={user} />} />
              </Routes>
            )}
            {!user && (
              <Routes>
                <Route path="/" element={<SignInForm />} />

                <Route
                  path="/sign-up"
                  element={<SignUpForm setUser={setUser} />}
                />
              </Routes>
            )}
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}
export default App;
