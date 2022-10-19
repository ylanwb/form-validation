import React from "react";
import "./UpdateModal.css";

const UpdateModal = ({ selectedPost, closeModal }) => {
  return (
    <div className="updateModalMainContainer">
      <div className="updateTitleContainer">
        <span>Update User</span>
      </div>
      <div>
        <div className="updateDataContainer">
          <label>Title</label>
          <input placeholder="Title" defaultValue={selectedPost?.title} />
          <label>First Name</label>
          <input
            defaultValue={selectedPost?.firstName}
            placeholder="First Name"
          />
          <label>Last Name</label>
          <input
            placeholder="Last Name"
            defaultValue={selectedPost?.lastName}
          />
        </div>
      </div>
      <div className="updateButtonsContainer">
        <button onClick={() => closeModal()}>Cancel</button>
        <button>Update</button>
      </div>
    </div>
  );
};

export default UpdateModal;
