import React, {useState, useEffect} from 'react';

import {getProductCatalog} from './api/api';
import {Product} from './shared/shareddtypes';
import './App.css';

import ButtonAppBar from './components/Appbar';
import HomePage from "./components/HomePage";
import EnhancedTable from "./components/ProductsTable";

import {BrowserRouter as Router, Routes, Route, BrowserRouter} from "react-router-dom";


function App(): JSX.Element {

    const [products, setProducts] = useState<Product[]>([]);

    const refreshUserList = async () => {
        setProducts(await getProductCatalog());
    }

    useEffect(() => {
        refreshUserList();
    }, []);

    return (
        <>
            <BrowserRouter>
                <ButtonAppBar/>
                <div className="body">
                    <Routes>
                        <Route path="/" element={<HomePage />}/>
                        <Route path="/products" element={<EnhancedTable products={products}/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
        </>
    );
}

export default App;
