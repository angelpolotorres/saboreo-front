import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${(props) => (props.header ? '0px' : '56px 0')};
  border-bottom: ${(props) => (props.header ? 'solid 1px #d9d9d9' : '')};
`;
