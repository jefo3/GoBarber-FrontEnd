import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  background: #232129;
  border: 2px solid #232129;
  border-radius: 10px;
  color: #666360;
  padding: 16px;
  width: 100%;

  & + div {
    margin-top: 10px;
  }

  svg {
    color: #666360;
    margin-right: 16px;
  }

  input {
    flex: 1;
    background-color: transparent;
    border: 0;
    color: #f4ede8;

    &::placeholder {
      color: #666360;
    }
  }
`;
