import React from 'react'
import PropTypes from 'prop-types'

function Text(props) {
    let{color,title}=props;
  return (
    
    <div  style={{backgroundColor:`${color}`,height:'98px',borderRadius:'5px',marginBottom:'5px',textAlign:`center`}}>
      
        <h1 style={{lineHeight:'98px'}}>{props.title}</h1>
       
      </div>
  )
}

Text.propTypes = {}

export default Text
