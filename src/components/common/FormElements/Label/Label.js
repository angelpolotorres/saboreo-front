import { LabelStyled } from './LabelStyled';

export const Label = (props) => {
  return (
    <>
      <LabelStyled htmlFor={props.htmlFor}>{props.title}</LabelStyled>
    </>
  );
};
