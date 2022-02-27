import React from 'react';
import { useForm, Controller, FieldValues } from 'react-hook-form';
import { FiUser, FiArrowLeft, FiMail, FiLock } from 'react-icons/fi';

import { Container, Background, Content } from './styles';
import imgLogo from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

const SingUP: React.FC = () => {
  const { control, handleSubmit } = useForm();

  function handleRegister(data: FieldValues): void {
    console.log(data);
  }

  return (
    <Container>
      <Background />
      <Content>
        <img src={imgLogo} alt="logo" />
        <form onSubmit={handleSubmit(handleRegister)}>
          <h1>Faça seu cadastro</h1>
          <Controller
            control={control}
            render={({ field }) => (
              <Input
                icon={FiUser}
                type="text"
                placeholder="Usuario"
                {...field}
              />
            )}
            name="usuario"
          />

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
