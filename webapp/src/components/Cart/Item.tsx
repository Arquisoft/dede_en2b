import React, {useContext} from 'react';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import {Button, Card, CardMedia} from '@mui/material';
import {CartItem} from "../../shared/shareddtypes";
import {CartContext} from "../CartContext";
import "./Cart.css";
import Box from "@mui/material/Box";
import ClearIcon from '@mui/icons-material/Clear';
import { useTheme } from '@mui/material/styles';


type Props = {
    item: CartItem
}

const Item = ({item}:Props) => {
    
    const {dispatch} = useContext(CartContext);

    useTheme();
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
                <Box sx={{display: 'flex', flexDirection: 'column', flex: 1}}>
                    <div className="item-detail">
                        <div className="detail-info">
                            <div className="item-name">
                                {item.name}
                            </div>
                            <div className="item-price">
                                <span>{item.price}€</span>
                            </div>
                        </div>
                    </div>
                </Box>
                <Box sx={{display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                    <Button
                        onClick={() => dispatch({
                            payload: item,
                            type: 'ADD'
                        })}>
                        <AddOutlinedIcon color="action"/>
                    </Button>
                    <span>{item.amount}</span>
                    <Button
                        onClick={() => dispatch({
                            payload: item.id,
                            type: 'REMOVE'
                        })}>
                        <RemoveOutlinedIcon color="action"/>
                    </Button>
                </Box>
                <Box sx={{ display: 'flex' }}>
                    <Button  onClick={() => dispatch({
                        payload: item.id,
                        type: 'REMOVE-ALL'
                    })}>
                        <ClearIcon color="disabled"/>
                    </Button>
                </Box>
                </Box>
            </Card>
        </div>
    )
}

export default Item;