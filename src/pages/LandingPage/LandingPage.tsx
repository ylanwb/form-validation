import React, { useRef, useState } from "react";
import "./LandingPage.css";
import { Footer, Header } from "../../components/index";

interface ILandingPage {
  user?: boolean | undefined;
  email?: string;
}

export const LandingPage: React.FC<ILandingPage> = ({ user }) => {
  // const elementRef = useRef(null);
  // const [arrowDisable, setArrowDisable] = useState(true);
  // const handleHorizantalScroll = (speed: any, distance: any, step: any) => {
  // let scrollAmount = 0;
  // const reviewScroll = document.getElementById(
  // "contentFiveBtm"
  // ) as HTMLElement;
  // const slideTimer = setInterval(() => {
  //   reviewScroll.scrollLeft += step;
  //   scrollAmount += Math.abs(step);
  //   if (scrollAmount >= distance) {
  //     clearInterval(slideTimer);
  //   }
  //   if (reviewScroll.scrollLeft === 0) {
  //     setArrowDisable(true);
  //   } else {
  //     setArrowDisable(false);
  //   }
  // }, speed);
  //   console.log("clicked");
  // };

  return (
    <div className="homePageMainContainer">
      <Header isWhiteBackground={true} />
      <div className="homePageContentContainer">
        <h1>Most Favorited Posts</h1>
        <div id="scroll-progress"></div>
        <ul id="scroller">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <Footer />
    </div>
  );
};
