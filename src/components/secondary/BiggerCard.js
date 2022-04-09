import React from 'react'

function BiggerCard(props) {
  let { imageURL, title } = props;
  return (
    <div style={{marginLeft:'40vw'}}>
       <h1 className='mt-2'>Now Playing</h1>
      <p style={{position:'relative'}}></p>
      <div style={{ height: '410px', width: '780px', backgroundImage: `url(${props.imageURL} `}}>
        <div style={{ backgroundColor: 'rgba(0,0,0,0.11)', backdropFilter: 'blur(0px)' }} className="card-body">
         <div style={{position:'absolute',top:'25vw'}} className="bottom"><h1 id="title"  className="card-title">{props.title}</h1></div> 
           
        </div>
      </div>
    </div>
  )
}

export default BiggerCard