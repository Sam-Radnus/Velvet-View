import React from 'react'
import '../../App.css';
function BiggerCard(props) {
  let { imageURL, title } = props;
  return (
    <div style={{marginLeft:'40vw'}}>
      <h1>Now Playing</h1>
      <div style={{ height: '290px', width: '75vw', borderRadius:'10px',backgroundImage: `url(${props.imageURL} `,backgroundPosition:`85% 20%`}}>
        <div style={{ backgroundColor: 'rgba(0,0,0,0)', backdropFilter: 'blur(0px)' }} className="card-body">
        
           
        </div>
        <h1 id="title" style={{margin:'5% 0% 0% 1%',backgroundColor:'transparent',fontSize:'75px'}} >{props.title}</h1>
      </div>
    </div>
  )
}

export default BiggerCard