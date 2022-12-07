import React from "react";
export const Button = (props) => {
  const { onClick } = props;
  return (
    <button
      className="button"
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
    >
      Submit
    </button>
  );
};
