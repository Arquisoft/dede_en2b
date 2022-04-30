import { Routes, Route, BrowserRouter } from "react-router-dom";

import "./App.css";

import HomePage from "./components/HomePage";

import Navbar from "./components/Navbar";
import ListProducts from "./components/ListProducts";
import { CartProvider } from "./components/CartContext";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import ProductDetail from "./components/ProductDetail";

import Stack from "@mui/material/Stack";
import ListOrders from "./components/PastOrders/ListOrders";
import Footer from "./components/Footer/Footer";
import OrderDetail from "./components/PastOrders/OrderDetail";
import About from "./components/About/AboutUs";
import ChangeData from "./components/POD/ChangeData";
import AddProduct from "./components/Admin/AddProduct";

function App(): JSX.Element {
    window.getComputedStyle(document.body)
    return (
        <Stack direction="row">
            <Stack direction="column" sx={{ width: "100%" }}>
                <BrowserRouter>
                        <div className={"NonSidebar"}>
                            <CartProvider>
                                <Navbar />
                                <Routes>
                                    <Route path="/products" element={<ListProducts />} />
                                    <Route path="/products?filter=:filter" element={<ListProducts />} />
                                    <Route path="/products/:id" element={<ProductDetail />} />
                                    <Route path="/cart" element={<Cart />} />
                                    <Route path="/orders" element={<ListOrders/>} />
                                    <Route path="/orders/:orderId" element={<OrderDetail/>}/>
                                    <Route path="/checkout" element={<Checkout />} />
                                    <Route path="/about" element={<About />} />
                                    <Route path="/admin/addProduct" element={<AddProduct />} />
                                    <Route path="/data" element={<ChangeData />} />
                                    <Route path="/" element={<HomePage />} />
                                </Routes>
                                <Footer/>
                            </CartProvider>
                        </div>
                </BrowserRouter>
            </Stack>
        </Stack>
    );
}

export default App;
