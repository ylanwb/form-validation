const Email = (props) => {
  const { name, handleChange } = props;
  return (
    <input
      type="email"
      required
      name={name}
      onChange={(e) => handleChange(e)}
      placeholder="Email"
    />
  );
};

export default Email;