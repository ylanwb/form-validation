import axios from "axios";
import React from "react";
import "./DeleteModal.css";

const deletePost = async (id) => {
  await axios
    .delete(`https://dummyapi.io/data/v1/user/${id}`, {
      headers: { "app-id": "634752bc7580f70e4f699960" },
    })
    .then((response) => {
      console.log(response);
    })
    .catch((err) => console.log(err));
};
export const DeleteModal = ({ closeModal, selectedPost, setDeleteSuccess }) => {
  const handleConfirmButton = async (e, post) => {
    e.preventDefault();
    await deletePost(post.id)
      .then((response) => {
        setDeleteSuccess(true);
        setTimeout(() => {
          setDeleteSuccess(false);
          window.location.reload();
        }, 2500);
      })
      .catch((err) => console.log(err));
    closeModal();
  };
  return (
    <div className="deleteModalMainContainer">
      <div className="deleteTitleContainer">
        <span>Delete User</span>
      </div>
      <div className="deleteModalTextContainer">
        <div className="modalText">
          <p>Are you sure you want to delete this file?</p>
          <p>If you delete this file you can't recover it.</p>
        </div>
      </div>
      <div className="deleteModalButtonsContainer">
        <button onClick={() => closeModal()}>Cancel</button>
        <button
          onClick={(e) => {
            handleConfirmButton(e, selectedPost);
          }}
        >
          Confirm
        </button>
      </div>
    </div>
  );
};
