import React, { useEffect, useState } from "react";
import axios from 'axios';
// import Post from "./Post"
// import Accord from "./Accord";
import { Box, fabClasses } from '@mui/material';
import ReviewCard from "./ReviewCard";
import SimpleBackdrop from "./SimpleBackdrop";

function Feed({search,loading,handleDelete,post,openSnackbar, setOpenSnackbar}){

    return (
    <Box flex={3} p={2}  >
     {loading && (<SimpleBackdrop/>)}
      {post.filter((post)=>((post.title).toLowerCase()).includes(search.toLowerCase())).map((post)=>{
        return (<ReviewCard title={post.title} content={post.body} key={post.id} userid={post.id} handleDelete={handleDelete} openSnackbar={openSnackbar} setOpenSnackbar={setOpenSnackbar}/>)
      })}
    </Box>
    )
}
export default Feed;





















{/* <Box flex={3} p={2}  >
{Posts.map(function(post){
   return (<Post image={post.image} title={post.title} 
          avatar={post.avatar} content={post.content}
   />) })
}
</Box> */}

{/* <Box flex={3} p={2}  >
{post.map((post)=>{
  return (<Accord title={post.title} content={post.body} key={post.id} usedid={post.userId}/>)
})}
</Box> */}

