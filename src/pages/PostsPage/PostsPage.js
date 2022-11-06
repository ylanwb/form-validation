import "./PostsPage.css";
import React, { useEffect } from "react";
import axios from "axios";
import { format } from "date-fns";
import moment from "moment";
import Modal from "react-modal";
import { useState } from "react";
import {
  Footer,
  Header,
  Notification,
  DeleteModal,
  UpdateModal,
  CreateModal,
} from "../../components/index";

import Alert from "@mui/material/Alert";
import { id } from "date-fns/locale";
import { data } from "../../data";

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

const PostsPage = () => {
  const ref = React.createRef();
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [valueOfSearchbar, setValueOfSearchbar] = useState("");

  const [loading, setLoading] = useState();
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [selectedPost, setSelectedPost] = useState();
  const [buttonType, setButtonType] = useState();
  const [deleteSuccess, setDeleteSuccess] = useState(false);
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const [createSuccess, setCreateSuccess] = useState(false);
  const [selectedDropDown, setSelectedDropDown] = useState();

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  // const [isOpen, setOpen] = useState(false);
  const toggleDropdown = (e, post) => {
    // setOpen(!isOpen);
    if (selectedDropDown === "") {
      setSelectedDropDown(post);
    } else {
      setSelectedDropDown("");
    }
    e.preventDefault();
    console.log("clicked");
  };

  const handleDeleteButton = (e, post) => {
    e.preventDefault();
    setSelectedPost(post);
    openModal();
    setButtonType("delete");
  };
  const handleUpdateButton = (e, post) => {
    e.preventDefault();
    setSelectedPost(post);
    openModal();
    setButtonType("update");
  };
  const handleCreateButton = (e, post) => {
    e.preventDefault();
    openModal();
    setButtonType("create");
  };

  useEffect(() => {
    axios
      .get("https://dummyapi.io/data/v1/post?limit=10", {
        headers: { "app-id": "634752bc7580f70e4f699960" },
      })
      .then((response) => {
        setLoading(true);
        setTimeout(() => {
          setData(response.data.data);
          setFilteredData(response.data.data);
          setLoading(false);
        }, 1000);
      })
      .catch((err) => <Notification text={err.message} type="error" />);
  }, []);

  useEffect(() => {
    filtered(valueOfSearchbar);
  }, [valueOfSearchbar]);

  const filtered = (e) => {
    const filtered =
    data &&
    data.filter((item) => {
        const dataItems =
          item.owner.title +
          " " +
          item.owner.firstName +
          " " +
          item.owner.lastName;
        const filteredItem = dataItems.toLowerCase().includes(e.toLowerCase());
        return filteredItem;
      });
    setFilteredData(filtered);
  };
  return (
    <>
      <div className="postsPageMainContainer">
        <Header />
        <div className="contentHeaderContainer">
          <h1>Posts list</h1>
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
        {loading && <div className="loadingText">Loading ...</div>}
        <div className="dataContainer">
          <div className="postContainer">
            {!loading &&
              filteredData &&
              filteredData.length > 0 &&
              filteredData.map((post) => {
                // console.log(post);
                return (
                  // id, image, likes, owner, publishDate, tags, text
                  <div
                    className="postDataCardContainer"
                    key={post.id}
                    onClick={(e) => {
                      toggleDropdown(e, post);
                    }}
                  >
                    <div className="postDataCard" key={post.id}>
                      <div className="postCardHeader">
                        <img
                          id="postCardUserImg"
                          src={post.owner.picture}
                          alt=""
                        />
                        <div>
                          <div>
                            <span>{post.owner.title}</span>
                            <span>{post.owner.firstName}</span>
                            <span>{post.owner.lastName}</span>
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
                          {/* <div className="postCardSideCaption"> */}
                          <span>
                            {moment(post.publishDate)
                              .utc()
                              .format("YYYY-MM-DD kk:mm")}
                          </span>
                          <span>{post.text}</span>
                          <span className="tagContainer">
                            <div>{post.tags[0]}</div>
                            <div>{post.tags[1]}</div>
                            <div>{post.tags[2]}</div>
                          </span>
                          <span className="likesContainer">
                            <img
                              id="thumbsUpIcon"
                              src="https://dummyapi.io/img/like.svg"
                            />
                            {post.likes}
                          </span>
                          {/* </div> */}
                        </div>
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
          {!loading && <Footer />}
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
              selectedPost={selectedPost}
              closeModal={closeModal}
              setCreateSuccess={setCreateSuccess}
              dataType={"post"}
            />
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
export default PostsPage;
