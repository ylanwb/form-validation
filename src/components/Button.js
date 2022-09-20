const Button = (props) => {
  const { onClick } = props;
  return <button onClick={() => onClick()}>Submit</button>;
};

export default Button;
