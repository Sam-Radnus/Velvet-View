import React from 'react'
import '../App.css'
import Trailers from './Trailers'
function Sidebar() {
  return (
     <>
     <div id="sidebar" className="w3-sidebar w3-bar-block" style={{backgroundColor:'rgb(23,22,27)',width:"25%"}}>
     <div  style={{color:'white'}}className="w3-bar-item ">
          <h3>Catch New Trailers</h3>
          <Trailers/> 
     </div>
     <div  style={{color:'white'}}className="w3-bar-item ">Link 2</div>
     <div  style={{color:'white'}}className="w3-bar-item ">Link 3</div>
     </div>
     </>
  )
}

export default Sidebar