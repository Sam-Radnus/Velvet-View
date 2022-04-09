import React from 'react'
import '../App.css'
function Sidebar() {
  return (
     <>
     <div id="sidebar" className="w3-sidebar w3-bar-block" style={{backgroundColor:'rgb(23,22,27)',width:"18%"}}>
     <a href="#" style={{color:'white'}}className="w3-bar-item w3-button">Link 1</a>
     <a href="#" style={{color:'white'}}className="w3-bar-item w3-button">Link 2</a>
     <a href="#" style={{color:'white'}}className="w3-bar-item w3-button">Link 3</a>
     </div>
     </>
  )
}

export default Sidebar