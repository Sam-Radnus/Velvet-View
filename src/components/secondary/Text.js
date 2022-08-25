import React from 'react'

function Text(props) {
    let{color}=props;
  return (
    
    <div  style={{backgroundColor:`${color}`,height:'fit-content',borderRadius:'5px',marginBottom:'5px',textAlign:`center`}}>
      
        <h1 style={{lineHeight:'98px'}}>{props.title}</h1>
       
      </div>
  )
}

Text.propTypes = {}

export default Text
