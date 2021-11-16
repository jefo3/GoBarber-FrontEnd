import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import { Container, Background, Content } from './styles';
import imgLogo from '../../assets/logo.svg';

const Login: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={imgLogo} alt="logo" />
        <form>
          <h1>Faça seu logon</h1>

          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Senha" />

          <button type="submit"> Entrar </button>
          <a href="senah"> Esqueci minha senha </a>
        </form>

        <a href="/">
          <FiLogIn />
          criar conta
        </a>
      </Content>

      <Background />
    </Container>
  );
};

export default Login;
