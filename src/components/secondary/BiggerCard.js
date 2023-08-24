import React from 'react'
import '../../App.css';
function BiggerCard(props) {
  return (
    <div style={{marginTop:"13.4vh",marginLeft:'27vw'}}>
      <h3 style={{marginLeft:'0vw',color:'rgb(255,0,77)'}}>Now Playing</h3>
      <div style={{ height: '41vh', width: '69.8vw', borderRadius:'10px',backgroundImage: `url(${props.imageURL} `,backgroundPosition:`85% 25%`}}>
        <div style={{ backgroundColor: 'rgba(0,0,0,0)' }} className="card-body">
        <h1 id="title" style={{margin:'2% 0% 0% 1%',backgroundColor:'transparent',fontSize:'7vw'}} >{props.title}</h1>
        </div>
       
      </div>
    </div>
  )
}

export default BiggerCard