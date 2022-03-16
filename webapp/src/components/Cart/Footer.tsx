import {useContext} from "react";
import {CartContext} from "../CartContext";
import {calculateTotal} from "../../helper/calculateCartTotal";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
    const {cartItems} = useContext(CartContext);
    return (
        <div className="cartSummaryContainer">
            <div className="cartSummary">
                <p> Total: {calculateTotal(cartItems).toFixed(2)}€ </p>
            </div>
            <Link to="/checkout" >
                <button> Checkout </button>
            </Link>
        </div>
    )
}

export default Footer;