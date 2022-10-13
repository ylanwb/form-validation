import BlueBox from "../Icons/BlueBox";
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
  const handleProductButton = () => {
    navigate("/products");
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
          <BlueBox id="blueBox" />
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
              handleProductButton();
            }}
          >
            Products
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
