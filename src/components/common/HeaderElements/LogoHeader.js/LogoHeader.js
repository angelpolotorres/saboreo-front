import { LogoHeaderStyled } from './LogoHeaderStyled';

export const LogoHeader = (props) => {
  return (
    <>
      <LogoHeaderStyled to={'/'}>{props.children}</LogoHeaderStyled>
    </>
  );
};
