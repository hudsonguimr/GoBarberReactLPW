import React, {useCallback, useRef} from 'react';
import * as Yup from 'yup';
import {FormHandles} from '@unform/core';
import { useAuth } from '../../hooks/AuthContext';
import { useToast} from '../../hooks/ToastContext';
import getValidationErrors from '../../utils/getValidationErrors';

import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import logoBarber from '../../assets/logo.svg';
import  { Form } from '@unform/web';
import { Container, Content, Background } from './styles';
import {Link} from 'react-router-dom';



import Input from '../../components/input';
import Button from '../../components/button';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () =>{

  const formRef = useRef<FormHandles>(null)
  const {signIn }= useAuth();
  const {addToast} = useToast();

console.log(signIn);

  const handleSubmit =  useCallback(async (data: SignInFormData)=> {

    try{
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string().required('Email obrigatório').email('Digite um email válido!'),
        password: Yup.string().required('Senha Obrigatoria'),

      });

      await schema.validate(data,{
        abortEarly: false,
      });
    await signIn({
        email: data.email,
        password: data.password
      });
    } catch(error){
      if (error instanceof Yup.ValidationError){
      const errors = getValidationErrors(error);
      formRef.current?.setErrors(errors);
    }

    // throw toast
    addToast({
      type: 'error',
      title: 'Erro na autenticação',
      description: 'Ocorreu um erro ao fazer login, cheque as credenciais',
    })

    }
  }, [signIn, addToast]);
  return (
    <Container>
    <Content>
        <img src ={logoBarber}  alt="GoBarber"/>
        <Form ref={formRef} onSubmit=  {handleSubmit}>
            <h1>Faça seu login</h1>
            <Input name ="email" icon={FiMail} placeholder ="E-mail"/>
            <Input name ="password" icon ={FiLock} type="password" placeholder ="Senha"/>
            <Button type ="submit">Entrar</Button>
            <a href ="forgot"> Esqueci minha senha</a>
        </Form>
          <Link to="/signup">
            <FiLogIn/>
            Criar Conta
          </Link>
    </Content>
    <Background/>
    </Container>
  );
};
export default SignIn;
