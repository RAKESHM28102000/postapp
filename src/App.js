import React, { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import Navbar from "./components/Navbar";
import {Box,Stack } from '@mui/material';
import Add from "./components/Add";
import { ThemeProvider} from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';



function App(){
    const [mode,setmode]=useState("light")
    const [search,setSearch]=useState("");
    const[loading,setLoading]=useState(true);
    const darkmode= createTheme({
        palette:{
            mode:mode,
        },
    })
    const [post,setPost]=useState([]);



//useeffect
useEffect(() => {
  // Checking data exists in local storage
  const storedData = localStorage.getItem('apiData');

  if (storedData) {
    // Data exists in local storage,then it will occured
    setPost(JSON.parse(storedData));
  } else {
    // Data doesn't exist in local storage, fetch from the API
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((apiData) => {
        // Store the fetched data 
        localStorage.setItem('post', JSON.stringify(apiData));
        setPost(apiData);
      })
      .catch((error) => {
        console.error('Error fetching data from API:', error);
      });
  }
  setLoading(false);
}, []);
//refresh function
function refresh(){
    // localStorage.clear();
    console.log("refresh")
}
   
//delete function
 function handleDelete(id){
  console.log(id)
  setPost((prev)=>{
    return prev.filter((post)=> post.id!==id)
  })
  localStorage.setItem("post",JSON.stringify(post))
  console.log(post.length);
 }

    return(<ThemeProvider theme={darkmode}>
          <Box bgcolor={"background.default"} color={"text.primary"}>
           <Navbar search={search} setSearch={setSearch}/>
           <Stack direction="row" spacing={2} justifyContent="space-between">
               <Sidebar setmode={setmode} mode={mode} refresh={refresh}/>
                <Feed search={search} setSearch={setSearch} handleDelete={handleDelete} post={post} loading={loading}/>
                <Rightbar/>
              </Stack>
               <Add/>
           </Box> 
           </ThemeProvider>          
           )
          
            
}
export default App;


