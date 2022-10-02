import React from "react";
export const Dob = (props) => {
  const { name, handleChange } = props;
  return (
    <input
      type="date"
      className="inputComponents"
      name={name}
      id="dob"
      placeholder="Dob"
      onChange={(e) => handleChange(e)}
    />
  );
};
