import React from "react";

interface IAge {
  name: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Age: React.FC<IAge> = (props) => {
  const { name, handleChange } = props;
  return (
    <input
      className="inputComponents"
      type="number"
      name={name}
      placeholder="Age"
      required
      onChange={(e) => handleChange(e)}
    />
  );
};
