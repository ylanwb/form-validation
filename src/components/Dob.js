const Dob = (props) => {
  const { value, handleChange } = props;
  return (
    <input
      type="date"
      value={value}
      required
      id="dob"
      placeholder="Dob"
      onChange={(e) => handleChange(e.target.value)}
    />
  );
};

export default Dob;
