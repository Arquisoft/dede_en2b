import * as React from "react";
import {addOrderForUser} from "../../api/api";
import {OrderProduct, OrderType, ProductType} from "../../shared/shareddtypes";
import {useContext} from "react";
import {calculateTotal} from "../../helper/calculateCartTotal";
import {CartContext} from "../CartContext";
import {useSession} from "@inrupt/solid-ui-react";
import {stringToHexadecimal} from "../../helper/stringToHexadecimal";
import useFetch from "../../hooks/useFetch";
import useOrdersByUser from "../../hooks/useOrdersByUser";

const CompleteOrder = () => {

    const {cartItems} = useContext(CartContext);

    const orderProductsToPut: OrderProduct[] = [];
    let orderP: OrderProduct;
    let productsType:OrderType;

    cartItems.map( item => orderProductsToPut.push(orderP = {
        id: 5, order: productsType, quantity: item.amount , price: item.price,
        product: {id: item.id, name: item.name, category: "Order", price: item.price, image: item.image}
    }));

    const subTotal = calculateTotal(cartItems);
    const {session} = useSession();
    const webId = stringToHexadecimal(session.info.webId!);
    const date = new Date();

    let month = "";
    if(date.getMonth() < 10){
        month = "0" + date.getMonth().toString();
    } else{
        month = date.getMonth().toString();
    }

    productsType = {
        id: 0,
        date: date.getDate() + "/" + month + "/" + date.getFullYear(),
        user: webId,
        totalPrice: subTotal,
        status: "PENDING",
        orderProducts: orderProductsToPut
    }

    const addOrder = addOrderForUser(productsType);


    return (
        <div>
            The order has been completed!
        </div>
    );
}

export default CompleteOrder;