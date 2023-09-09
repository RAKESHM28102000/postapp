import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import GroupIcon from '@mui/icons-material/Group'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import { Box,List,ListItem,ListItemButton,ListItemIcon,ListItemText} from '@mui/material';
import CustomizedSwitches from "./CustomizedSwitches";
import Fab from '@mui/material/Fab';
import RefreshIcon from '@mui/icons-material/Refresh';

function Sidebar(props){
    return (
    <Box
    //  backgroundColor="white" 
     flex={2} 
     p={2}
     sx={{display :{xs:"none" ,md:"block" }}}>
     <Box width={250} position="fixed"  sx={{boxShadow:"5px 10px 5px rgba(0,0,0,0.3)"}}>
        <List>
        {/* this ListItem-1 */}
          <ListItem disablePadding>
            <ListItemButton component="a" href={""}>
              <ListItemIcon>
                <HomeIcon/>
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>
          {/* this ListItem-2 */}
          <ListItem disablePadding>
            <ListItemButton component="a" href="#pages">
              <ListItemIcon>
                <ArticleIcon/>
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>
         {/* this ListItem-3*/} 
      
        {/* this ListItem-4 */}
     {/* this ListItem-6 */}
          <ListItem disablePadding>
            <ListItemButton component="a" href="#Settings">
              <ListItemIcon>
                <SettingsIcon/>
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>

           {/* this ListItem-7*/}
           <ListItem disablePadding>
            <ListItemButton component="a" href="#AccountCircle">
              <ListItemIcon>
                <AccountCircleIcon/>
              </ListItemIcon>
              <ListItemText primary="AccountCircle" /> 
            </ListItemButton>
          </ListItem>
        
          </List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#groups">
              <ListItemIcon onClick={()=>props.refresh()}>
              <Fab size="medium" color="dark" aria-label="add"><RefreshIcon/></Fab>
              </ListItemIcon>
              <ListItemText primary=" Refresh" />
            </ListItemButton>
          </ListItem>
           {/* this ListItem-8*/}
           <ListItem disablePadding>
            <ListItemButton component="a" href="#darkmode">
             <CustomizedSwitches setmode={props.setmode} mode={props.mode} />
              <ListItemText />
            </ListItemButton>
          </ListItem>
          </Box>
        
</Box>)
}
export default Sidebar;