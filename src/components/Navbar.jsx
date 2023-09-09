import React, { useState } from "react";
import MailIcon from '@mui/icons-material/Mail';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { AppBar,Toolbar,styled,Typography,Box,InputBase,Badge,Avatar,Menu,MenuItem  } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import ElectricMeterIcon from '@mui/icons-material/ElectricMeter';

const StyledToolbar=styled(Toolbar)({
    display:"flex",
    justifyContent:"space-around"

})
const Search=styled("div")(({theme})=>({
   backgroundColor:"white",
   color:"text.primary",
   padding:"0 10px",
   borderRadius:theme.shape.borderRadius,
   width:"auto"

}));
const Icons=styled(Box)(({theme})=>({
  display:"none",
  gap:"20px",
  alignItems:"center",
  [theme.breakpoints.up("sm")]:{
    display:"flex",
  }
 }));
 const UserBox=styled(Box)(({theme})=>({
    display:"flex",
    gap:"10px",
    alignItems:"center",
    [theme.breakpoints.up("sm")]:{
        display:"none",
      }
   }));
  
function Navbar({search,setSearch}){
    const [open,setOpen]=useState(false);
   


    return (<AppBar position="sticky" sx={{bgcolor:"orange"}}>
    <StyledToolbar>

    {/* this is a Title */}
    <Typography variant="h6" sx={{display:{xs:"none",md:"block"}}}>QMAX SYSTEMS <ElectricMeterIcon/></Typography>
    <ElectricMeterIcon sx={{display:{xs:"block",md:"none"}}}/>

    {/* this is search box */}
    <Tooltip title="titles are in latin language,so search in latin">
    <Search><InputBase value={search} placeholder="search the title..." sx={{color:"black"}} onChange={(e)=> setSearch(e.target.value)}/></Search>
    </Tooltip>

    {/* this is icons */}
    <Icons>
    <Badge badgeContent={4} color="error">
     <MailIcon  />
    </Badge>
    <Badge badgeContent={3} color="error">
     <NotificationsActiveIcon/>
    </Badge>
    <Avatar sx={{width:30,height:30}} src="https://picsum.photos/seed/picsum/200/300"
     onClick={(e)=>setOpen(true)}
    />
    </Icons>
  {/* this is user details box*/}
    <UserBox onClick={(e)=>setOpen(true)}>
    <Avatar 
    sx={{width:30,height:30}} 
    src="https://picsum.photos/seed/picsum/200/300"/>

    {/* <Typography variant="span">QMAX</Typography> */}
    </UserBox>

    </StyledToolbar>
    <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e)=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem href="/profile">Profile</MenuItem>
        <MenuItem href="/account">My account</MenuItem>
        <MenuItem href="/logout" >Logout</MenuItem>
      </Menu>

    </AppBar>
    )
}
export default Navbar;