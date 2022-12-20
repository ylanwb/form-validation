import React from "react";
interface IEmail {
  name: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export const Email: React.FC<IEmail> = (props) => {
  const { name, handleChange } = props;
  return (
    <input
      className="inputComponents"
      type="email"
      required
      name={name}
      onChange={(e) => handleChange(e)}
      placeholder="Email"
    />
  );
};
