import { TextFieldStyled } from './TextFieldStyled';

export const TextField = (props) => {
  return (
    <>
      <TextFieldStyled
        name={props.name}
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </>
  );
};
