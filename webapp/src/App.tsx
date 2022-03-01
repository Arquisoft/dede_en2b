import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import  {getUsers} from './api/api';
import {User} from './shared/shareddtypes';
import './App.css';

import ButtonAppBar from './components/Appbar';
import ProductsTable from './components/ProductsTable';


function App(): JSX.Element {

  const [users,setUsers] = useState<User[]>([]);

  const refreshUserList = async () => {
    setUsers(await getUsers());
  }

  useEffect(()=>{
    refreshUserList();
  },[]);

  return (
    <>
      <ButtonAppBar/>
      <Container>
        <ProductsTable/>
      </Container>
    </>
  );
}

export default App;
