import { SessionProvider, LoginButton } from "@inrupt/solid-ui-react";
import React, { useState, useEffect, ReactElement } from 'react';
import Container from '@mui/material/Container';
import  {getProductCatalog} from './api/api';
import {Product} from './shared/shareddtypes';
import './App.css';

import ButtonAppBar from './components/Appbar';
import EnhancedTable from "./components/ProductsTable";


function App(): JSX.Element {

  const [products,setProducts] = useState<Product[]>([]);

  const refreshUserList = async () => {
      setProducts(await getProductCatalog());
  }

  useEffect(()=>{
    refreshUserList();
  },[]);

  return (
    <>
      <ButtonAppBar/>
      <Container>
        <EnhancedTable products={products}/>
      </Container>
    </>
  );
}

export default App;


function WithChildren({
  oidcIssuer,
  onError,
}: {
  oidcIssuer: string;
  onError: (error: Error) => void;
}): ReactElement {
  return (
    <SessionProvider sessionId="log-in-example">
      <p>
        Prueba de Pods.
      </p>

      <LoginButton
        oidcIssuer={oidcIssuer}
        redirectUrl={window.location.href}
        onError={onError}
      >
        <button color="primary">Log In</button>
      </LoginButton>
    </SessionProvider>
  );
}