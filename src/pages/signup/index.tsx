import React , {useCallback, useRef} from 'react';

import { Container, Content, Background } from './styles';

import{
  FiArrowLeft, FiMail, FiUser, FiLock
} from 'react-icons/fi';
import {Form} from '@unform/web';
import {FormHandles} from '@unform/core';
import * as Yup from 'yup';
import logoBarber from '../../assets/logo.svg';
import {Link} from 'react-router-dom';

import Input from '../../components/input';
import Button from '../../components/button';
import getValidationErrors from '../../utils/getValidationErrors'


const SignUp: React.FC = () =>{
  const formRef = useRef<FormHandles>(null)

  const handleSubmit =  useCallback(async (data: object)=> {

    try{
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório!'),
        email: Yup.string().required('Email obrigatório').email('Digite um email válido!'),
        password: Yup.string()
        .min(6,'Minimo de 6 caracteres'),
      });

      await schema.validate(data,{
        abortEarly: false,
      });
    } catch(error){
      const errors = getValidationErrors(error);
      formRef.current?.setErrors(errors);


    }
  }, []);
  return(
    <Container>
      <Background/>
    <Content>
        <img src ={logoBarber}  alt="GoBarber"/>
        <Form ref={formRef} onSubmit = {handleSubmit}>

            <h1>Faça seu cadastro</h1>
            <Input name ="name" icon = {FiUser} placeholder = "Nome"/>
            <Input name ="email" icon={FiMail} placeholder ="E-mail"/>
            <Input name ="password" icon ={FiLock} type="password" placeholder ="Senha"/>
            <Button type ="submit">Cadastrar</Button>

        </Form>
          <Link to ="/">
            <FiArrowLeft/>
            Voltar á pagina de login
          </Link>

    </Content>


    </Container>
  );
}
export default SignUp;
