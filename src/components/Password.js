const Password = (props) => {
  const { value, handleChange } = props;
  return (
    <input
      type="password"
      placeholder="Password"
      value={value}
      onChange={(e) => handleChange(e.target.value)}
    />
  );
};

export default Password;
