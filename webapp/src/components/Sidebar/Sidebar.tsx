import { SidebarData } from "./SidebarData"

import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';

function Sidebar() {
    const drawerWidth = 60;

    return (
        <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left">
            <List>
                {SidebarData.map((val, key) => {
                    return (
                        <ListItem button
                            key={key} 
                            className ="row" 
                            id={window.location.pathname == val.link ? "active" : ""}
                            onClick={() => (window.location.pathname = val.link)}>
                        <Typography id="icon" align="center">{val.icon}</Typography>
                        </ListItem>
                    )
                }
                )}
            </List>
        </Drawer>

    )

}

export default Sidebar