import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import { Container, Background, Content } from './styles';
import imgLogo from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

const SingIN: React.FC = () => {
  const { control, handleSubmit } = useForm();

  // eslint-disable-next-line @typescript-eslint/ban-types
  function handleAdd(data: object): void {
    console.log(data);
  }

  return (
    <Container>
      <Background />
      <Content>
        <img src={imgLogo} alt="logo" />
        <form onSubmit={handleSubmit(handleAdd)}>
          <h1>Faça seu logon</h1>

          <Input icon={FiMail} name="email" type="email" placeholder="Email" />
          <Input
            icon={FiLock}
            name="senha"
            type="password"
            placeholder="Senha"
          />

          <Button type="submit"> Entrar </Button>
          <a href="senah"> Esqueci minha senha </a>
        </form>

        <a href="/">
          <FiLogIn />
          criar conta
        </a>
      </Content>
    </Container>
  );
};

export default SingIN;
