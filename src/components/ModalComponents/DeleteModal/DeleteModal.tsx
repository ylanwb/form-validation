import axios from "axios";
import React from "react";
// import { Post } from "@pages/";
import "./DeleteModal.css";

const deletePost = async (id: string, dataType: string) => {
  await axios
    .delete(`http://localhost:1212/posts/${id}`, {
      headers: { "app-id": "634752bc7580f70e4f699960" },
    })
    .then((response) => {
      console.log(response);
      console.log(dataType);
    })
    .catch((err) => console.log(err));
};

interface deleteModalProps {
  closeModal: () => void;
  setDeleteSuccess: React.Dispatch<React.SetStateAction<boolean>>;
  dataType: string;
  selectedPost: any;
}

export const DeleteModal = (props: deleteModalProps) => {
  const { dataType, selectedPost, closeModal, setDeleteSuccess } = props;
  console.log(selectedPost)
  const handleConfirmButton = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    _id: string
  ) => {
    e.preventDefault();
    await deletePost(_id, dataType)
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
          <p>If you delete this file you cant recover it.</p>
        </div>
      </div>
      <div className="deleteModalButtonsContainer">
        <button onClick={() => closeModal()}>Cancel</button>
        <button
          onClick={(e) => {
            // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
            selectedPost && handleConfirmButton(e, selectedPost._id);
          }}
        >
          Confirm
        </button>
      </div>
    </div>
  );
};
