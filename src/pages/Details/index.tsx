import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';

import { Container } from './styles';


interface Data {
  newDisc: string;
  newProf: string;
  newDiaS: string;
  newPed: string;
  newHour: string;
}


const Details: React.FC = () => {


  const storagedRepositories = localStorage.getItem('@Prof');
  const [data, setData] = useState<Data | null>(null);

  useEffect (()=>{
    if(storagedRepositories){
      setData(JSON.parse(storagedRepositories));
    }else{
      console.log('');
    }
  },[storagedRepositories])

  console.log(data);

  return (

    <Container>
      <h1><strong>GoBarber lista</strong></h1>
      <p>{data.newDisc}</p>

    </Container>
  );
};

export default Details;
