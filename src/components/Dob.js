const Dob = (props) => {
  const { name, handleChange } = props;
  return (
    <input
      type="date"
      name={name}
      id="dob"
      placeholder="Dob"
      onChange={(e) => handleChange(e)}
    />
  );
};

export default Dob;
