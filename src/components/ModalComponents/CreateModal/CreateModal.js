import React from "react";
import { useState } from "react";
import "./CreateModal.css";
import axios from "axios";
import { Notification } from "../../Notification";

const createPost = async (newUser) => {
  await axios.post("https://dummyapi.io/data/v1/user/create", newUser, {
    headers: { "app-id": "634752bc7580f70e4f699960" },
  });
};
export const CreateModal = ({ closeModal, setCreateSuccess }) => {
  const user = {
    firstName: " ",
    lastName: " ",
    email: " ",
  };
  const [newUser, setNewUser] = useState(user);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    await createPost(newUser)
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
      <div>
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
      </div>
      <br />
      <div className="createButtonsContainer">
        <button onClick={() => closeModal()}>Close</button>
        <button onClick={handleCreate}>Create</button>
      </div>
    </div>
  );
};
