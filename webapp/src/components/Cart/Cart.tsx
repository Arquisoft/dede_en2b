import React, {useContext} from 'react';
import {CartContext} from "../CartContext";
import Item from "./Item";
import Footer from "./Footer";
import "./Cart.css";
import logo from '../../img/emptyshoppingcart.png';

const Cart = () => {

    const {cartItems} = useContext(CartContext);

    if (!cartItems.length) return <div id={"emptyCart"}> <h5>Shopping cart is empty</h5>
        <img src={logo} alt="emptyShoppingCard"/>
    </div>;

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