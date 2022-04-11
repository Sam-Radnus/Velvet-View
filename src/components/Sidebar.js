import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import '../App.css'
import LiveComment from './LiveComment'
import MatchoftheDay from './MatchoftheDay'
import Trailers from './Trailers'
function Sidebar() {
 
  return (
     <>
     <div id="sidebar" className="w3-sidebar w3-bar-block" style={{backgroundColor:'rgb(23,22,27)',marginRight:'0px',top:'10%',width:"25%"}}>
     <div  style={{color:'white'}}className="w3-bar-item ">
          <h3>Catch New Trailers</h3>
          <Trailers/> 
     </div>
     <div  style={{color:'white'}}className="w3-bar-item "><LiveComment/></div>
     <div  style={{color:'white'}}className="w3-bar-item "><MatchoftheDay/></div>
     </div>
     </>
  )
}

export default Sidebar