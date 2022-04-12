import {useContext} from "react";
import {CartContext} from "../CartContext";
import {calculateTotal} from "../../helper/calculateCartTotal";
import "./Footer.css";
import { Link } from "react-router-dom";
import {useSession} from "@inrupt/solid-ui-react";

const Footer = () => {
    const {cartItems} = useContext(CartContext);
    const { session } = useSession();
    return (
        <div className="cartSummaryContainer">
            <div className="cartSummary">
                <p> Total: {calculateTotal(cartItems).toFixed(2)}€ </p>
            </div>
            {!session.info.isLoggedIn ?
            <div className="notLoggedIn">
                <p>Log in to proceed<br/> with checkout</p>
            </div> :
            <Link to="/checkout" >
                <button> Checkout </button>
            </Link>}
        </div>
    )
}

export default Footer;