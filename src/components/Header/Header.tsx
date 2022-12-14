import "./Header.css";
import { Bluebox } from "../index";
import React, { useState } from "react";
// import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { Spin as Hamburger } from "hamburger-react";
import Cookies from "js-cookie";
import { useUserProvider } from "src/provider/UserProvider";

interface IHeader {
  isWhiteBackground?: boolean;
}

export const Header: React.FC<IHeader> = (isWhiteBackground) => {
  const { user, setUser } = useUserProvider();
  // user and isWhiteBackground values empty hence the problem with logging out and font colors
  // useState? Like the menudropdown except this time we get the values from the other pages
  const navigate = useNavigate();
  const handleLogoutButton = () => {
    Cookies.remove("userToken");
    localStorage.clear()
    setUser(false);
    navigate("/");
  };
  const handlePostsButton = () => {
    navigate("/posts");
  };
  const handleMyPostsButton = () => {
    navigate("/myPosts");
  };
  const handleContactButton = () => {
    navigate("/contact");
  };
  const handleUserButton = () => {
    navigate("/users");
  };
  const handleHomeButton = () => {
    navigate("/");
  };

  const [isMenuActive, setIsMenuActive] = useState(false);

  const navMenuClicked = () => {
    if (!isMenuActive) {
      setIsMenuActive(true);
      console.log("menu is active!");
    } else if (isMenuActive) {
      setIsMenuActive(false);
      console.log("menu is off!");
    } else {
      console.log("error");
    }
  };
  return (
    <div className="navBar">
      <div className="navLeftSide">
        <div
          onClick={() => {
            handleHomeButton();
          }}
          className={`${isWhiteBackground ? "navDarkBackground" : "navWhiteBackground"
            }`}
        >
          <span>C</span>
          <Bluebox id="blueBox" />
        </div>
      </div>
      <div
        className={`${isMenuActive ? "menuSlide" : ""} ${isWhiteBackground ? "navDarkRightSide" : "navWhiteRightSide"
          }`}
      >
        <div
          className={`${isWhiteBackground
              ? "navDarkRightSideContent"
              : "navWhiteRightSideContent"
            }`}
          id="navRightSideContent"
        >
          {isMenuActive && <div className="menuDropDown"></div>}
          {/* <button
            className="navButton"
            onClick={() => {
              console.log("here");
              handleUserButton();
            }}
          >
            Users
          </button> */}
          <button
            className="navButton"
            onClick={() => {
              handleHomeButton();
            }}
          >
            Home
          </button>
          <button
            className="navButton"
            onClick={() => {
              console.log("here");
              handlePostsButton();
            }}
          >
            Posts
          </button>
          <button
            className="navButton"
            onClick={() => {
              console.log("here");
              handleMyPostsButton();
            }}
          >
            My Posts
          </button>
          <button
            className="navButton"
            onClick={() => {
              console.log("here");
              handleContactButton();
            }}
          >
            Contact
          </button>
          <button
            className="navButton"
            style={{ cursor: "pointer" }}
            onClick={() => {
              handleLogoutButton();
            }}
          >
            {user && "Log out"}
            {!user && "Log in"}
          </button>
          <button className="navButton">Get Access</button>
        </div>
      </div>
      <div
        className={
          isWhiteBackground
            ? "navDarkRightSideMenuBar"
            : "navWhiteRightSideMenuBar"
        }
      >
        <div
          className="hamburgerContainer"
          id={isWhiteBackground ? "darkHamburger" : "whiteHamburger"}
          onClick={() => {
            navMenuClicked();
          }}
        >
          <Hamburger />
        </div>
      </div>
    </div>
  );
};
