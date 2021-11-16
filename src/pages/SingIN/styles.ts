import styled from 'styled-components';
import { shade } from 'polished';

import imgBackground from '../../assets/sign-in-background.png';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 700px;

  form {
    margin-top: 80px;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    input {
      background: #232129;
      border: 2px solid #232129;
      border-radius: 10px;
      color: #f4ede8;
      padding: 16px;
      width: 100%;

      & + input {
        margin-top: 10px;
      }

      &::placeholder {
        color: #666360;
      }
    }

    button {
      background: #ff9000;
      border: 0;
      border-radius: 10px;
      height: 56px;
      padding: 0 16px;
      width: 100%;

      margin-top: 20px;

      color: #312e38;
      font-weight: 500;

      transition: background-color 0.2s;

      &:hover {
        background: ${shade(0.2, '#ff9000')};
      }
    }

    a {
      display: block;
      color: #f4ede8;
      text-decoration: none;
      margin-top: 24px;
      transition: color 0.2s;
      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }

  > a {
    display: flex;
    align-items: center;
    margin-top: 24px;
    color: #ff9000;
    text-decoration: none;
    transition: color 0.2s;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: ${shade(0.2, '#ff9000')};
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${imgBackground}) no-repeat center;
  background-size: cover;
`;
