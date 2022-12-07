import React from "react";

interface IDob {
  name: string,
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  placeholder: string,
  ref: any,
}

export const Dob: React.FC<IDob> = (props) => {
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
