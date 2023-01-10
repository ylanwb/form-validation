/* eslint-disable @typescript-eslint/consistent-type-assertions */
import React, { useState } from "react";
import "./UpdateModal.css";
import axios from "axios";
import { Post } from "@pages/";

const updatePost = async (post: Post) => {
  console.log();
  await axios
    .put(
      `http://localhost:1212/posts/${post._id ?? ""}`,
      {
        title: post.title,
        content: post.content,
        image: post.image,
      },
      {
        headers: { "Content-Type": "application/json" },
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
    _id: "",
    title: "",
    owner: "",
    publishDate: "",
    content: "",
    image: "",
  });
  const [updatedUserValues, setNewUser] = useState(selectedPost);

  const handleDataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    if (dataType === "post") {
      setNewPost({ ...updatedPostValues, [name]: value });
      console.log(updatedPostValues);
    } else {
      setNewUser({ ...updatedUserValues, [name]: value } as Post);
    }
  };
  const handleConfirmButton = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const userId = localStorage.getItem("userId");
    e.preventDefault();

    const postValues = {
      ...updatedPostValues,
      title: updatedPostValues.title,
      owner: userId,
      content: updatedPostValues.content,
      _id: selectedPost?._id
    } as unknown as Post;
    await updatePost(postValues)
      .then((response) => {
        console.log(postValues);
        setUpdateSuccess(true);
        closeModal();
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
        <span>Update Post</span>
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
          <label>Content</label>
          <input
            name="content"
            defaultValue={selectedPost?.content ?? []}
            placeholder="Content"
            onChange={(e) => handleDataChange(e)}
          />
          <label>Image</label>
          <input
            name="image"
            placeholder="Image"
            defaultValue={selectedPost?.image}
            onChange={(e) => handleDataChange(e)}
          />
        </div>
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
