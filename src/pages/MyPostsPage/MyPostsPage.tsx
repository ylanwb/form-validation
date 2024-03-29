import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import Modal from "react-modal";
import {
  Footer,
  Header,
  Notification,
  DeleteModal,
  UpdateModal,
  CreateModal,
  PostModal,
} from "../../components/index";
import "./MyPostsPage.css";
import Alert from "@mui/material/Alert";
import { useUserProvider } from "src/provider/UserProvider";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "8px",
  },
};

export interface Post {
  id: string;
  title: string;
  owner: string;
  publishDate: string;
  content: string;
  image: string;
}

const MyPostsPage = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [valueOfSearchbar, setValueOfSearchbar] = useState("");
  const { token } = useUserProvider();
  const [loading, setLoading] = useState<boolean>();
  const [modalIsOpen, setIsOpen] = React.useState<boolean>(false);
  const [selectedPost, setSelectedPost] = useState<Post>({
    id: "",
    title: "",
    owner: "",
    publishDate: "",
    content: "",
    image: "",
  });
  const [buttonType, setButtonType] = useState<string>();
  const [deleteSuccess, setDeleteSuccess] = useState<boolean>(false);
  const [updateSuccess, setUpdateSuccess] = useState<boolean>(false);
  const [createSuccess, setCreateSuccess] = useState<boolean>(false);
  const [selectedDropDown, setSelectedDropDown] = useState<string>();

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  // const [isOpen, setOpen] = useState(false);
  const toggleDropdown = (e: React.MouseEvent, post: any) => {
    // setOpen(!isOpen);
    if (selectedDropDown === "") {
      setSelectedDropDown(post);
    } else {
      setSelectedDropDown("");
    }
    e.preventDefault();
    console.log("clicked");
  };

  const handleDeleteButton = (e: React.MouseEvent, post: any) => {
    e.preventDefault();
    setSelectedPost(post);
    openModal();
    setButtonType("delete");
  };
  const handleUpdateButton = (e: React.MouseEvent, post: any) => {
    e.preventDefault();
    setSelectedPost(post);
    openModal();
    setButtonType("update");
  };
  const handleCreateButton = (e: React.MouseEvent) => {
    e.preventDefault();
    openModal();
    setButtonType("create");
  };

  // comments
  const handleCommentButton = (e: React.MouseEvent, post: any) => {
    e.preventDefault();
    setSelectedPost(post);
    openModal();
    setButtonType("comment");
  };

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (!userId) {
      console.log("no user");
    } else {
      axios
        .get(`http://localhost:1212/users/${userId}/posts`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setLoading(true);
          setTimeout(() => {
            setData(response.data);
            setFilteredData(response.data);
            setLoading(false);
          }, 1000);
        })
        .catch((err) => <Notification text={err.message} type="error" />);
    }
  }, []);

  // search bar
  useEffect(() => {
    filtered(valueOfSearchbar);
  }, [valueOfSearchbar]);

  const filtered = (e: string) => {
    setFilteredData(
      data.filter((item: { title: string; id: string; content: string }) => {
        const dataItems = item.title + " " + item.id + " " + item.content;
        const filteredItem = dataItems.toLowerCase().includes(e.toLowerCase());
        return filteredItem;
      })
    );
  };
  return (
    <>
      <div className="postsPageMainContainer">
        <Header />
        <div className="contentHeaderContainer">
          <h1>My Posts</h1>
        </div>
        <div className="postInteractives">
          <div className="postSearchBarContainer">
            <input
              type="search"
              className="searchBar"
              placeholder="Search"
              value={valueOfSearchbar}
              onChange={(e) => {
                setValueOfSearchbar(e.target.value);
              }}
            />
          </div>
          <div className="createPostContainer">
            <button
              className="createPostBtn"
              onClick={(e) => {
                handleCreateButton(e);
              }}
            >
              Create
            </button>
          </div>
        </div>
        {(loading ?? false) && <div className="loadingText">Loading ...</div>}
        <div className="dataContainer">
          <div className="postContainer">
            {!(loading ?? false) &&
              filteredData &&
              filteredData.map((post: any) => {
                return (
                  <div
                    className="postDataCardContainer"
                    key={post.id}
                    onClick={(e) => {
                      // toggleDropdown(e, post);
                    }}
                  >
                    <div className="postDataCard" key={post.id}>
                      <div className="postCardHeader">
                        <div>
                          <div>
                            <span id="postTitle">{post.title}</span>
                          </div>
                          <span id="postDate">
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
                          <span id="postContent">{post.content}</span>
                        </div>
                      </div>
                      <div className="postCardFooter">
                        <span id="postOwner">{post.owner}</span>
                        <p
                          id="commentDropDown"
                          onClick={(e) => {
                            // handleCommentButton(e, post);
                          }}
                        >
                          ...
                        </p>
                      </div>
                    </div>
                    {selectedDropDown === post && (
                      <div className={`dropDown`}>
                        {/* ${isOpen && "open"} */}
                        <div className="postCardButtonContainer">
                          <button
                            id="updateBtn"
                            onClick={(e) => {
                              handleUpdateButton(e, post);
                            }}
                          >
                            Update
                          </button>
                          <button
                            id="deleteBtn"
                            onClick={(e) => {
                              handleDeleteButton(e, post);
                            }}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
          </div>
          {!(loading ?? false) && <Footer />}
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        ariaHideApp={false}
        contentLabel="Example Modal"
      >
        <div>
          {buttonType === "delete" && (
            <DeleteModal
              selectedPost={selectedPost}
              closeModal={closeModal}
              setDeleteSuccess={setDeleteSuccess}
              dataType={"post"}
            />
          )}
          {buttonType === "update" && (
            <UpdateModal
              selectedPost={selectedPost}
              closeModal={closeModal}
              setUpdateSuccess={setUpdateSuccess}
              dataType={"post"}
            />
          )}
          {buttonType === "create" && (
            <CreateModal
              closeModal={closeModal}
              setCreateSuccess={setCreateSuccess}
              dataType={"post"}
            />
          )}
          {buttonType === "post" && (
            <PostModal selectedPost={selectedPost} closeModal={closeModal} />
          )}
        </div>
      </Modal>
      {deleteSuccess && (
        <div className={`alertSuccess ${deleteSuccess && "alertSlide"}`}>
          <Alert severity="success" color="success">
            Successfully deleted post
          </Alert>
        </div>
      )}
      {updateSuccess && (
        <div className={`alertSuccess ${updateSuccess && "alertSlide"}`}>
          <Alert severity="success" color="success">
            Successfully updated post
          </Alert>
        </div>
      )}
      {createSuccess && (
        <div className={`alertSuccess ${createSuccess && "alertSlide"}`}>
          <Alert severity="success" color="success">
            Successfully created post
          </Alert>
        </div>
      )}
    </>
  );
};
export default MyPostsPage;
