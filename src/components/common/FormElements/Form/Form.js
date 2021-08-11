import { FormStyled } from './FormStyled';

export const Form = (props) => {
  return <FormStyled onSubmit={props.onSubmit}>{props.children}</FormStyled>;
};
