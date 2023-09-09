import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete'; 
function SnackBar({handleDelete,userid}) {
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleDel= () => {
   // Replace with your delete logic
    setOpenSnackbar(true);
   
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <div>
    
      <Button onClick={handleDel} onDoubleClick={()=>{handleDelete(userid)}} variant="outlined" color="warning">
      <DeleteIcon/>
      </Button>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000} // Adjust the duration as needed
        onClose={handleCloseSnackbar}
        message={`Double click to delete item ${userid}`}
        action={
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleCloseSnackbar}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        }
      />
    </div>
  );
}

export default  SnackBar;
