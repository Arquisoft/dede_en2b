import { Routes, Route, BrowserRouter } from "react-router-dom";

import "./App.css";

import HomePage from "./components/HomePage";

import Navbar from "./components/Navbar";
import ListProducts from "./components/ListProducts";
import { CartProvider } from "./components/CartContext";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import Sidebar from "./components/Sidebar/Sidebar";

import Stack from "@mui/material/Stack";
import ListOrders from "./components/PastOrders/ListOrders";

function App(): JSX.Element {
    return (
        <Stack direction="row">
            <Stack direction="column" sx={{ width: "100%" }}>
                <BrowserRouter>
                    <Sidebar />
                    <CartProvider>
                        <Navbar />
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route
                                path="/products"
                                element={<ListProducts />}
                            />
                            <Route path="/cart" element={<Cart />} />
                            <Route
                                path="/orders"
                                element={<ListOrders />}
                            ></Route>
                            <Route path="/checkout" element={<Checkout />} />
                        </Routes>
                    </CartProvider>
                </BrowserRouter>
            </Stack>
        </Stack>
    );
}

export default App;
