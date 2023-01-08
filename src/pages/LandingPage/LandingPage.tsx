import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import { Footer, Header, Notification } from "../../components/index";
import "./LandingPage.css";

export interface Post {
  _id?: string;
  title: string;
  owner: string;
  publishDate: string;
  content: string;
  image: string;
}

export const LandingPage = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const [loading, setLoading] = useState<boolean>();
  // const [selectedPost, setSelectedPost] = useState<Post>({
  //   _id: "",
  //   title: "",
  //   owner: "",
  //   publishDate: "",
  //   content: "",
  //   image: "",
  // });

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
    <>
      <div className="postsPageMainContainer">
        <Header />
        <div className="contentHeaderContainer">
          <h1>Home</h1>
        </div>
        <div className="dataContainer">
          <div className="postContainer">
            {filteredData?.map((post: any) => {
              return (
                <>
                  <div id="scroll-progress"></div>
                  <ul key={post.id} id="scroller">
                    <li>{post.title}</li>
                    <li>{post.content}</li>
                  </ul>
                </>
              );
            })}
          </div>
          {!(loading ?? false) && <Footer />}
        </div>
      </div>
    </>
  );
};
export default LandingPage;

// import React, { useRef, useState } from "react";
// import "./LandingPage.css";
// import { Footer, Header } from "../../components/index";

// interface ILandingPage {
//   user?: boolean | undefined;
//   email?: string;
// }

// export const LandingPage: React.FC<ILandingPage> = ({ user }) => {
//   // const elementRef = useRef(null);
//   // const [arrowDisable, setArrowDisable] = useState(true);
//   // const handleHorizantalScroll = (speed: any, distance: any, step: any) => {
//   // let scrollAmount = 0;
//   // const reviewScroll = document.getElementById(
//   // "contentFiveBtm"
//   // ) as HTMLElement;
//   // const slideTimer = setInterval(() => {
//   //   reviewScroll.scrollLeft += step;
//   //   scrollAmount += Math.abs(step);
//   //   if (scrollAmount >= distance) {
//   //     clearInterval(slideTimer);
//   //   }
//   //   if (reviewScroll.scrollLeft === 0) {
//   //     setArrowDisable(true);
//   //   } else {
//   //     setArrowDisable(false);
//   //   }
//   // }, speed);
//   //   console.log("clicked");
//   // };

//   return (
//     <div className="homePageMainContainer">
//       <Header isWhiteBackground={true} />
//       <div className="homePageContentContainer">
//         <h1>Most Favorited Posts</h1>
//         <div id="scroll-progress"></div>
//         <ul id="scroller">
//           <li></li>
//           <li></li>
//           <li></li>
//           <li></li>
//           <li></li>
//           <li></li>
//           <li></li>
//           <li></li>
//           <li></li>
//           <li></li>
//           <li></li>
//           <li></li>
//           <li></li>
//           <li></li>
//           <li></li>
//         </ul>
//       </div>
//       <Footer />
//     </div>
//   );
// };
