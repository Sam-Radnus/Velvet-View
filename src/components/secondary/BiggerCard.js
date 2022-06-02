import React from 'react'
import '../../App.css';
function BiggerCard(props) {
  let { imageURL, title } = props;
  return (
    <div style={{marginLeft:'26.5vw'}}>
      <span style={{marginLeft:'2vw',color:'rgb(255,0,77)',fontSize:'50px'}}>Now Playing</span>
      <div style={{ height: '40vh', width: '75vw', borderRadius:'10px',backgroundImage: `url(${props.imageURL} `,backgroundPosition:`85% 20%`}}>
        <div style={{ backgroundColor: 'rgba(0,0,0,0)' }} className="card-body">
        <h1 id="title" style={{margin:'2% 0% 0% 1%',backgroundColor:'transparent',fontSize:'7vw'}} >{props.title}</h1>
        </div>
       
      </div>
    </div>
  )
}

export default BiggerCard