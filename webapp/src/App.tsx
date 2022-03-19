import { Routes, Route, BrowserRouter } from "react-router-dom";

import './App.css';

import HomePage from "./components/HomePage";

import Navbar from "./components/Navbar";
import ListProducts from "./components/ListProducts";
import { CartProvider } from "./components/CartContext";
import Cart from "./components/Cart/Cart";
import Sidebar from "./components/Sidebar/Sidebar"

import Stack from "@mui/material/Stack";

function App(): JSX.Element {
    return (
        <Stack direction="row">
            <Sidebar />
            
            <Stack direction="column" sx={{ width: "100%" }}>
                <BrowserRouter>
                    <CartProvider>
                        <Navbar />
                        
                        
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/products" element={<ListProducts />} />
                            <Route path="/cart" element={<Cart />} />
                        </Routes>
                    </CartProvider >
                </BrowserRouter>
            </Stack>
        </Stack>
    );
}

export default App;
