const Button = (props) => {
  const { onClick } = props;
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
    >
      Submit
    </button>
  );
};

export default Button;
