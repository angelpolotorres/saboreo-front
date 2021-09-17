import styled from 'styled-components';

export const ZoneStyled = styled.div`
  width: 100%;
  max-width: 1440px;
  box-sizing: border-box;
  @media (min-width: 768px) {
  }
`;

export const ZoneGridStyled = styled.div`
  display: grid;
  width: 100%;
  max-width: 1440px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
  padding: 0 16px;
  box-sizing: border-box;

  @media (min-width: 768px) {
    padding: 0 50px;
    grid-template-columns: repeat(12, 1fr);
  }
`;
