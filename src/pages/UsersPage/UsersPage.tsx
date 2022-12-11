import "./UsersPage.css";
import React, { useEffect } from "react";
import axios from "axios";
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

const UsersPage = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [valueOfSearchbar, setValueOfSearchbar] = useState<string>("");

  const [loading, setLoading] = useState<boolean>();
  const [modalIsOpen, setIsOpen] = React.useState<boolean>(false);
  const [selectedPost, setSelectedPost] = useState();
  const [buttonType, setButtonType] = useState<string>();
  const [deleteSuccess, setDeleteSuccess] = useState<boolean>(false);
  const [updateSuccess, setUpdateSuccess] = useState<boolean>(false);
  const [createSuccess, setCreateSuccess] = useState<boolean>(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  const [selectedDropDown, setSelectedDropDown] = useState<any>();
  const toggleDropdown = (e: React.MouseEvent, post: any ) => {
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

  useEffect(() => {
    axios
      .get("https://dummyapi.io/data/v1/user?created=1?limit=10", {
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

  const filtered = (e: any) => {
    const filtered =
      data &&
      data.filter((item: any) => {
        const dataItems =
          item.title + " " + item.firstName + " " + item.lastName;
        const filteredItem = dataItems.toLowerCase().includes(e.toLowerCase());
        return filteredItem;
      });
    setFilteredData(filtered);
  };
  return (
    <>
      <div className="usersPageMainContainer">
        <Header user={user} isWhiteBackground={true} />
        <div className="contentHeaderContainer">
          <h1>Users</h1>
        </div>
        <div className="userInteractives">
          <div className="searchBarContainer">
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
          <div className="createUserContainer">
            <button
              className="createUserBtn"
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
          <div className="userContainer">
            {!loading &&
              filteredData &&
              filteredData.length > 0 &&
              filteredData.map((user: any) => {
                return (
                  <div
                    className="userDataCardContainer"
                    key={user.id}
                    onClick={(e) => {
                      toggleDropdown(e, user);
                    }}
                  >
                    <div className="userDataCard">
                      <img id="userPic" src={user.picture} />
                      <div id="userId">{user.id}</div>
                      <div className="userInfoContainer">
                        <span>{user.title}</span>
                        <span>{user.firstName}</span>
                        <span>{user.lastName}</span>
                      </div>
                    </div>
                    {selectedDropDown === user && (
                      <div className={`dropDown`}>
                        {/* ${isOpen && "open"} */}
                        <div className="postCardButtonContainer">
                          <button
                            id="updateBtn"
                            onClick={(e) => {
                              handleUpdateButton(e, user);
                            }}
                          >
                            Update
                          </button>
                          <button
                            id="deleteBtn"
                            onClick={(e) => {
                              handleDeleteButton(e, user);
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
              dataType={"user"}
            />
          )}
          {buttonType === "update" && (
            <UpdateModal
              selectedPost={selectedPost}
              closeModal={closeModal}
              setUpdateSuccess={setUpdateSuccess}
              dataType={"user"}
            />
          )}
          {buttonType === "create" && (
            <CreateModal
              selectedPost={selectedPost}
              closeModal={closeModal}
              setCreateSuccess={setCreateSuccess}
              dataType={"user"}
            />
          )}
        </div>
      </Modal>
      {deleteSuccess && (
        <div className={`alertSuccess ${deleteSuccess && "alertSlide"}`}>
          <Alert severity="success" color="success">
            Successfully deleted user
          </Alert>
        </div>
      )}
      {updateSuccess && (
        <div className={`alertSuccess ${updateSuccess && "alertSlide"}`}>
          <Alert severity="success" color="success">
            Successfully updated user
          </Alert>
        </div>
      )}
      {createSuccess && (
        <div className={`alertSuccess ${createSuccess && "alertSlide"}`}>
          <Alert severity="success" color="success">
            Successfully updated user
          </Alert>
        </div>
      )}
    </>
  );
};
export default UsersPage;
