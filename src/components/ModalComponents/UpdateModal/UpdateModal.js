import React from "react";
import "./UpdateModal.css";

const UpdateModal = ({ selectedPost, closeModal }) => {
  return (
    <div>
      <div>
        <span>Update User</span>
      </div>
      <div>
        <div>
          <input placeholder="Title" defaultValue={selectedPost?.title} />
          <input
            defaultValue={selectedPost?.firstName}
            placeholder="First Name"
          />
          <input
            placeholder="Last Name"
            defaultValue={selectedPost?.lastName}
          />
        </div>
      </div>
      <div>
        <button onClick={() => closeModal()}>Cancel</button>
        <button>Update</button>
      </div>
    </div>
  );
};

export default UpdateModal;
