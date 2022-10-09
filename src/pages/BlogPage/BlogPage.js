import "./BlogPage.css";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { GrayArrowV2 } from "../../components/Icons/GrayArrowV2";
const BlogPage = ({ user }) => {
  return (
    <div className="blogPageMainContainer">
      <div className="blogContentContainer">
        <div id="blogTitle">
          <h1>Blog posts</h1>
        </div>
        <div id="blogText">
          <p>Our latest updates and blogs about managing your team</p>
        </div>
      </div>
      <div className="blogPreviewContainer containerOne">
        <div className="blogPreviewBox boxOne">
          <img
            className="blogImages"
            src="https://media.discordapp.net/attachments/1004621319901552710/1028527636865101874/unknown.png"
          />
          <div class="blogContentContainer">
            <h1 className="blogContentTitles">
              The Emotional Toll of Being in UX
            </h1>
            <div className="blogContentTexts">
              <span>
                There are times when our work impacts us deeply — sometimes in
                ways we neither acknowledge nor understand
              </span>
            </div>
            <div className="blogUsersInfoContainer">
              <img
                id="blogUserPictures"
                alt="blogUser"
                src="https://cdn.discordapp.com/attachments/1004621319901552710/1028604183286403122/unknown.png"
              />
              <span id="blogUserName" className="infoTexts">
                Wade Warren
              </span>
              <span id="blogDate" className="infoTexts">
                2nd January, 2022
              </span>
            </div>
          </div>
        </div>
        <div className="blogPreviewBox boxTwo">
          <img
            className="blogImages"
            src="https://cdn.discordapp.com/attachments/1004621319901552710/1028605641968848937/unknown.png"
          />
          <div class="blogContentContainer">
            <h1 className="blogContentTitles">
              10 secret tips for managing a team remotely
            </h1>
            <div className="blogContentTexts">
              <span>Our latest updates and blogs about managing your team</span>
            </div>
            <div className="blogUsersInfoContainer">
              <img
                id="blogUserPictures"
                alt="blogUser"
                src="https://cdn.discordapp.com/attachments/1004621319901552710/1028605664190267432/unknown.png"
              />
              <span id="blogUserName" className="infoTexts">
                Bessie Cooper
              </span>
              <span id="blogDate" className="infoTexts">
                2nd January, 2022
              </span>
            </div>
          </div>
        </div>
        <div className="blogPreviewBox boxThree">
          <img
            className="blogImages"
            src="https://cdn.discordapp.com/attachments/1004621319901552710/1028605868385779773/unknown.png"
          />
          <div class="blogContentContainer">
            <h1 className="blogContentTitles">
              What Ever Happened to Steampunk?
            </h1>
            <div className="blogContentTexts">
              <span>
                How the iPhone popularized steampunk… and how the iPhone killed
                it off
              </span>
            </div>
            <div className="blogUsersInfoContainer">
              <img
                id="blogUserPictures"
                alt="blogUser"
                src="https://cdn.discordapp.com/attachments/1004621319901552710/1028605889780908062/unknown.png"
              />
              <span id="blogUserName" className="infoTexts">
                Courtney Henry
              </span>
              <span id="blogDate" className="infoTexts">
                2nd January, 2022
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="blogPreviewContainer containerTwo">
        <div className="blogPreviewBox boxFour">
          <img
            className="blogImages"
            src="https://media.discordapp.net/attachments/1004621319901552710/1028527636865101874/unknown.png"
          />
          <div class="blogContentContainer">
            <h1 className="blogContentTitles">
              The Emotional Toll of Being in UX
            </h1>
            <div className="blogContentTexts">
              <span>
                There are times when our work impacts us deeply — sometimes in
                ways we neither acknowledge nor understand
              </span>
            </div>
            <div className="blogUsersInfoContainer">
              <img
                id="blogUserPictures"
                alt="blogUser"
                src="https://cdn.discordapp.com/attachments/1004621319901552710/1028604183286403122/unknown.png"
              />
              <span id="blogUserName" className="infoTexts">
                Wade Warren
              </span>
              <span id="blogDate" className="infoTexts">
                2nd January, 2022
              </span>
            </div>
          </div>
        </div>
        <div className="blogPreviewBox boxFive">
          <img
            className="blogImages"
            src="https://cdn.discordapp.com/attachments/1004621319901552710/1028605641968848937/unknown.png"
          />
          <div class="blogContentContainer">
            <h1 className="blogContentTitles">
              The Emotional Toll of Being in UX
            </h1>
            <div className="blogContentTexts">
              <span>
                There are times when our work impacts us deeply — sometimes in
                ways we neither acknowledge nor understand
              </span>
            </div>
            <div className="blogUsersInfoContainer">
              <img
                id="blogUserPictures"
                alt="blogUser"
                src="https://cdn.discordapp.com/attachments/1004621319901552710/1028604183286403122/unknown.png"
              />
              <span id="blogUserName" className="infoTexts">
                Wade Warren
              </span>
              <span id="blogDate" className="infoTexts">
                2nd January, 2022
              </span>
            </div>
          </div>
        </div>
        <div className="blogPreviewBox boxSix">
          <img
            className="blogImages"
            src="https://cdn.discordapp.com/attachments/1004621319901552710/1028605868385779773/unknown.png"
          />
          <div class="blogContentContainer">
            <h1 className="blogContentTitles">
              The Emotional Toll of Being in UX
            </h1>
            <div className="blogContentTexts">
              <span>
                There are times when our work impacts us deeply — sometimes in
                ways we neither acknowledge nor understand
              </span>
            </div>
            <div className="blogUsersInfoContainer">
              <img
                id="blogUserPictures"
                alt="blogUser"
                src="https://cdn.discordapp.com/attachments/1004621319901552710/1028604183286403122/unknown.png"
              />
              <span id="blogUserName" className="infoTexts">
                Wade Warren
              </span>
              <span id="blogDate" className="infoTexts">
                2nd January, 2022
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="blogPreviewContainer containerThree">
        <div className="blogPreviewBox boxSeven">
          <img
            className="blogImages"
            src="https://media.discordapp.net/attachments/1004621319901552710/1028527636865101874/unknown.png"
          />
          <div class="blogContentContainer">
            <h1 className="blogContentTitles">
              The Emotional Toll of Being in UX
            </h1>
            <div className="blogContentTexts">
              <span>
                There are times when our work impacts us deeply — sometimes in
                ways we neither acknowledge nor understand
              </span>
            </div>
            <div className="blogUsersInfoContainer">
              <img
                id="blogUserPictures"
                alt="blogUser"
                src="https://cdn.discordapp.com/attachments/1004621319901552710/1028604183286403122/unknown.png"
              />
              <span id="blogUserName" className="infoTexts">
                Wade Warren
              </span>
              <span id="blogDate" className="infoTexts">
                2nd January, 2022
              </span>
            </div>
          </div>
        </div>
        <div className="blogPreviewBox boxEight">
          <img
            className="blogImages"
            src="https://cdn.discordapp.com/attachments/1004621319901552710/1028605641968848937/unknown.png"
          />
          <div class="blogContentContainer">
            <h1 className="blogContentTitles">
              The Emotional Toll of Being in UX
            </h1>
            <div className="blogContentTexts">
              <span>
                There are times when our work impacts us deeply — sometimes in
                ways we neither acknowledge nor understand
              </span>
            </div>
            <div className="blogUsersInfoContainer">
              <img
                id="blogUserPictures"
                alt="blogUser"
                src="https://cdn.discordapp.com/attachments/1004621319901552710/1028604183286403122/unknown.png"
              />
              <span id="blogUserName" className="infoTexts">
                Wade Warren
              </span>
              <span id="blogDate" className="infoTexts">
                2nd January, 2022
              </span>
            </div>
          </div>
        </div>
        <div className="blogPreviewBox boxNine">
          <img
            className="blogImages"
            src="https://cdn.discordapp.com/attachments/1004621319901552710/1028605868385779773/unknown.png"
          />
          <div class="blogContentContainer">
            <h1 className="blogContentTitles">
              The Emotional Toll of Being in UX
            </h1>
            <div className="blogContentTexts">
              <span>
                There are times when our work impacts us deeply — sometimes in
                ways we neither acknowledge nor understand
              </span>
            </div>
            <div className="blogUsersInfoContainer">
              <img
                id="blogUserPictures"
                alt="blogUser"
                src="https://cdn.discordapp.com/attachments/1004621319901552710/1028604183286403122/unknown.png"
              />
              <span id="blogUserName" className="infoTexts">
                Wade Warren
              </span>
              <span id="blogDate" className="infoTexts">
                2nd January, 2022
              </span>
            </div>
          </div>
        </div>
      </div>
      <button className="blogNextButton">Next</button>
      <Footer />
    </div>
  );
};

export default BlogPage;
