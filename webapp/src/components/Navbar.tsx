import React, { useContext, useState } from 'react'
import styled from "styled-components";
import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import Badge from "@mui/material/Badge";
import { CartContext } from "./CartContext";
import { getTotalItemsNumber } from "../helper/calculateCartTotal";
import { Link } from "react-router-dom";
import { SessionProvider, LoginButton, useSession} from "@inrupt/solid-ui-react";
import LoginButtonContainer from "./LoginButtonContainer";
import UserInfoContainer from "./UserInfoContainer";
import Stack from "@mui/material/Stack";
import "./Navbar.css";

const Input = styled.input`
    border: none;
`;

const Logo = styled.h1`
    font-weight: bold;
    text-align: center;
`;

const MenuItem = styled.div`
    font-size: 1.1em;
    cursor: pointer;
    
`;



const Navbar = () => {

    const { cartItems } = useContext(CartContext);

    // LOGIN
    //We use this state variable
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    //With this we can control the login status for solid
    const { session } = useSession();

    //We have logged in
    session.onLogin(()=>{
        setIsLoggedIn(true)
    })

    //We have logged out
    session.onLogout(()=>{
        setIsLoggedIn(false)
    })
    // LOGIN

    return (
        <Stack justifyContent="space-around" direction="row">
            <Stack justifyContent="center" alignItems="center">
                <div className={"logoContainer"}>
                    <Link to="/" style={{ color: "black", textDecoration: 'none' }}>
                        <Logo>DeDe</Logo>
                    </Link>
                </div>
            </Stack>

            <Stack justifyContent="space-even" direction="row" alignItems="center">
                <SessionProvider sessionId="some-id">
                    {(!isLoggedIn) ? <LoginButtonContainer/> : <UserInfoContainer/>}
                    {(isLoggedIn) ?
                        <Link to="/orders" style={{ color: "black", textDecoration: 'none' }}>
                            <MenuItem>Orders</MenuItem>
                        </Link>
                        : null}
                </SessionProvider>
                <Link to="/cart" >
                    <MenuItem className={"shopIcon"}>
                        <Badge badgeContent={getTotalItemsNumber(cartItems)} color="primary">
                            <ShoppingCartOutlined />
                        </Badge>
                    </MenuItem>
                </Link>
            </Stack>
        </Stack>
    )
}



export default Navbar;