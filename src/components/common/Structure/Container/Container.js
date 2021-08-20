import { ContainerStyled } from './ContainerStyled';

export const Container = (props) => {
  return (
    <>
      <ContainerStyled className={props.className}>
        {props.children}
      </ContainerStyled>
    </>
  );
};
