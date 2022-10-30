import React from "react";
import { useState } from "react";
import "./CreateModal.css";
import axios from "axios";
import { Notification } from "../../Notification";
import { data } from "../../../data";

const createData = async (data, dataType) => {
  console.log(data, dataType);
  await axios.post(`https://dummyapi.io/data/v1/${dataType}/create`, data, {
    headers: { "app-id": "634752bc7580f70e4f699960" },
  });
};
const user = {
  firstName: " ",
  lastName: " ",
  email: " ",
};
const post = {
  owner: "63558a6b3c52d18024cae9e8",
  likes: 0,
  text: "",
  tags: [],
  image: "",
};

export const CreateModal = ({ closeModal, setCreateSuccess, dataType }) => {
  const [newPost, setNewPost] = useState(post);
  const [newUser, setNewUser] = useState(user);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (dataType === "post") {
      setNewPost({ ...newPost, [name]: value });
    } else {
      setNewUser({ ...newUser, [name]: value });
    }
  };

  const handleCreate = async (e) => {
    e.preventDefault();

    if (dataType === "post") {
      const postValues = {
        ...newPost,
        tags: newPost.tags.split(","),
        likes: Number(newPost.likes),
      };
      await createData(postValues, dataType)
        .then((response) => {
          setCreateSuccess(true);
          closeModal();
          setTimeout(() => {
            setCreateSuccess(false);
            window.location.reload();
          }, 2500);
        })
        .catch((err) => {
          console.log(err);
          closeModal();
          <Notification text={err.message} type="error" />;
        });
    } else {
      await createData(newUser, dataType)
        .then((response) => {
          setCreateSuccess(true);
          closeModal();
          setTimeout(() => {
            setCreateSuccess(false);
            window.location.reload();
          }, 2500);
        })
        .catch((err) => {
          console.log(err);
          closeModal();
          <Notification text={err.message} type="error" />;
        });
    }
  };

  return (
    <div className="createModalMainContainer">
      <div className="createTitleContainer">
        <span id="createModalTitle">
          Create {dataType === "post" ? "Post" : "User"}
        </span>
      </div>
      <div className={`${dataType === "post" && "mainDataContainer"}`}>
        {dataType === "user" && (
          <div className="createDataContainer">
            <label>First Name</label>
            <input
              name="firstName"
              placeholder="First Name"
              onChange={(e) => handleInputChange(e)}
            />
            <label>Last Name</label>
            <input
              name="lastName"
              placeholder="Last Name"
              onChange={(e) => handleInputChange(e)}
            />
            <label>Email</label>
            <input
              name="email"
              placeholder="Email"
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        )}
        {dataType === "post" && (
          <div className="createDataContainer">
            <label>Text</label>
            <input
              name="text"
              placeholder="Text"
              onChange={(e) => handleInputChange(e)}
            />
            <label>Tags</label>
            <input
              name="tags"
              placeholder="Tags"
              onChange={(e) => handleInputChange(e)}
            />
            <label>Likes</label>
            <input
              type="number"
              name="likes"
              placeholder="Likes"
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        )}
      </div>
      <br />
      <div className="createButtonsContainer">
        <button onClick={() => closeModal()}>Close</button>
        <button onClick={handleCreate}>Create</button>
      </div>
    </div>
  );
};
