const Password = (props) => {
  const { value, handleChange } = props;
  return (
    <input
      type="password"
      placeholder="Password"
      required
      value={value}
      onChange={(e) => handleChange(e.target.value)}
    />
  );
};

export default Password;
