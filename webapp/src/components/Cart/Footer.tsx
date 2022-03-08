import {useContext} from "react";
import {CartContext} from "../CartContext";
import {calculateTotal} from "../../helper/calculateCartTotal";

const Footer = () => {
    const {cartItems} = useContext(CartContext);
    return (
        <div className="cartSummary">
            Total: {calculateTotal(cartItems).toFixed(2)}€
        </div>
    )
}

export default Footer;