import React from 'react'
import PropTypes from 'prop-types'

function Text(props) {
    let{color,title}=props;
  return (
    <div style={{backgroundColor:`${color}`,padding:'5px'}}>{props.title}</div>
  )
}

Text.propTypes = {}

export default Text
