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
      <Header user={user} isWhiteBackground={true} />
      <div className="homePageContentContainer">
        <h1>Most Favorited Posts</h1>
        <div id="scroll-progress"></div>
        <ul id="scroller">
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>7</li>
          <li>8</li>
          <li>9</li>
          <li>10</li>
          <li>11</li>
          <li>12</li>
          <li>13</li>
          <li>14</li>
          <li>15</li>
        </ul>
      </div>
      <Footer />
    </div>
  );
};
