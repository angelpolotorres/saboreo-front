import styled from 'styled-components';

export const ButtonStyled = styled.button`
  width: 100%;
  max-width: var(--button-max-width);
  padding: var(--button-padding);
  font-size: var(--button-text);
  letter-spacing: var(--button-letter-spacing);
  margin: var(--button-margin);
`;

export const ButtonDisabledStyled = styled.button`
  width: 100%;
  max-width: var(--button-max-width);
  padding: var(--button-padding);
  font-size: var(--button-text);
  letter-spacing: var(--button-letter-spacing);
  margin: var(--button-margin);
  color: #d6d6d6;
  border-radius: var(--radius-button-16);
  border: solid 1px #e0e0e0;
  background: #f5f5f5;
`;
