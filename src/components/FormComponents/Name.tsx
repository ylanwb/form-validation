import React from "react";

interface IName {
  name: string,
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  ref: any,

}

export const Name: React.FC<IName> = (props) => {
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
