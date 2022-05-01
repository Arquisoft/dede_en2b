import {CartContext} from "../CartContext";
import React, {useContext, useEffect} from "react";
import CartItemCheckout from "./CartItemCheckout";
import Divider from '@mui/material/Divider';
import {calculateTotal} from "../../helper/calculateCartTotal";
import {Card, CardMedia} from "@mui/material";
import "./Order.css";
import Box from "@mui/material/Box";
import logo from '../../img/shippingicon.jpg';
import logoReceipt from '../../img/receipticon.png';
import {GetPostalCode, GetAddress, GetDeliveryCost} from "../../helper/calculateDeliveryCost";

import {Address} from "../../shared/shareddtypes";
import {useSession} from "@inrupt/solid-ui-react";
import {retrieveAddressesForUser} from "../../helper/addressHelper";


export default function Order() {

    const {cartItems} = useContext(CartContext);

    const { session } = useSession();

    // DATA FROM THINGS
    retrieveAddressesForUser(session);

    let adds: Address[] = [];

    let addresses = sessionStorage.getItem("addresses");

    let addressesJSON = JSON.parse(addresses as string) as JSON;

    if (addresses != null) {
        for (let address of addressesJSON as unknown as Array<Address>) {
            adds.push(address);
        }
    }
    // DATA FROM THINGS

    // DATA FROM POD
    const [address, setAddress] = React.useState("");
    const [postalCode, setPostalCode] = React.useState(0);
    const [deliveryCost, setDeliveryCost] = React.useState(0);

    const getPodAddress = async () => setAddress(await GetAddress());
    const getPodPostalCode = async () => setPostalCode(await GetPostalCode());
    const getDeliveryCost = async () => setDeliveryCost(await GetDeliveryCost());

    getPodAddress();
    getPodPostalCode();
    getDeliveryCost();
    // DATA FROM POD

    const subTotal = (+calculateTotal(cartItems).toFixed(2) + +deliveryCost).toFixed(2);

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

        <div className="data">
            <Card variant="outlined" sx= {{display:'flex', maxWidth:950}}>

                <Box sx={{display:'flex', flex: 1}}>
                    <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', flex: 3.5}}>
                        <div className="item-detail">
                            <div className="detail-info">
                                <div className="item-name">
                                    Address: {address !== "" ? address : adds.at(0)?.street} | Postal Code: {(!isNaN(postalCode) && postalCode != 0) ? postalCode : adds.at(0)?.postalCode}
                                </div>
                            </div>
                        </div>
                    </Box>
                </Box>
            </Card>
        </div>

        <div className="shippingCost">
            <Card variant="outlined" sx= {{display:'flex', maxWidth:950}}>

                <CardMedia
                    component="img"
                    sx={{ width:150, height: 50 }}
                    image={logo}
                    alt="shippingCost"
                />

                <Box sx={{display:'flex', flex: 1}}>
                    <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', flex: 3.5}}>
                        <div className="item-detail">
                            <div className="detail-info">
                                <div className="item-name">
                                    Shipping cost
                                </div>
                            </div>
                        </div>
                    </Box>

                    <Divider orientation="vertical" flexItem />

                    <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', pl: 1, pb: 1, flex : 1}}>
                        <span>{deliveryCost}€</span>
                    </Box>

                </Box>
            </Card>
        </div>

        <div className="subTotal">
            <Card variant="outlined" sx= {{display:'flex', maxWidth:950}}>

                <CardMedia
                    component="img"
                    sx={{ width:150, height: 50 }}
                    image={logoReceipt}
                    alt="subTotal"
                />

                <Box sx={{display:'flex', flex: 1}}>
                    <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', flex: 3.5}}>
                        <div className="item-detail">
                            <div className="detail-info">
                                <div className="item-name">
                                    Subtotal
                                </div>
                            </div>
                        </div>
                    </Box>

                    <Divider orientation="vertical" flexItem />

                    <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', pl: 1, pb: 1, flex : 1}}>
                        <span>{subTotal}€</span>
                    </Box>

                </Box>
            </Card>
        </div>

        </div>;
}