import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocus: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
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
    margin-right: 16px;
  }

  ${(props) =>
    props.isFocus &&
    css`
      color: #ff9000;
      border-color: #ff9000;
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: #ff9000;
    `}

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
