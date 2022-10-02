import "./LandingPage.css";
import BlueArrow from "../components/Icons/BlueArrow";
import Stars from "../components/Icons/Stars";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

const LandingPage = ({ user }) => {
  return (
    <div className="homePageMainContainer">
      <div className="contents contentOne">
        <div className="leftSideOne">
          <Header user={user} />
          <div className="leftSideOneContent">
            <span className="titleTexts">
              Instant collaborations for remote teams
            </span>
            <span className="contentTexts">
              All in one for your remote team chats, collaboration and track
              projects
            </span>
            <div className="earlyAccessContainer">
              <input
                type="text"
                placeholder="Email"
                id="earlyAccessInputBar"
              ></input>
              <button id="earlyAccessButton">Get Early Access</button>
            </div>
          </div>
        </div>
        <div className="rightSideOne"></div>
      </div>
      <div className="contents contentTwo">
        <div className="leftSideTwo">
          <div className="leftSideTwoContent">
            <span className="titleTextsV2">Your Hub for teamwork</span>
            <span className="contentTextsV2">
              Give everyone you work with—inside and outside your company—a more
              productive way to stay in sync. Respond faster with emoji, keep
              conversations focused in channels, and simplify all your
              communication into one place.
            </span>
            <span className="learnMoreTexts">
              Learn more
              <BlueArrow id="blueArrow" />
            </span>
          </div>
        </div>
        <div className="rightSideTwo">
          <div className="rightSideTwoContent">
            <img
              className="meetingsImg"
              alt="test"
              src={
                "https://media.discordapp.net/attachments/1004621319901552710/1023528249432748042/unknown.png"
              }
            />
          </div>
        </div>
      </div>
      <div className="contents contentThree">
        <div className="leftSideThree">
          <div className="leftSideThreeContent">
            <img
              className="taskManagementImg"
              alt="test"
              src={
                "https://media.discordapp.net/attachments/1004621319901552710/1023528459051483256/unknown.png"
              }
            />
          </div>
        </div>
        <div className="rightSideThree">
          <div className="rightSideThreeContent">
            <span className="titleTextsV2">Simple task management</span>
            <span className="contentTextsV2">
              Give everyone you work with—inside and outside your company—a more
              productive way to stay in sync. Respond faster with emoji, keep
              conversations focused in channels, and simplify all your
              communication into one place.
            </span>
            <span className="learnMoreTexts">
              Learn more <BlueArrow id="blueArrow" />
            </span>
          </div>
        </div>
      </div>
      <div className="contents contentFour">
        <div className="leftSideFour">
          <div className="leftSideFourContent">
            <span className="titleTextsV2">Scheduling that actually works</span>
            <span className="contentTextsV2">
              Give everyone you work with—inside and outside your company—a more
              productive way to stay in sync. Respond faster with emoji, keep
              conversations focused in channels, and simplify all your
              communication into one place.
            </span>
            <span className="learnMoreTexts">
              Learn more <BlueArrow id="blueArrow" />
            </span>
          </div>
        </div>
        <div className="rightSideFour">
          <div className="rightSideFourContent">
            <img
              className="schedulingImg"
              alt="test"
              src={
                "https://media.discordapp.net/attachments/1004621319901552710/1023528510834360400/unknown.png"
              }
            />
          </div>
        </div>
      </div>
      <div className="contents contentFive">
        <div className="contentFiveTop">
          <span className="titleTextsV2">What people say about us</span>
        </div>
        <div className="contentFiveBottom">
          <div className="reviewOne reviews">
            <div className="starContainer">
              <Stars />
              <Stars />
              <Stars />
              <Stars />
              <Stars />
            </div>
            <div className="reviewTexts">
              <span className="contentTextsV3">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </span>
            </div>
            <div className="userInfo">
              <img
                className="userPictures"
                alt="test"
                src="https://media.discordapp.net/attachments/1004621319901552710/1023528547094118530/unknown.png"
              />
              <span className="titleTextsV3">Amy Klassen</span>
            </div>
          </div>
          <div className="reviewTwo reviews">
            <div className="starContainer">
              <Stars />
              <Stars />
              <Stars />
              <Stars />
              <Stars />
            </div>
            <div className="reviewTexts">
              <span className="contentTextsV3">
                Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
                ullamco cillum dolor. Voluptate exercitation incididunt aliquip
                deserunt reprehenderit elit laborum.
              </span>
            </div>
            <div className="userInfo">
              <img
                className="userPictures"
                alt="test"
                src="https://media.discordapp.net/attachments/1004621319901552710/1023528587783065610/unknown.png"
              />
              <span className="titleTextsV3">Jane Cooper</span>
            </div>
          </div>
          <div className="reviewThree reviews">
            <div className="starContainer">
              <Stars />
              <Stars />
              <Stars />
              <Stars />
              <Stars />
            </div>
            <div className="reviewTexts">
              <span className="contentTextsV3">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </span>
            </div>
            <div className="userInfo">
              <img
                className="userPictures"
                alt="test"
                src="https://media.discordapp.net/attachments/1004621319901552710/1023528616069443624/unknown.png"
              />
              <span className="titleTextsV3">Eleanor Pena</span>
            </div>
          </div>
          <div className="reviewFour reviews">
            <div className="starContainer">
              <Stars />
              <Stars />
              <Stars />
              <Stars />
              <Stars />
            </div>
            <div className="reviewTexts">
              <span className="contentTextsV3">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </span>
            </div>
            <div className="userInfo">
              <img
                className="userPictures"
                alt="test"
                src="https://media.discordapp.net/attachments/1004621319901552710/1023528645890953246/unknown.png"
              />
              <span className="titleTextsV3">random woman</span>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
