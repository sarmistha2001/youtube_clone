import { useNavigate } from "react-router-dom";

import {Paper, IconButton } from "@mui/material";
import {Search} from "@mui/icons-material"
import { useState } from "react";
import "../index.css"
const SearchBar=()=>{
    const[searchTerm,setsearchTerm]=useState('');
    const navigate=useNavigate()
    const handlesubmit=(e)=>{
        e.preventDefault();

        if(searchTerm){
    navigate(`/search/${searchTerm}`)
    setsearchTerm('')
        }
    }
return(
    <>
    <Paper component="form" onSubmit={handlesubmit} sx={{borderRadius:20,border:" 1px solid #e3e3e3",pl:2,boxShadow:'none',mr:{sm:5},mb:{sm:4}} }>
        <input className="search-bar" placeholder="Search...." value={searchTerm} onChange={(e)=>setsearchTerm(e.target.value)}></input>
        <IconButton type="submit" sx={{p:'10px',color:'red'}} >
            <Search/>
            </IconButton>
        
    </Paper>
    </>
)
}
export default SearchBar;