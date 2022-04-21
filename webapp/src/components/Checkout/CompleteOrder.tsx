import * as React from "react";
import {addOrderForUser} from "../../api/api";
import {OrderProduct, OrderType} from "../../shared/shareddtypes";
import {useContext} from "react";
import {calculateTotal} from "../../helper/calculateCartTotal";
import {CartContext} from "../CartContext";
import {useSession} from "@inrupt/solid-ui-react";
import {stringToHexadecimal} from "../../helper/stringToHexadecimal";
import {Link} from "react-router-dom";
import './CompleteOrder.css';
import {GetAddress, GetDeliveryCost, GetPostalCode} from "../../helper/calculateDeliveryCost";

type Props = {
    address: string
}

const CompleteOrder = (props:Props) => {

    const {address} = props;

    const {cartItems} = useContext(CartContext);

    const orderProductsToPut: OrderProduct[] = [];
    let orderP: OrderProduct;
    let productsType:OrderType;


    cartItems.map( item => orderProductsToPut.push(orderP = {
        id: 0, order: productsType, quantity: item.amount , price: item.price,
        product: {id: item.id, name: item.name, category: "Order", price: item.price, image: item.image, description: "Ordered item"}
    }));

    const subTotal = calculateTotal(cartItems);
    const {session} = useSession();
    const webId = stringToHexadecimal(session.info.webId!);
    const date = new Date();

    let day = "";

    if(date.getDate() < 10){
        day = "0" + date.getDate().toString();
    } else{
        day = date.getDate().toString();
    }

    let month = "";
    if(date.getMonth() < 10){
        month = "0" + date.getMonth().toString();
    } else{
        month = date.getMonth().toString();
    }

    productsType = {
        id: 0,
        date: day + "/" + month + "/" + date.getFullYear(),
        user: webId,
        totalPrice: subTotal,
        status: "PENDING",
        orderProducts: orderProductsToPut,
        address: address
    }

    const addOrder = addOrderForUser(productsType);

    const {dispatch} = useContext(CartContext);

    return (
        <div className={"centerDiv"}>
            <p>Thank you for your purchase</p>
            <Link to="/products">
                <button onClick={() => dispatch({
                    payload: "",
                    type: 'CLEAR'
                })} type="button">
                    Continue shopping!
                </button>
            </Link>
        </div>
    );
}

export default CompleteOrder;