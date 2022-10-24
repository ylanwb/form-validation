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
  const [valueOfSearchbar, setValueOfSearchbar] = useState("");

  const [loading, setLoading] = useState();
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [selectedPost, setSelectedPost] = useState();
  const [buttonType, setButtonType] = useState();
  const [deleteSuccess, setDeleteSuccess] = useState(false);
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const [createSuccess, setCreateSuccess] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

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
      .get("https://dummyapi.io/data/v1/user?limit=100", {
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
          item.title + " " + item.firstName + " " + item.lastName;
        const filteredItem = dataItems.toLowerCase().includes(e.toLowerCase());
        return filteredItem;
      });
    setFilteredData(filtered);
  };
  return (
    <>
      <div className="usersPageMainContainer">
        <Header />
        <h1>Users</h1>
        <br />
        {loading && <div>Loading ...</div>}
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
        <div className="dataContainer">
          {!loading &&
            filteredData &&
            filteredData.length > 0 &&
            filteredData.map((post) => {
              return (
                <div className="dataCard" key={post.id}>
                  <div className="cardContentContainer">
                    <div className="cardDataContainer">
                      <img id="dataPictures" src={post.picture} alt="" />
                      <span>{post.title}</span>
                      <span>{post.firstName}</span>
                      <span>{post.lastName}</span>
                    </div>
                    <div className="cardButtonContainer">
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
                    <span>id: {post.id}</span>
                  </div>
                </div>
              );
            })}
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
            />
          )}
          {buttonType === "update" && (
            <UpdateModal
              selectedPost={selectedPost}
              closeModal={closeModal}
              setUpdateSuccess={setUpdateSuccess}
            />
          )}
          {buttonType === "create" && (
            <CreateModal
              selectedPost={selectedPost}
              closeModal={closeModal}
              setCreateSuccess={setCreateSuccess}
            />
          )}
        </div>
      </Modal>
      {deleteSuccess && (
        <div className="alertSuccess">
          <Alert severity="success" color="success">
            Successfully deleted user
          </Alert>
        </div>
      )}
      {updateSuccess && (
        <div className="alertSuccess">
          <Alert severity="success" color="success">
            Successfully updated user
          </Alert>
        </div>
      )}
      {createSuccess && (
        <Notification text="Successfully created user" type="success" />
      )}
    </>
  );
};
export default UsersPage;
