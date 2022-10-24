import { Bluebox } from "../index";
import React from "react";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import "./Header.css";

export const Header = ({ user, isWhiteBackground }) => {
  const navigate = useNavigate();
  const handleLogoutButton = () => {
    auth.signOut();
    navigate("/");
  };
  const handleBlogButton = () => {
    navigate("/blog");
  };
  const handleUserButton = () => {
    navigate("/users");
  };
  const handlePostButton = () => {
    navigate("/posts");
  };
  return (
    <div className="navBar">
      <div className="navLeftSide">
        <div
          className={
            isWhiteBackground ? "navDarkBackground" : "navWhiteBackground"
          }
        >
          <span>team</span>
          <Bluebox id="blueBox" />
        </div>
      </div>
      <div className="navRightSide">
        <div
          className={
            isWhiteBackground
              ? "navDarkRightSideContent"
              : "navWhiteRightSideContent"
          }
          id="navRightSideContent"
        >
          <button
            className="navButton"
            onClick={() => {
              console.log("here");
              handleUserButton();
            }}
          >
            Users
          </button>
          <button
            className="navButton"
            onClick={() => {
              console.log("here");
              handlePostButton();
            }}
          >
            Posts
          </button>
          <button
            className="navButton"
            onClick={() => {
              console.log("here");
              handleBlogButton();
            }}
          >
            Blog
          </button>
          <button className="navButton">Contact</button>
          <button
            className="navButton"
            style={{ cursor: "pointer" }}
            onClick={() => {
              console.log("here");
              handleLogoutButton();
            }}
          >
            {!!user && "Log out"}
          </button>
          <button className="navButton">Get Access</button>
        </div>
      </div>
    </div>
  );
};
