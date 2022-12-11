import React from "react";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { useParams } from "react-router-dom";
import { data } from "../../data";
import "./ArticlePage.css";


interface IArticlePage {

}

const ArticlePage: React.FC<IArticlePage> = () => {
  const { id } = useParams();
  const selectedPost = data.find((post: any) => {
    return post.id === Number(id);
  });
  return (
    <>
      <div className="articlePageContainer">
        <Header />
        <div className="articleContentContainer">
          <div className="articleHeader">
            <h1 id="articleTitle">{selectedPost?.title}</h1>
            <div
              className="blogUsersInfoContainer"
              id="articleUsersInfoContainer"
            >
              <img
                id="articleUserPictures"
                alt="articleAuthor"
                src="https://cdn.discordapp.com/attachments/1004621319901552710/1028740015255212082/unknown.png"
              />
              <span id="articleUserName" className="articleInfoTexts">
                Shedrack Eze
              </span>
              <span id="articleDate" className="articleInfoTexts">
                2nd January, 2022
              </span>
            </div>
          </div>
          <img
            alt="img"
            id="articleImg"
            src="https://cdn.discordapp.com/attachments/1004621319901552710/1028739992018747472/unknown.png"
          />
          <div className="articleBody">
            <p className="articleBodyText">
              If you’re thinking of starting a blog of your own, but just don’t
              have a clue on what to blog about, then fear not!{" "}
            </p>

            <p className="articleBodyText">
              In this article, I have included a whole load of blog examples
              from a wide variety of different niches, all run on different
              blogging platforms like WordPress, Joomla! and Drupal.
            </p>

            <p className="articleBodyText">
              Since the beginning of the internet, millions and millions and
              millions of blogs have been created. Many have died due to lost
              interest or their owners giving up on the idea, while others have
              thrived and continue to grow, making money and earning their
              owners a steady income. It’s a constant evolution of content that
              keeps people coming back for more, especially if these blogs
              contact highly resourceful material that people find useful and
              interesting.
            </p>

            <p className="articleBodyText">
              Each example listed in this blog post are all different in some
              way and all bring something unique to their readers & subscribers.
              I want to show you what is possible and how you can take
              inspiration from them and create an awesome blog of your own.
            </p>

            <p className="articleBodyText">
              Some of these blogs make over $100k a month, others are just a
              hobby for their owners, but all have the same purpose at their
              core… the love of writing and sharing information.
            </p>
            <p className="articleBodyText">
              Some of these blogs make over $100k a month, others are just a
              hobby for their owners, but all have the same purpose at their
              core… the love of writing and{" "}
            </p>

            <p className="articleBodyText">
              Some of these blogs make over $100k a month, others are just a
              hobby for their owners, but all have the same purpose at their
              core… the love of writing and sharing information.
            </p>
            <p className="articleBodyText">
              Some of these blogs make over $100k a month, others are just a
              hobby for their owners, but all have the same purpose at their
              core… the love of writing and sharing information.
            </p>
            <div className="articleFooter">
              <div className="authorInfoContainer">
                <div>
                  <img
                    id="articleUserPictures"
                    src="https://cdn.discordapp.com/attachments/1004621319901552710/1028740015255212082/unknown.png"
                  />
                </div>
                <div className="articleUserInfo">
                  <span>Written by</span>
                  <span>Shedrack Eze</span>
                  <span>CEO Team App</span>
                </div>
              </div>
              <div className="readerCommentContainer">
                <span>Join the conversation</span>
                <div className="readerCommentContent">
                  <img
                    id="articleUserPictures"
                    src="https://cdn.discordapp.com/attachments/1004621319901552710/1028955304924287016/unknown.png"
                  />
                  <textarea id="userComment" placeholder="Comments"></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ArticlePage;
