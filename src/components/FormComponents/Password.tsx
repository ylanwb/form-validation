import React from "react";

interface IPassword {
  name: string,
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  placeholder: string
}

export const Password: React.FC<IPassword> = (props) => {
  const { name, handleChange, placeholder } = props;
  return (
    <input
      className="inputComponents"
      type="password"
      placeholder={placeholder}
      required
      name={name}
      onChange={(e) => handleChange(e)}
    />
  );
};
