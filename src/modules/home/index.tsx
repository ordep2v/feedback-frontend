import { Button, Heading, Input } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useReducer, useState } from 'react';
import {
  PERSON_CREATE_FAIL,
  PERSON_CREATE_REQUEST,
  PERSON_CREATE_SUCCESS,
} from '../../config/constants';
import reducers from '../../config/reducers';

const Home: React.FC = () => {
  const [infos, setInfos] = useState<IPersonProps>({
    name: '',
    email: '',
    sector: '',
  });

  const initialState = {
    loading: false,
  };

  const [state, dispatch] = useReducer(reducers, initialState);

  function handleInputChange(e: React.ChangeEvent<HTMLFormElement>): void {
    e.preventDefault();
    setInfos({ ...infos, [e.target.id]: e.target.value });
  }

  async function handleCreatePerson(
    e: React.MouseEvent<HTMLButtonElement>,
  ): Promise<void> {
    e.preventDefault();
    dispatch({ type: PERSON_CREATE_REQUEST, loading: true });
    try {
      const { data } = await axios.post(
        'http://localhost:4001/persons/',
        infos,
      );
      dispatch({ loading: false, type: PERSON_CREATE_SUCCESS, payload: data });
      setInfos({ name: '', email: '', sector: '' });
      alert('Registrado com sucesso!');
    } catch (error: any) {
      dispatch({
        loading: false,
        type: PERSON_CREATE_FAIL,
        payload: error.message,
      });
      alert('Ocorreu algum erro, preencha todos os campos!');
    }
  }
  return (
    <>
      <form id="form" onChange={handleInputChange}>
        <Heading color="#f2f2f2" size="md">
          Preencha o formulário para criar uma pessoa.
        </Heading>
        <Input value={infos.name} color="#f2f2f2" id="name" type="text" />
        <Input value={infos.email} color="#f2f2f2" id="email" type="email" />
        <Input value={infos.sector} color="#f2f2f2" id="sector" type="text" />
        <Button colorScheme="blue" onClick={handleCreatePerson}>
          Enviar
        </Button>
      </form>
    </>
  );
};

export default Home;
