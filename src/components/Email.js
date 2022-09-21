const Email = (props) => {
      const { value, handleChange} = props;
      return <input
      type="email" 
      placeholder="Email"
      required
      value={value}
      onChange={(e) => handleChange(e.target.value)}
      />;
    };
    
    export default Email;