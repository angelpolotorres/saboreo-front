import { LabelStyled } from './LabelStyled';

export const Label = (props) => {
  return (
    <>
      <LabelStyled className={props.className} htmlFor={props.htmlFor}>
        {props.title}
      </LabelStyled>
    </>
  );
};
