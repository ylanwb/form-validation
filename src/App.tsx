/* eslint-disable @typescript-eslint/space-before-function-paren */
// import { auth } from "./firebase";
// import { useNavigate } from "react-router-dom";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SignInForm } from "../src/pages/SignInPage/Sign-In";
import SignUpForm from "./pages/SignUpPage/Sign-Up";
import { SignUpSuccess } from "./pages/SignUpPage/SignUpSucess/SignUpSuccessPage";
import { LandingPage } from "./pages/LandingPage/LandingPage";
import ArticlePage from "./pages/ArticlePage/ArticlePage";
import UsersPage from "./pages/UsersPage/UsersPage";
import { useUserProvider } from "./provider/UserProvider";
import PostsPage from "./pages/PostsPage/PostsPage";
import MyPostsPage from "./pages/MyPostsPage/MyPostsPage"
import ContactPage from "./pages/ContactPage/ContactPage";
import "./App.css";

function App() {
  const { user } = useUserProvider();

  return (
    <div>
      <div className="mainContainer">
        <div className="contentContainer">
          <BrowserRouter>
            {user && (
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/myPosts" element={<MyPostsPage />} />
                <Route path="/successful" element={<SignUpSuccess />} />
                <Route path="/blog/:id" element={<ArticlePage />} />
                {/* <Route path="/users" element={<UsersPage />} /> */}
                <Route path="/posts" element={<PostsPage />} />
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
            )}
            {!user && (
              <Routes>
                <Route path="/" element={<SignInForm />} />
                {/* <Route path="/sign-in" element={<SignInForm />} /> */}
                <Route path="/sign-up" element={<SignUpForm />} />
                {/* <Route path="/successful" element={<SignUpSuccess />} /> */}
              </Routes>
            )}
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}
export default App;
