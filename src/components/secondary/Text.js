import React from 'react'
import PropTypes from 'prop-types'

function Text(props) {
    let{color,title}=props;
  return (
    
    <div  style={{backgroundColor:`${color}`,borderRadius:'5px',marginBottom:'5px',paddingLeft:`${props.title.length<20?'35':'10%'}`}}>{props.title}</div>
  )
}

Text.propTypes = {}

export default Text
