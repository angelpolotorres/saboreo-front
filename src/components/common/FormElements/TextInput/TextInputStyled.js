import styled from 'styled-components';

export const TextInputStyled = styled.input`
  width: 100%;
  max-width: var(--button-max-width);
  padding: var(--button-padding);
  border-radius: var(--button-radius);
  border: solid 1px var(--grey-border);
  margin: var(--imput-margin);
  color: var(--grey-text);

  ::placeholder {
    color: var(--grey-placeholder);
  }

  :focus-visible {
    outline: none;
    border: solid 1px rgb(63, 149, 247);
    box-shadow: 0 0 6px #b1d0f1;
  }
`;
