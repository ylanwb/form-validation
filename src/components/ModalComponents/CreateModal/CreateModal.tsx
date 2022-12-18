import React from "react";
import { useState } from "react";
import "./CreateModal.css";
import axios from "axios";
import { Notification } from "../../Notification";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { UsersDropdown } from "../../FormComponents";

const titleDropdown = ["mr", "mr", "mrs", "miss", "dr"];

const createData = async (data: string, dataType: string) => {
  console.log(data, dataType);
  await axios.post(`https://dummyapi.io/data/v1/${dataType}/create`, data, {
    headers: { "app-id": "634752bc7580f70e4f699960" },
  });
};
const user = {
  title: " ",
  firstName: " ",
  lastName: " ",
  email: " ",
};
const post = {
  owner: "",
  likes: 0,
  text: "",
  tags: [],
  image: "",
};

interface CreateModalProps {
  closeModal: () => void;
  setCreateSuccess: React.Dispatch<React.SetStateAction<boolean>>;
  dataType: string;
}

export const CreateModal = (props: CreateModalProps) => {
  const { dataType, closeModal, setCreateSuccess } = props;
  const [newPost, setNewPost] = useState<any>(post);
  const [newUser, setNewUser] = useState<any>(user);

  const [selectedUser, setSelectedUser] = React.useState<any>("");

  const [title, setTitle] = React.useState("");

  const handleTitle = (event: SelectChangeEvent<string>) => {
    setTitle(event.target.value);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (dataType === "post") {
      setNewPost({ ...newPost, [name]: value, owner: selectedUser.id.id });
      console.log(selectedUser.id);
    } else {
      setNewUser({ ...newUser, [name]: value, title: title });
    }
  };

  const handleCreate = async (e: any) => {
    e.preventDefault();
    console.log(newUser);
    if (dataType === "post") {
      const postValues = {
        ...newPost,
        tags: newPost.tags.split(","),
        owner: selectedUser.id,
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
            <label>Title</label>
            <div className="pronounDropDownMenu">
              <Select
                className="dropDownTitle"
                value={title}
                onChange={handleTitle}
                defaultValue=""
                displayEmpty
              >
                {titleDropdown?.map((title) => {
                  return <MenuItem value={title}>{title}</MenuItem>;
                })}
              </Select>
            </div>
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
            <label>Users</label>
            <UsersDropdown
              setSelectedUser={setSelectedUser}
              selectedUser={selectedUser}
            />
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
            <label>Image</label>
            <input
              name="image"
              placeholder="Url"
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
