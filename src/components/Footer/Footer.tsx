import React from "react";
import "./Footer.css";
import { Bluebox, Instagram, Facebook, Twitter, BlueArrowV2 } from "../index";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footerContents footerContentOne">
        <div className="footerLeftSide">
          <span id="footerLogo">
            team
            <Bluebox id="blueBox" />
          </span>
          <span id="footerSocialLinks">
            <Instagram />
            Instagram
          </span>
          <span id="footerSocialLinks">
            <Facebook />
            Facebook
          </span>
          <span id="footerSocialLinks">
            <Twitter />
            Twitter
          </span>
        </div>
      </div>
      <div className="footerContents footerContentTwo">
        <div className="firstSet">
          <p id="captions">Use Cases</p>
          <span className="middleLinks">UI Design</span>
          <span className="middleLinks">UX Design</span>
          <span className="middleLinks">Prototyping</span>
        </div>
        <div className="secondSet">
          <p id="captions">Use Cases</p>
          <span className="middleLinks">UI Design</span>
          <span className="middleLinks">UX Design</span>
          <span className="middleLinks">Prototyping</span>
        </div>
        <div className="thirdSet">
          <p id="captions">Use Cases</p>
          <span className="middleLinks">UI Design</span>
          <span className="middleLinks">UX Design</span>
          <span className="middleLinks">Prototyping</span>
        </div>
      </div>
      <div className="footerContents footerContentThree">
        <div className="footerRightSide">
          <span id="newsPaper">Subscribe to our newsletter</span>
          <button id="footerButton">
            Email
            <BlueArrowV2 />
          </button>
        </div>
      </div>
    </div>
  );
};
