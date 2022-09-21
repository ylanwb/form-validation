const Age = (props) => {
  const { value, handleChange } = props;
  return (
    <input
      type="number"
      placeholder="Age"
      required
      value={value}
      onChange={(e) => handleChange(e.target.value)}
    />
  );
};

export default Age;
