import {CartItem} from "../../shared/shareddtypes";
import React, {useContext} from "react";
import {CartContext} from "../CartContext";
import {useTheme} from "@mui/material/styles";
import {Button, Card, CardMedia} from "@mui/material";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import "./CartItemCheckout.css";

type Props = {
    item: CartItem
}

const CartItemCheckout = ({item}:Props) => {

    const {dispatch} = useContext(CartContext);

    const theme = useTheme();
    return (
        <div className="cartProductContainer">
            <Card variant="outlined" sx= {{display:'flex', maxWidth:950}}>
                <CardMedia
                    component="img"
                    sx={{ width:150, height: 105 }}
                    image={item.image}
                    alt={item.name}
                />
                <Box sx={{display:'flex', flex: 1}}>
                    <Box sx={{display: 'flex', flexDirection: 'column', flex: 3.5}}>
                        <div className="item-detail">
                            <div className="detail-info">
                                <div className="item-name">
                                    {item.name}
                                </div>
                                <div className="item-price">
                                    <span>{item.price}€</span>
                                </div>
                                <div className="item-units">
                                    <span>Units: {item.amount}</span>
                                </div>
                            </div>
                        </div>
                    </Box>

                    <Divider orientation="vertical" flexItem />

                    <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', pl: 1, pb: 1, flex : 1}}>
                        <span>{item.amount  * item.price}€</span>
                    </Box>
                </Box>
            </Card>
        </div>
    )
}

export default CartItemCheckout;