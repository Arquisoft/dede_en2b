import React from 'react';

import './App.css';

import HomePage from "./components/HomePage";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import ListProducts from "./components/ListProducts";
import { CartProvider } from "./components/CartContext";
import Cart from "./components/Cart/Cart";
import Sidebar from "./components/Sidebar/Sidebar"

function App(): JSX.Element {

    return (
        <div className='App'>
            <Sidebar></Sidebar>
            <BrowserRouter>
                <CartProvider />

                <Navbar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/products" element={<ListProducts />} />
                    <Route path="/cart" element={<Cart />} />

                </Routes>

            </BrowserRouter>
            
        </div>
    );
}

export default App;
