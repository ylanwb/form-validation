import BlueBox from "../components/Icons/BlueBox";
import React from "react";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

export const Header = ({ user }) => {
  const navigate = useNavigate();
  const handleLogoutButton = () => {
    auth.signOut();
    navigate("/");
  };
  const handleBlogButton = () => {
    navigate("/pages/blog");
  };

  return (
    <div className="navBar">
      <div className="navLeftSide">
        <div className="navLeftSideContent">
          <span>team</span>
          <BlueBox id="blueBox" />
        </div>
      </div>
      <div className="navRightSide">
        <div className="navRightSideContent">
          <button className="navButton">Products</button>
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
