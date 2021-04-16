import styled from 'styled-components';
import { shade } from 'polished';
import RegisterTeacher from '../../assets/sign-up-background.png'

export const Container = styled.div`


     margin-left: 50px;

    display: flex;


`;

export const Global = styled.div `
display: flex;
flex-direction: column;
place-content: center;
align-items: center;
`;


export const Content = styled.div`
height: 830px;
display: flex;
flex-direction: column;
place-content: center;
align-items: center;


width: 100%;
max-width: 700px;
h1{
  margin-bottom: 24px;
}
`;

export const Form = styled.div`
display: flex;
flex-direction: column;
place-content: center;
align-items: center;


width: 100%;
max-width: 700px;

form{
    margin: 80px 0;
    width: 340px;
    text-align: center;

}

}
  input{
    color: white;
    background: #232129;
    border-radius: 10px;
    border 2px solid #232129;
    padding: 16px;
    width: 100%

  }
  input{
    margin-top:5px;
  }

  button {
    margin-top: 16px;
    width: 100%;
    background: #ff9000;
    border: 0;
    padding: 0 16px;
    border-radius: 10px;
    height: 56px;
    font-weight: 500;



}


}
`;

export const Detalhe = styled.div`
display: flex;
flex-direction: column;
place-content: center;
align-items: center;
width: 100%;
max-width: 700px;
`;

export const Registred = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 22px;

  a {
    font-size: 18px;
    margin-top: 5px;

    p {
      color: white;
    }
  }
`;

export const Error = styled.div`
height: 0;
margin-top: 8px;
font-size: 22px;
color:red;
`;
