import React, { useContext, useState } from 'react'
import Badge from "@mui/material/Badge";
import { styled, useTheme } from '@mui/material/styles';
import { CartContext } from "./CartContext";
import { getTotalItemsNumber } from "../helper/calculateCartTotal";
import { Link } from "react-router-dom";
import { SessionProvider, useSession} from "@inrupt/solid-ui-react";
import LoginButtonContainer from "./LoginButtonContainer";
import UserInfoContainer from "./UserInfoContainer";
import Stack from "@mui/material/Stack";
import "./Navbar.css";
import { ShoppingCartOutlined } from "@mui/icons-material";
import "./SearchBar";
import SearchBar from "./SearchBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import HomeIcon from "@mui/icons-material/Home";
import FoodBankIcon from "@mui/icons-material/FoodBank";
import {Button} from "@mui/material";
import Typography from "@mui/material/Typography";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AddBoxIcon from '@mui/icons-material/AddBox';

const drawerWidth = 240;
let adminOptions = false;
let temporalWebId = "";

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

let sidebarData = [
    {
        title: "Home",
        icon: <HomeIcon fontSize="large" />,
        link: "/",
    },
    {
        title: "Products",
        icon: <FoodBankIcon fontSize="large" />,
        link: "/products",
    },
    {
        title: "Delivery info",
        icon: <LocalShippingIcon fontSize="large" />,
        link: "/data",
    },
];

const loadAddProduct = (session:any) => {

    if(temporalWebId === "https://dd2badm.inrupt.net/profile/card#me"){
        if(!adminOptions) {
            sidebarData.push({
                title: "Add product",
                icon: <AddBoxIcon fontSize="large"/>,
                link: "/admin/addProduct",
            });
            adminOptions = true;
        }
    } else {

        if(adminOptions){
            sidebarData.pop();
        }

        adminOptions = false;
    }
}


const Navbar = () => {

    const { cartItems } = useContext(CartContext);

    // LOGIN
    //We use this state variable
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    //With this we can control the login status for solid
    const { session } = useSession();

    console.log(session.info.webId);

    loadAddProduct(session);

    //We have logged in
    session.onLogin(()=>{
        temporalWebId = session.info.webId as string;
        setIsLoggedIn(true)
    })

    //We have logged out
    session.onLogout(()=>{
        temporalWebId = "";
        setIsLoggedIn(false)
    })
    // LOGIN

    return (
        <Stack justifyContent="space-around" direction="row">
            <Toolbar>
                <IconButton data-testid="sidebar"
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    sx={{ ...(open && { display: 'none' }) }}
                >
                    <MenuIcon />
                </IconButton>
            </Toolbar>

            <div className={"searchContainer"}>
                <SearchBar />
            </div>

            <Stack justifyContent="center" alignItems="center">
                <div className={"logoContainer"}>
                    <Link to="/" style={{ color: "black", textDecoration: 'none', fontWeight: 'bold', textAlign: 'center' }}>
                        <h1>DeDe</h1>
                    </Link>
                </div>
            </Stack>

            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader>
                    <Typography fontFamily={"Trebuchet MS"} variant="h5" component="p" sx={{marginLeft: 'auto', marginRight: 'auto'}}>
                        Explore
                    </Typography>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <Stack direction="column">
                    {sidebarData.map((e) => (

                        <Button
                            component={Link}
                            to={e.link}
                            startIcon={e.icon}
                            key={e.title}
                            variant="text"

                            sx={{ color: "text.primary" }}
                        > {e.title} </Button>

                    ))}
                </Stack>
            </Drawer>

            <Stack justifyContent="space-even" direction="row" alignItems="center">
                <SessionProvider sessionId="some-id">
                    {(!isLoggedIn) ? <LoginButtonContainer/> : <UserInfoContainer/>}
                    {(isLoggedIn) ?
                        <Link to="/orders" style={{ color: "black", textDecoration: 'none', fontSize: '1.1em', cursor:'pointer' }}>
                            <div>Orders</div>
                        </Link>
                        : null}
                </SessionProvider>
                <Link to="/cart" style={{ fontSize: '1.1em', cursor:'pointer'}} >
                    <div className={"shopIcon"}>
                        <Badge badgeContent={getTotalItemsNumber(cartItems)} color="primary">
                            <ShoppingCartOutlined />
                        </Badge>
                    </div>
                </Link>
            </Stack>
        </Stack>


    )
}



export default Navbar;
