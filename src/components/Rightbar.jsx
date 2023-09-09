import React from "react";
import { Box,AvatarGroup,Avatar,Typography, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Divider} from '@mui/material';
function Rightbar(){
    return (
    <Box 
    // backgroundColor="white" 
    flex={2} 
    p={2}
    sx={{ display : {xs:"none" ,md:"block" },md:{marginRight:"20px"}}}>
     <Box position="fixed" width={270}>
 <Typography variant="h6" fontWeight={200}>Latest Post</Typography>
     <AvatarGroup max={5} >
  <Avatar alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBPdFHPaGebRk1P-UaSRoamb_qhx-ajvqIKA&usqp=CAU" />
  <Avatar alt="Travis Howard" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLmMxVy8Zm3qULgX6wxO5jigb1IFJyPHe5XA&usqp=CAU" />
  <Avatar alt="Cindy Baker" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSga1jAisgQKSypHnEDTsvctSm9pSBEzEZa-g&usqp=CAU" />
  <Avatar alt="Agnes Walker" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpZ9W1iwJvSaab8-GdQvKlJwFAG6Eo-QHUXA&usqp=CAU" />
  <Avatar alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBPdFHPaGebRk1P-UaSRoamb_qhx-ajvqIKA&usqp=CAU" />
  <Avatar alt="Travis Howard" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLmMxVy8Zm3qULgX6wxO5jigb1IFJyPHe5XA&usqp=CAU" />
  <Avatar alt="Cindy Baker" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSga1jAisgQKSypHnEDTsvctSm9pSBEzEZa-g&usqp=CAU" />
  <Avatar alt="Agnes Walker" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpZ9W1iwJvSaab8-GdQvKlJwFAG6Eo-QHUXA&usqp=CAU" />
  <Avatar alt="Trevor Henderson" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzPcY-GZIvG9nBx53JzoJycQXw8KGqHEcqwg&usqp=CAU" />
</AvatarGroup>

<Typography variant="h6" fontWeight={200} mt={3}>Latest News</Typography>
<ImageList cols={3} rowHeight={100} gap={5}>
    <ImageListItem>
    <img alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBPdFHPaGebRk1P-UaSRoamb_qhx-ajvqIKA&usqp=CAU"/>   
    </ImageListItem>
    <ImageListItem>
    <img alt="Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLmMxVy8Zm3qULgX6wxO5jigb1IFJyPHe5XA&usqp=CAU"/>   
    </ImageListItem>
    <ImageListItem>
    <img alt="marp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBPdFHPaGebRk1P-UaSRoamb_qhx-ajvqIKA&usqp=CAU"/>   
    </ImageListItem>
    {/* <ImageListItem>
    <img alt="Rep" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLmMxVy8Zm3qULgX6wxO5jigb1IFJyPHe5XA&usqp=CAU"/>   
    </ImageListItem>
    <ImageListItem>
    <img alt="marp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpZ9W1iwJvSaab8-GdQvKlJwFAG6Eo-QHUXA&usqp=CAU"/>   
    </ImageListItem>
    <ImageListItem>
    <img alt="emrp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBPdFHPaGebRk1P-UaSRoamb_qhx-ajvqIKA&usqp=CAU"/>   
    </ImageListItem> */}
</ImageList>

<Typography variant="h6" fontWeight={200} mt={3}>Latest Conversation</Typography>
<List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      {/* <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem> */}
    </List>

   
     </Box>
    </Box>
    )
}
export default Rightbar;