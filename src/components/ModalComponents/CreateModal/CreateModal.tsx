/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useState } from "react";
import "./CreateModal.css";
import axios from "axios";
import { Notification } from "../../Notification";

import Select, { SelectChangeEvent } from "@mui/material/Select";

const createData = async (data: string) => {
  await axios.post("http://localhost:1212/posts", data, {
    headers: { "Content-Type": "application/json" },
  });
};
const post = {
  title: "",
  content: "",
  owner: "",
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

  const [title, setTitle] = React.useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const userId = localStorage.getItem("userId");
    if (dataType === "post") {
      setNewPost({ ...newPost, [name]: value, owner: userId });
    }
  };
  const userId = localStorage.getItem("userId");

  const handleCreate = async (e: any) => {
    e.preventDefault();
    console.log(newPost);

    const postValues = {
      ...newPost,
      title: newPost.title,
      content: newPost.content,
      image: newPost.image,
      userId: userId,
    };
    await createData(postValues)
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
  };

  return (
    <div className="createModalMainContainer">
      <div className="createTitleContainer">
        <span id="createModalTitle">Create Post</span>
      </div>
      <div className={`${dataType === "post" ? "mainDataContainer" : ""}`}>
        {dataType === "post" && (
          <div className="createDataContainer">
            <label>Title</label>
            <input
              name="title"
              placeholder="Title"
              onChange={(e) => handleInputChange(e)}
            />
            <label>Content</label>
            <input
              name="content"
              placeholder="Content"
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
