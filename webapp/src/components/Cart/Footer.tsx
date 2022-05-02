import {useContext} from "react";
import {CartContext} from "../CartContext";
import {calculateTotal} from "../../helper/calculateCartTotal";
import "./Footer.css";
import { Link } from "react-router-dom";
import {useSession} from "@inrupt/solid-ui-react";
import * as React from "react";
import {GetAddress, GetPostalCode} from "../../helper/calculateDeliveryCost";
import {Address} from "../../shared/shareddtypes";
import {retrieveAddressesForUser} from "../../helper/addressHelper";

const Footer = () => {
    const {cartItems} = useContext(CartContext);
    const { session } = useSession();

    retrieveAddressesForUser(session);

    let adds: Address[] = [];

    let addresses = sessionStorage.getItem("addresses");

    let addressesJSON = JSON.parse(addresses as string) as JSON;

    if (addresses != null) {
        for (let address of addressesJSON as unknown as Array<Address>) {
            adds.push(address);
        }
    }

    const [address, setAddress] = React.useState("");
    const [postalCode, setPostalCode] = React.useState(0);
    const getPodAddress = async () => setAddress(await GetAddress());
    const getPodPostalCode = async () => setPostalCode(await GetPostalCode());

    getPodAddress();
    getPodPostalCode().then();

    return (
        <div className="cartSummaryContainer" data-testid={"footerContainer"}>
            <div className="cartSummary">
                <p> Total: {calculateTotal(cartItems).toFixed(2)}€ </p>
            </div>
            {!session.info.isLoggedIn ?
                <div className="notLoggedIn">
                    <p data-testid="notLoggedIn">Log in to proceed<br/> with checkout</p>
                </div> : (adds.length > 0 || (address !== "" && (!isNaN(postalCode) && postalCode != 0))) ?
                    <Link to="/checkout" >
                        <button> Checkout </button>
                    </Link>  :
                    <p> No postal code or address, <br /> change it
                        <Link to="/data" style={{ color: "green"}}> here</Link>
                    </p>


            }
        </div>
    )
}

export default Footer;