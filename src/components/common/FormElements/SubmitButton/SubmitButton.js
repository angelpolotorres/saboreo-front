import { SubmitButtonStyled } from './SubmitButtonStyled';

export const SubmitButton = (props) => {
  return props.disabled ? (
    <SubmitButtonStyled type="submit" disabled>
      {props.children}
    </SubmitButtonStyled>
  ) : (
    <SubmitButtonStyled type="submit">{props.children}</SubmitButtonStyled>
  );
};
