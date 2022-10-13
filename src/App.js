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
import ArticlePage from "./pages/ArticlePage/ArticlePage";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import axios from "axios";

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
                <Route path="/blog" element={<BlogPage user={user} />} />
                <Route path="/successful" element={<SignUpSuccess />} />
                <Route path="/blog/:id" element={<ArticlePage />} />
                <Route path="/products" element={<ProductsPage />} />
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
