import React from "react";

interface PostModalProps {
  closeModal: () => void;
  selectedPost: any;
}

export const PostModal = (props: PostModalProps) => {
  const { selectedPost, closeModal, } = props;
  console.log(selectedPost)
  return (
   <div>this is posts modal </div>
  );
};
