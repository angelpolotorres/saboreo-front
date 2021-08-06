const Button = (props) => {
  return props.disabled ? (
    <input type={props.type} value={props.value} disabled />
  ) : (
    <input type={props.type} value={props.value} onClick={props.onClick} />
  );
};
export default Button;
