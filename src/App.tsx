/* eslint-disable @typescript-eslint/space-before-function-paren */
// import { auth } from "./firebase";
// import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SignInForm } from "../src/pages/SignInPage/Sign-In";
import SignUpForm from "./pages/SignUpPage/Sign-Up";
import { SignUpSuccess } from "./pages/SignUpPage/SignUpSucess/SignUpSuccessPage";
import { LandingPage } from "./pages/LandingPage/LandingPage";
import BlogPage from "./pages/BlogPage/BlogPage";
import ArticlePage from "./pages/ArticlePage/ArticlePage";
import UsersPage from "./pages/UsersPage/UsersPage";
import PostsPage from "./pages/PostsPage/PostsPage";
import "./App.css";

function App() {
  const [user, setUser] = React.useState<boolean>();
  // if (auth.onAuthStateChanged) {
  //   auth.onAuthStateChanged((user) => {
  //     setUser(user);
  //   });
  // }
  return (
    <div>
      <div className="mainContainer">
        <div className="contentContainer">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<LandingPage user={user} />} />
              <Route path="/blog" element={<BlogPage user={user} />} />
              <Route path="/successful" element={<SignUpSuccess />} />
              <Route path="/blog/:id" element={<ArticlePage />} />
              <Route path="/users" element={<UsersPage />} />
              <Route path="/posts" element={<PostsPage />} />
            </Routes>
            <Routes>
              <Route path="/sign-in" element={<SignInForm />} />
              <Route
                path="/sign-up"
                element={<SignUpForm setUser={setUser} />}
              />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}
export default App;
