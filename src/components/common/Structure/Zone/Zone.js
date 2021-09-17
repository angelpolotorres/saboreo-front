import { ZoneStyled, ZoneGridStyled } from './ZoneStyled';

export const Zone = (props) => {
  return (
    <>
      <ZoneStyled className={props.className}>{props.children}</ZoneStyled>
    </>
  );
};

export const ZoneGrid = (props) => {
  return (
    <>
      <ZoneGridStyled className={props.className}>
        {props.children}
      </ZoneGridStyled>
    </>
  );
};
