import React from "react";
export const Age = (props) => {
  const { name, handleChange } = props;
  return (
    <input
      type="number"
      name={name}
      placeholder="Age"
      required
      onChange={(e) => handleChange(e)}
    />
  );
};
