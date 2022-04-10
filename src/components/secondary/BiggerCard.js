import React from 'react'

function BiggerCard(props) {
  let { imageURL, title } = props;
  return (
    <div style={{marginLeft:'40vw'}}>
       <h1 className='mt-2'>Now Playing</h1>
      <p style={{position:'relative'}}></p>
      <div style={{ height: '290px', width: '75vw', borderRadius:'10px',backgroundImage: `url(${props.imageURL} `,backgroundPosition:`85% 20%`}}>
        <div style={{ backgroundColor: 'rgba(0,0,0,0.11)', backdropFilter: 'blur(0px)' }} className="card-body">
         <div style={{position:'absolute',top:'5vw'}} className="bottom"><h1 id="title" style={{fontSize:'75px'}} className="card-title">{props.title}</h1></div> 
           
        </div>
      </div>
    </div>
  )
}

export default BiggerCard