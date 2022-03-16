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



const Container = styled.div`
    
`;

const Wrapper = styled.div`
    
    display: flex;
    justify-content: space-between;
`;

const Left = styled.div`
    
    display: flex;
    align-items: center;
`;


const Input = styled.input`
    border: none;
`;

const Center = styled.div`
    flex: 1;
`;

const Logo = styled.h1`
    font-weight: bold;
    text-align: center;
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const MenuItem = styled.div`
    font-size: 2.5em;
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
        <Container>
            <Wrapper>
                
                <Center>
                    <div className={"logoContainer"}>
                        <Link to="/" style={{ color: "black", textDecoration: 'none' }}>
                            <Logo>DeDe</Logo>
                        </Link>
                    </div>
                </Center>
                <Right>
                    <SessionProvider sessionId="some-id">
                        {(!isLoggedIn) ? <LoginButtonContainer/> : <UserInfoContainer/>}
                    </SessionProvider>
                    <Link to="/cart" >
                        <MenuItem className={"shopIcon"}>
                            <Badge badgeContent={getTotalItemsNumber(cartItems)} color="primary">
                                <ShoppingCartOutlined />
                            </Badge>
                        </MenuItem>
                    </Link>
                </Right>
            </Wrapper>
        </Container>
    )
}



export default Navbar;