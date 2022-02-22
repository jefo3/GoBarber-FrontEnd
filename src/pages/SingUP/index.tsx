import React from 'react';
import { FiUser, FiArrowLeft, FiMail, FiLock } from 'react-icons/fi';

import { Container, Background, Content } from './styles';
import imgLogo from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

const SingUP: React.FC = () => {
  return (
    <Container>
      <Background />
      <Content>
        <img src={imgLogo} alt="logo" />
        <form>
          <h1>Faça seu cadastro</h1>

          <Input icon={FiUser} name="email" type="text" placeholder="Usuario" />
          <Input icon={FiMail} name="email" type="email" placeholder="Email" />
          <Input
            icon={FiLock}
            name="senha"
            type="password"
            placeholder="Senha"
          />

          <Button type="submit"> Cadastrar </Button>
        </form>

        <a href="/">
          <FiArrowLeft />
          Voltar para Login
        </a>
      </Content>
    </Container>
  );
};

export default SingUP;
