import React from "react";
export const Password = (props) => {
  const { name, handleChange, placeholder } = props;
  return (
    <input
      type="password"
      placeholder={placeholder}
      required
      name={name}
      onChange={(e) => handleChange(e)}
    />
  );
};
