const Name = (props) => {
  const { name, handleChange } = props;
  return (
    <input
      type="text"
      required
      name={name}
      onChange={(e) => handleChange(e)}
      placeholder="Name"
    />
  );
};

export default Name;
