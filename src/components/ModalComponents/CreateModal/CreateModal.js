import React from "react";
import { useState } from "react";
import "./CreateModal.css";
import axios from "axios";
import { Notification } from "../../Notification";

const createUser = async (newPost, dataType) => {
  await axios.User(`https://dummyapi.io/data/v1/${dataType}/create`, newPost, {
    headers: { "app-id": "634752bc7580f70e4f699960" },
  });
};
export const CreateModal = ({ closeModal, setCreateSuccess, dataType }) => {

  const user = {
    firstName: " ",
    lastName: " ",
    title: " ",
  };
  // ?
  const post = {
    firstName: " ",
    lastName: " ",
    title: " ",
    likes: 0,
    text: " ",
    date: " ",
    id: " ",
    image: " ",
    tags: " ",
    
  };
  const [newPost, setNewPost] = useState(post);
  const [newUser, setNewUser] = useState(user);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
    setNewPost({ ...newPost, [name]: value });
  };


  const handleCreate = async (e) => {
    e.preventDefault();
    console.log("clicked")
    await createUser(newUser, newPost, dataType)
      .then((response) => {
        setCreateSuccess(true);
      })
      .catch((err) => {
        closeModal();
        <Notification text={err.message} type="error" />;
      });
  };

  return (
    <div className="createModalMainContainer">
      <div className="createTitleContainer">
        <span id="createModalTitle">Create User</span>
      </div>
      <div className={`${dataType === "post" && "mainDataContainer"}`}>
        <div className="createDataContainer">
          <label>First Name</label>
          <input
            name="firstName"
            placeholder="First Name"
            onChange={(e) => handleInputChange(e)}
          />
          <label>Title</label>
          <input
            name="title"
            placeholder="Title"
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
        {dataType === "post" && (
          <div className="createDataContainer">
            <label>Last Name</label>
            <input
              name="lastName"
              placeholder="Last Name"
              onChange={(e) => handleInputChange(e)}
            />
            <label>Text</label>
            <input
              name="text"
              placeholder="Text"
              onChange={(e) => handleInputChange(e)}
            />
            <label>Date</label>
            <input
              type="date"
              name="publishDate"
              placeholder="Date"
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        )
        }
      </div>
      <br />
      <div className="createButtonsContainer">
        <button onClick={() => closeModal()}>Close</button>
        <button onClick={handleCreate}>Create</button>
      </div>
    </div>
  );
};
