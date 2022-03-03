import React, { useState, useEffect } from 'react';
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
