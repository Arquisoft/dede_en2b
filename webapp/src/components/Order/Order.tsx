import {CartContext} from "../CartContext";
import React, {useContext, useState} from "react";
import CartItemCheckout from "./CartItemCheckout";
import Divider from '@mui/material/Divider';
import {calculateTotal} from "../../helper/calculateCartTotal";

export default function Order() {

    const {cartItems} = useContext(CartContext);
    const shippingCost = 0;
    const subTotal = calculateTotal(cartItems).toFixed(2); // ADD SHIPPING COST

    return <div className="cartProductInfo">
        <div className="orderHeader">
            <Divider textAlign="right">PRICES</Divider>
            {
                cartItems.map(item => (
                    <CartItemCheckout
                        key={item.id}
                        item={item}/>
                ))
            }
            </div>

        <div className="shippingCost">
            Shipping cost: {shippingCost}€
        </div>

        <div className="subTotal">
            Subtotal: {subTotal}€

        </div>
        </div>;
}