import * as yup from 'yup';

const schema = yup.object().shape({
  usuario: yup.string().required('Nome é obrigatorio'),
  email: yup
    .string()
    .email('Digite um email válido')
    .required('Email é obrigatorio'),
  senha: yup.string().min(4, 'Senha com minimo 4 caracteres'),
});

export default schema;
