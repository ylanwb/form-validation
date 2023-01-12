import React, { useState, useEffect } from "react";
import axios from "axios";
import "./LandingPage.css";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import {
  BlueArrow,
  Footer,
  Header,
  Notification,
} from "../../components/index";

interface ILandingPage {
  user?: boolean | undefined;
  email?: string;
}
export interface Post {
  _id?: string;
  title: string;
  owner: string;
  publishDate: string;
  content: string;
  image: string;
}

export const LandingPage: React.FC<ILandingPage> = ({ user }) => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const [loading, setLoading] = useState<boolean>();

  const handlePostsButton = () => {
    navigate("/posts");
  };

  useEffect(() => {
    axios
      .get("http://localhost:1212/posts", {
        headers: { "app-id": "634752bc7580f70e4f699960" },
      })
      .then((response) => {
        setTimeout(() => {
          setData(response.data);
          setFilteredData(response.data);
          console.log(response);
          setLoading(false);
        }, 1000);
      })
      .catch((err) => <Notification text={err.message} type="error" />);
  }, []);
  return (
    <div className="homePageMainContainer">
      <div className="contentsBlur"></div>
      <Header isWhiteBackground={false} />
      <div className="contents contentOne">
        <div className="leftSideOne">
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
      <div className="homePostsContainer">
        <div className="homeDataContainer">
          <h1>Posts</h1>
          <button
            onClick={() => {
              console.log("here");
              handlePostsButton();
            }}
          >
            Posts Page &gt;
          </button>
          <ul id="scroller">
            {filteredData?.map((post: Post) => {
              return (
                <>
                  <div className="postDataCard" key={post._id}>
                    <div className="postCardHeader">
                      <div>
                        <div>
                          <span id="postTitle">{post.title}</span>
                        </div>
                        <span>
                          {moment(post.publishDate)
                            .utc()
                            .format("YYYY-MM-DD kk:mm")}
                        </span>
                      </div>
                    </div>
                    <div className="postCardBody">
                      <div className="postCardImgContainer">
                        <img id="postCardImg" src={post.image} alt="dog" />
                      </div>
                      <div className="postCardSideCaptionContainer">
                        <span>{post.content}</span>
                      </div>
                    </div>
                    <span id="postOwner">{post.owner}</span>
                  </div>
                </>
              );
            })}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};
