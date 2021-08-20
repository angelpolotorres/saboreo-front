import styled from 'styled-components';

export const MainNavLinkStyled = styled.a`
  @media (min-width: 768px) {
    height: 72px;
    display: flex;
    align-items: center;
  }
`;

export const MainNavIconStyled = styled.a`
  float: right;
  display: flex;
  height: 72px;
  align-items: center;
  color: #333f48;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const MainNavLinksZoneStyled = styled.div`
  margin: 72px 0 0 0;
  background-color: #d9d9d9;
  @media (min-width: 768px) {
    margin: 0 0 0 0;
  }
`;
