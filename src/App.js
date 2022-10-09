import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./App.css";
import SignInForm from "./pages/SignInPage/Sign-In";
import SignUpForm from "./pages/SignUpPage/Sign-Up";
import SignUpSuccess from "./pages/SignUpPage/SignUpSucess/SignUpSuccessPage";
import { auth } from "./firebase";
import LandingPage from "./pages/LandingPage/LandingPage";
import BlogPage from "./pages/BlogPage/BlogPage";

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
                <Route
                  path="/"
                  element={<LandingPage user={user} />}
                />
                <Route path="/pages/blog" element={<BlogPage user={user} />} />
                <Route path="/pages/successful" element={<SignUpSuccess />} />
                <Route path="/" element={<SignInForm />} />
              </Routes>
            )}
            {!user && (
              <Routes>
                <Route path="/" element={<SignInForm />} />
                <Route
                  path="/pages/sign-up"
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
