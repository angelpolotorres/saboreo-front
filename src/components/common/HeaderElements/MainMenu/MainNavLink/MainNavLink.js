import {
  MainNavLinkStyled,
  MainNavLinksZoneStyled,
  MainNavIconStyled
} from './MainNavLinkStyled';

export const MainNavLink = (props) => {
  return <MainNavLinkStyled>{props.children}</MainNavLinkStyled>;
};

export const MainNavIcon = (props) => {
  return <MainNavIconStyled>{props.children}</MainNavIconStyled>;
};

export const MainNavLinksZone = (props) => {
  return <MainNavLinksZoneStyled>{props.children}</MainNavLinksZoneStyled>;
};
