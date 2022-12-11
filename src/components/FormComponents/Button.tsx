import React from "react";

interface IButton {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button: React.FC<IButton> = (props) => {
  const { onClick } = props;
  return (
    <button
      className="button"
      onClick={(e) => {
        e.preventDefault();
        onClick(e)
      }}
    >
      Submit
    </button>
  );
};
