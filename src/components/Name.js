const Name = (props) => {
  const { value, handleChange } = props;
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => handleChange(e.target.value)}
      placeholder="Name"
    />
  );
};

export default Name;
