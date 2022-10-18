import "./DeleteModal.css"
import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import Modal from "react-modal";

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

const DeleteModal = ({closeModal, selectedPost}) => {

    const handleConfirmButton = async (e, post) => {
        e.preventDefault();
        await deletePost(post.id).catch((err) => console.log(err));
        closeModal();
      };
  return (
    <div>
      <div className="modalX">x</div>
      <div className="modalTitle">
        <span>Are you sure you want to delete this file?</span>
      </div>
      <div className="modalText">
        <span>If you delete this file you can't recover it.</span>
      </div>
      <div className="modalButtons">
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

export default DeleteModal;
