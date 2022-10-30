import React from "react";
import { useState } from "react";
import "./UpdateModal.css";
import axios from "axios";

const updatePost = async (post) => {
  await axios
    .put(
      `https://dummyapi.io/data/v1/user/${post.id}`,
      { ...post },
      {
        headers: { "app-id": "634752bc7580f70e4f699960" },
      }
    )
    .then((response) => {
      console.log(response);
    })
    .catch((err) => console.log(err));
};

export const UpdateModal = ({ selectedPost, closeModal, setUpdateSuccess }) => {
  const [userData, setUserData] = useState(selectedPost);
  const handleDataChange = (e) => {
      e.preventDefault();
      const { name, value } = e.target;
      setUserData({ ...userData, [name]: value });
    };

    const handleConfirmButton = async () => {
      closeModal()
      await updatePost(userData)
        .then((response) => {
          setUpdateSuccess(true);
          setTimeout(() => {
            setUpdateSuccess(false);
            window.location.reload();
          }, 2500);
        })
        .catch((err) => console.log(err));
    };
  return (
    <div className="updateModalMainContainer">
      <div className="updateTitleContainer">
        <span>Update User</span>
      </div>
      <div>
        <div className="updateDataContainer">
          <label>Title</label>
          <input
            name="title"
            placeholder="Title"
            defaultValue={selectedPost?.title}
            onChange={(e) => handleDataChange(e)}
          />
          <label>First Name</label>
          <input
            name="firstName"
            defaultValue={selectedPost?.firstName}
            placeholder="First Name"
            onChange={(e) => handleDataChange(e)}
          />
          <label>Last Name</label>
          <input
            name="lastName"
            placeholder="Last Name"
            defaultValue={selectedPost?.lastName}
            onChange={(e) => handleDataChange(e)}
          />
        </div>
      </div>
      <div className="updateButtonsContainer">
        <button onClick={() => closeModal()}>Close</button>
        <button onClick={(e) => {
          handleConfirmButton(e, selectedPost);
        }}>Update</button>
      </div>
    </div>
  );
};

