import React, { FormEvent, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logoBarber from '../../assets/logo.svg';


import {
  Registred,
  Container,
  Content,
  Detalhe,
  Form,
  Error,
  Global,
} from './styles';


interface Data {

  newDisc: string;
  newProf: string;
  newDiaS: string;
  newPed: string;
  newHour: string;

}

const Dashboard: React.FC = ( ) => {

  const [newDisc, setNewDisc] = useState('');
  const [newProf, setNewProf] = useState('');
  const [newDiaS, setDiaS] = useState('');
  const [newPed, setNewPed] = useState('');
  const [newHour, setNewHour] = useState('');

  const [ErroForm, setErroForm] = useState(false);

  const [repositories, setRepositories] = useState<Data[]>(() => {
    const storagedRepositories = localStorage.getItem('@prof');

    if (storagedRepositories) {
      return JSON.parse(storagedRepositories);
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem('@prof', JSON.stringify(repositories));
  }, [repositories]);

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    if (
      newDisc === '' ||
      newProf === '' ||
      newDiaS === '' ||
      newPed === '' ||
      newHour === ''
    ) {
      setErroForm(true);
    }

    else {
      const response = {
        newDisc,
        newProf,
        newDiaS,
        newPed,
        newHour,
      };

      const repository = response;

      setRepositories([...repositories, repository]);
      setErroForm(false);
    }
  }

  return (
    <Global>
    <Container>


      <Content>
      <img src ={logoBarber}  alt="GoBarber"/>
      <h1>Cadastre um Professor</h1>
        <Form>

          <strong>Faça o cadastro:</strong>
          <form onSubmit={handleSubmit}>
            <input
              value={newDisc}
              onChange={e => setNewDisc(e.target.value)}
              placeholder="Disciplina"
            />
            <input
              value={newProf}
              onChange={e => setNewProf(e.target.value)}
              placeholder="Professor"
            />
            <input
              value={newDiaS}
              onChange={e => setDiaS(e.target.value)}
              placeholder="Semana"
            />
            <input

              value={newPed}
              onChange={e => setNewPed(e.target.value)}
              placeholder="Periodo"
            />
            <input

              value={newHour}
              onChange={e => setNewHour(e.target.value)}
              placeholder="Aulas"
            />

            <button type="submit">Cadastrar</button>

            <Error>

            {ErroForm && `Verifique o preenchimento!`}
            </Error>

          </form>

        </Form>
        <Detalhe/>
        <Registred>
          <strong>Usuários inseridos:</strong>

          {repositories.map(repository => (
            <Link
              key={repository.newProf}
              to={`/detalhes/${repository.newProf}`}

            >

              <p>Professor: {repository.newProf}</p>



            </Link>

          ))}

        </Registred>
      </Content>
    </Container>
    </Global>
  );
};

export default Dashboard;
