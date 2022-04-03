import { Link } from "react-router-dom";

import { Stack, Button, Drawer } from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import FoodBankIcon from "@mui/icons-material/FoodBank";

const sidebarData = [
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
];

function Sidebar() {
    const drawerWidth = 60;

    return (
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                    width: drawerWidth,
                    boxSizing: "border-box",
                },
            }}
            variant="permanent"
            anchor="left"
        >
            <Stack direction="column">
                {sidebarData.map((e) => (
                    <Button
                        component={Link}
                        to={e.link}
                        startIcon={e.icon}
                        key={e.title}
                        variant="text"
                        sx={{ color: "text.primary" }}
                    />
                ))}
            </Stack>
        </Drawer>
    );
}

export default Sidebar;
