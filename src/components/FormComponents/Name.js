import React from "react";
export const Name = (props) => {
  const { name, handleChange } = props;
  return (
    <input
      className="inputComponents"
      type="text"
      required
      name={name}
      onChange={(e) => handleChange(e)}
      placeholder="Name"
    />
  );
};
