import { FormStyled } from './FormStyled';

export const Form = (props) => {
  return (
    <FormStyled className={props.className} onSubmit={props.onSubmit}>
      {props.children}
    </FormStyled>
  );
};
