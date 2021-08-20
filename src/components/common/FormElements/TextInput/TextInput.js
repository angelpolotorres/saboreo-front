import { TextInputStyled } from './TextInputStyled';

export const TextInput = (props) => {
  return (
    <>
      <TextInputStyled
        name={props.name}
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </>
  );
};
