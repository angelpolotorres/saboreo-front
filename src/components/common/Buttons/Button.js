import { ButtonStyled, ButtonDisabledStyled } from './ButtonStyled';
import './Button.css';

export const Button = (props) => {
  return props.disabled ? (
    <ButtonDisabledStyled className={props.className} disabled>
      {props.children}
    </ButtonDisabledStyled>
  ) : (
    <ButtonStyled className={props.className} onClick={props.onClick}>
      {props.children}
    </ButtonStyled>
  );
};
