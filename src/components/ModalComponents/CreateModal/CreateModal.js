import React from "react";
import { useState } from "react";
import "./CreateModal.css";
import axios from "axios";

const createPost = async (newUser) => {
  await axios
    .post(
      "https://dummyapi.io/data/v1/user/create",
      { newUser },
      {
        headers: { "app-id": "634752bc7580f70e4f699960" },
      }
    )
    .then((response) => {
      console.log(response);
    })
    .catch((err) => console.log(err));
};
const CreateModal = ({ closeModal }) => {
  const user = {
    firstName: " ",
    lastName: " ",
    email: " ",
  };
  const [newUser, setNewUser] = useState(user);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ user, [name]: value });
};
console.log(newUser);

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
        <button onClick={() => closeModal()}>Cancel</button>
        <button onClick={() => createPost(newUser)}>Create</button>
      </div>
    </div>
  );
};

export default CreateModal;
