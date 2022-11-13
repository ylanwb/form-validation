import { Bluebox } from "../index";
import { React, useState, useEffect } from "react";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import { Spin as Hamburger } from 'hamburger-react'

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
  const handleHomeButton = () => {
    navigate("/")
  }


  const [isMenuActive , setIsMenuActive] = useState(false)

  const navMenuClicked = () => {
    if (isMenuActive === false) {
      setIsMenuActive(true)
      console.log("menu is active!")
    } else if (isMenuActive === true) {
      setIsMenuActive(false)
      console.log("menu is off!")
    } else {
      console.log("error")
    }
  }
  return (
    <div className="navBar">
      <div className="navLeftSide">
        <div
          onClick={() => {
            console.log("here");
            handleHomeButton();
          }}
          className={
            isWhiteBackground ? "navDarkBackground" : "navWhiteBackground"
          }
        >
          <span>team</span>
          <Bluebox id="blueBox" />
        </div>
      </div>
        <div
        className={`${isMenuActive && "menuSlide"} ${isWhiteBackground ? "navDarkRightSide" : "navWhiteRightSide"}`}>
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
              {!user && "Log out"}
              {!!user && "Log out"}
            </button>
            <button className="navButton">Get Access</button>
          </div>
        </div>
      <div className={
        isWhiteBackground
          ? "navDarkRightSideMenuBar"
          : "navWhiteRightSideMenuBar"
      }>
        <div className="hamburgerContainer" id={isWhiteBackground ? "darkHamburger" : "whiteHamburger" } onClick={() => {
          console.log("here")
          navMenuClicked()
        }}>
          <Hamburger />
        </div>
      </div>
    </div>
  );
};
