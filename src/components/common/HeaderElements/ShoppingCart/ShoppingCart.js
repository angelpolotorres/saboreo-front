import { ShoppingCartStyled } from './ShoppingCartStyled';

export const ShoppingCart = (props) => {
  return (
    <>
      <ShoppingCartStyled>{props.children}</ShoppingCartStyled>
    </>
  );
};
