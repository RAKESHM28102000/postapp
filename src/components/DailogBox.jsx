import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import {Box } from '@mui/material';
import CommentIcon from '@mui/icons-material/Comment';
import IconButton from '@mui/material/IconButton';
export default function DailogBox({comment}) {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      {/* <Button variant="contained"  onClick={handleClickOpen}>
     
      </Button> */}
      <IconButton color="dark" aria-label="add an alarm"  onClick={handleClickOpen}>
          <CommentIcon/>
       </IconButton>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Comment section"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
         {comment}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            close
          </Button>
          <Button onClick={handleClose} autoFocus>
            comment
          </Button>
        </DialogActions>
      </Dialog>
      </Box>
  );
}