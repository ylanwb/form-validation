import "./BlogPage.css";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { GrayArrowV2 } from "../../components/Icons/GrayArrowV2";
import { Navigate } from "react-router";
import { useNavigate } from "react-router-dom";
import { data } from "../../data";

const BlogCard = (props) => {
  const { title, date, image, id, subText, name, blogImg, handleClickArticle } = props;
  return (
    <div
      className="blogPreviewBox boxOne"
      style={{ cursor: "pointer" }}
      onClick={() => {
        handleClickArticle(id);
      }}
    >
      <img
        alt="test"
        className="blogImages"
        src={blogImg}
      />
      <div className="blogContentContainer">
        <h1 className="blogContentTitles">{title}</h1>
        <div className="blogContentTexts">
          <span>{subText}</span>
        </div>
        <div className="blogUsersInfoContainer">
          {image}
          <span id="blogUserName" className="infoTexts">
            {name}
          </span>
          <span id="blogDate" className="infoTexts">
            {date}
          </span>
        </div>
      </div>
    </div>
  );
};

const BlogPage = ({ user }) => {
  let navigate = useNavigate();

  const handleClickArticle = (id) => {
    navigate(`/blog/${id}`);
  };
  return (
    <div className="blogPageMainContainer">
      <Header />
      <div className="blogContentContainer">
        <div id="blogTitle">
          <h1>Blog posts</h1>
        </div>
        <div id="blogText">
          <p>Our latest updates and blogs about managing your team</p>
        </div>
      </div>
      <div className="blogCardContainer">
        {data.map((blog) => {
          return <BlogCard {...blog} handleClickArticle={handleClickArticle} />;
        })}
      </div>
      <button className="blogNextButton">Next</button>
      <Footer />
    </div>
  );
};

export default BlogPage;