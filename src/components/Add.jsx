import React, { useState } from "react";
import { styled } from '@mui/material/styles';
import AddIcon from '@mui/icons-material/Add';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import { Box,Avatar,Typography,Tooltip, Fab, Modal, TextField,Stack, ButtonGroup, Button} from '@mui/material';
import { DateRange } from "@mui/icons-material";


const StyledModel=styled(Modal)({
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
});
const Userbox=styled(Box)({
    display:"flex",
    alignItems:"center",
    gap:"10px",
    marginBottom:"5px"
});

function Add(){
    const [open,setopen]=useState(false);
    return ( <>
{/* this is a add icon  */}
      <Tooltip title="add" onClick={(e)=>setopen(true)}
       sx={{position:"fixed",bottom:10,left:{xs:"calc(50%)",md:"200px"}}}
       >
            <Fab color="primary" aria-label="add">
            <AddIcon/>
            </Fab>
        </Tooltip>
        {/* <Button onClick={handleOpen}>Open modal</Button> */}
{/* when add icon clicked this modal will open the box */}
      <StyledModel
        open={open}
        onClose={e=>setopen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >

 {/* this is box when open when clicked on add icon */}
    <Box  width={400} height={280} p={3} bgcolor={"background.default"} color={"text.primary"} borderRadius={5}>
    {/* first element of box */}
        <Typography variant="h6" color="gray" textAlign="center">Create Post</Typography>
    {/* second element of box */}
     <Userbox>
         <Avatar 
          alt="Robin"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBPdFHPaGebRk1P-UaSRoamb_qhx-ajvqIKA&usqp=CAU" 
          sx={{width:30,height:30}}
         />
         <Typography variant="span" fontWeight={500}>
           comment here...
          </Typography>
    </Userbox>
  {/* third element of box */}
    <TextField
          sx={{width:"100%"}}
          id="standard-multiline-static"
          multiline
          rows={4}
          placeholder="Write here.."
          variant="standard"
        />
 {/* fourth element of box */}
    <Stack direction="row" gap={1} mb={2}
    >
    <SentimentDissatisfiedIcon/>
    <EmojiEmotionsIcon/>
    <SentimentSatisfiedAltIcon/>
    </Stack>
{/* fifth element of box */}
    <ButtonGroup fullWidth variant="contained" aria-aria-label="outlined primary button group">
  <Button>Post</Button>
  <Button sx={{width:"100px"}}><DateRange/></Button>
    </ButtonGroup>
    </Box>
 </StyledModel></>
    )
}
export default Add;