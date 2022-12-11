import "./BlogPage.css";
const React = require("react")
const { Footer } = require("../../components/Footer/Footer");
const { Header } = require("../../components/Header/Header");
const { GrayArrowV2 } = require("../../components/Icons/GrayArrowV2");
const { Navigate } = require("react-router");
const { useNavigate } = require("react-router-dom");
const { data } = require("../../data");

const BlogCard = (props: any) => {
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

const BlogPage = ({}) => {
  let navigate = useNavigate();

  const handleClickArticle = (id: any) => {
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
        {data.map((blog: any) => {
          return <BlogCard {...blog} handleClickArticle={handleClickArticle} />;
        })}
      </div>
      <button className="blogNextButton">Next</button>
      <Footer />
    </div>
  );
};

export default BlogPage;