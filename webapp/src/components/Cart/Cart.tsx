import React, {useContext} from 'react';
import {CartContext} from "../CartContext";
import Item from "./Item";
import Footer from "./Footer";
import "./Cart.css";

const Cart = () => {

    const {cartItems} = useContext(CartContext);

    if (!cartItems.length) return <h5>Shopping cart is empty</h5>;

    return (
        <div className="CartContainer">
            <h2>Your shopping cart</h2>
            <div className="cartDetailsContainer">
                <div className="cartProductInfo">
                    {
                        cartItems.map(item => (
                            <Item
                                key={item.id}
                                item={item}/>
                        ))
                    }
                </div>
                <Footer/>
            </div>

        </div>
    )
}

export default Cart;