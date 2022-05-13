import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useLocation } from "react-router-dom";
import '../App.css'
import LiveComment from './LiveComment'
import MatchoftheDay from './MatchoftheDay'
import Genres from './secondary/Genres';
import Trailers from './Trailers'
function Sidebar() {
  let location = useLocation();
  let [display,setDisplay]=useState('block');
  useEffect(() => {
    if(location.pathname==='/')
    { setDisplay('block')}
    else
    {setDisplay('none')}
    
  },[location]);
  return (
     <div style={{display:`${display}`}}>
     <div  id="sidebar" className="w3-sidebar w3-bar-block" style={{backgroundColor:'rgb(23,22,27)',overflow:'scroll',marginRight:'0px',top:'10%',width:"25%"}}>
     <div  style={{color:'white'}}className="w3-bar-item ">
          <h3 style={{color:'rgb(255,0,70)'}}className='feature'>Catch Popular Trailers</h3>
          <Trailers/> 
     </div>
     <div  style={{color:'white'}}className="w3-bar-item "><Genres/></div>
     <div  style={{color:'white',marginBottom:'25vh'}}className="w3-bar-item "><MatchoftheDay/></div>
     </div>
     </div >
  )
}

export default Sidebar