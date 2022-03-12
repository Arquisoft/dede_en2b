import React, { useContext } from 'react'
import styled from "styled-components";
import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import Badge from "@mui/material/Badge";
import { CartContext } from "./CartContext";
import { getTotalItemsNumber } from "../helper/calculateCartTotal";
import { Link } from "react-router-dom";
import { SessionProvider, LoginButton } from "@inrupt/solid-ui-react";

const Container = styled.div`
    height: 60px;
    padding-bottom: 30px;
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

const SearchContainer = styled.div`
    border: 1px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
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
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
`;



const Navbar = () => {

    const { cartItems } = useContext(CartContext);



    return (
        <Container>
            <Wrapper>
                <Left>
                    <SearchContainer>
                        <Input />
                        <Search style={{ color: "gray", fontSize: 20 }} />
                    </SearchContainer>
                </Left>
                <Center>
                    <Link to="/" style={{ color: "black", textDecoration: 'none' }}>
                        <Logo>DeDe</Logo>
                    </Link>
                </Center>
                <Right>
                    <SessionProvider sessionId="some-id">
                        <LoginButton
                            oidcIssuer="https://inrupt.net"
                            redirectUrl="https://localhost:3000/"
                        />
                    </SessionProvider>
                    <Link to="/cart" >
                        <MenuItem>
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