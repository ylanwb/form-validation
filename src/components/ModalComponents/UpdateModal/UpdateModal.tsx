/* eslint-disable @typescript-eslint/consistent-type-assertions */
import React, { useState } from "react";
import "./UpdateModal.css";
import axios from "axios";
import { Post } from "@pages/";

const updatePost = async (post: Post, dataType: string) => {
  await axios
    .put(
      `https://dummyapi.io/data/v1/${dataType}/${post.id}`,
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

interface UpdateModalProps {
  closeModal: () => void;
  selectedPost: Post | undefined;
  setUpdateSuccess: React.Dispatch<React.SetStateAction<boolean>>;
  dataType: string;
}

export const UpdateModal = (props: UpdateModalProps) => {
  const { closeModal, selectedPost, setUpdateSuccess, dataType } = props;
  const [updatedPostValues, setNewPost] = useState<Post>({
    id: "",
    title: "",
    owner: "",
    publishDate: "",
    content: "",
    image: "",
  });
  const [updatedUserValues, setNewUser] = useState(selectedPost);
  const [selectedUser, setSelectedUser] = useState<Post>();

  const handleDataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    if (dataType === "post") {
      setNewPost({ ...updatedPostValues, [name]: value });
    } else {
      setNewUser({ ...updatedUserValues, [name]: value } as Post);
    }
  };
  const handleConfirmButton = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (dataType === "post") {
      const postValues = {
        ...updatedPostValues,
        title: updatedPostValues.title,
        owner: selectedUser,
        content: Number(updatedPostValues.content),
      } as unknown as Post;
      await updatePost(postValues, dataType)
        .then((response) => {
          setUpdateSuccess(true);
          closeModal();
          setTimeout(() => {
            setUpdateSuccess(false);
            window.location.reload();
          }, 2500);
        })
        .catch((err) => console.log(err));
    } else {
      await updatePost(updatedPostValues, dataType)
        .then((response) => {
          setUpdateSuccess(true);
          closeModal();
          setTimeout(() => {
            setUpdateSuccess(false);
            window.location.reload();
          }, 2500);
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <div className="updateModalMainContainer">
      <div className="updateTitleContainer">
        <span>Update {dataType === "post" ? "Post" : "User"}</span>
      </div>
      <div>
        {dataType === "user" && (
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
              defaultValue={selectedPost?.image}
              placeholder="First Name"
              onChange={(e) => handleDataChange(e)}
            />
            <label>Last Name</label>
            <input
              name="lastName"
              placeholder="Last Name"
              defaultValue={selectedPost?.content}
              onChange={(e) => handleDataChange(e)}
            />
          </div>
        )}
        {dataType === "post" && (
          <div className="updateDataContainer">
            <label>title</label>
            <input
              name="text"
              placeholder="Text"
              defaultValue={selectedPost?.title}
              onChange={(e) => handleDataChange(e)}
            />
            <label>content</label>
            <input
              name="tags"
              defaultValue={selectedPost?.content ?? []}
              placeholder="Tags"
              onChange={(e) => handleDataChange(e)}
            />
            <label>image</label>
            <input
              name="likes"
              placeholder="Likes"
              defaultValue={selectedPost?.image}
              onChange={(e) => handleDataChange(e)}
            />
          </div>
        )}
      </div>
      <div className="updateButtonsContainer">
        <button onClick={() => closeModal()}>Close</button>
        <button
          onClick={(e) => {
            void handleConfirmButton(e);
          }}
        >
          Update
        </button>
      </div>
    </div>
  );
};
