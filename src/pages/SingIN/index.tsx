import React from 'react';
import { useForm, Controller, FieldValues } from 'react-hook-form';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import { Container, Background, Content } from './styles';
import imgLogo from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

const SingIN: React.FC = () => {
  const { control, handleSubmit } = useForm();

  function handleLogin(data: FieldValues): void {
    console.log(data);
  }

  return (
    <Container>
      <Background />
      <Content>
        <img src={imgLogo} alt="logo" />
        <form onSubmit={handleSubmit(handleLogin)}>
          <h1>Faça seu logon</h1>

          <Controller
            control={control}
            render={({ field }) => (
              <Input
                icon={FiMail}
                type="email"
                placeholder="Email"
                {...field}
              />
            )}
            name="email"
          />

          <Controller
            control={control}
            render={({ field }) => (
              <Input
                icon={FiLock}
                type="password"
                placeholder="Senha"
                {...field}
              />
            )}
            name="senha"
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
