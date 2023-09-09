import  React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';

// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import DailogBox from './DailogBox';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import SnackBar from './SnackBar';


// const ExpandMore = styled((props) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//   marginLeft: 'auto',
//   transition: theme.transitions.create('transform', {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));

export default function ReviewCard({title,content,userid,handleDelete}) {
  // const [expanded, setExpanded] =useState(false);
  const [like,setLike]=useState(0);
  

  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };

  function handleLike(){
    setLike((prev)=>prev+1);
  }

  

 

  return (<div style={{marginBottom:"20px"}}>
    <Card sx={{ minWidth:290}}>
      <CardMedia
        component="img"
        sx={{xs:{height:"250px"},md:{height:"300px"}}}
        image="https://picsum.photos/seed/picsum/536/354"
        alt="image"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
         {title}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
          <Tooltip title="Like">
             <IconButton aria-label="add to favorites" onClick={handleLike} >
              <Checkbox  icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:"red"}}/>} /> 
              {like >=1 ? (like):''}
             </IconButton>
          </Tooltip>
          <Tooltip title="comment">
              <IconButton aria-label="comment">    
                <DailogBox comment={content}/>
             </IconButton>
          </Tooltip>
          <Tooltip title="delete">
          <IconButton aria-label="delete" >
             <SnackBar handleDelete={handleDelete} userid={userid}/>
          </IconButton>
          </Tooltip>
        {/* <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore> */}
      </CardActions>
      <Collapse in={true} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography>
           {content}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
     
    </div>
  );
}