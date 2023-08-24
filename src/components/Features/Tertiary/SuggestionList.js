import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import './DateNight.css';
function SuggestionList(props) {
    let{image,title}=props;

  return (
    {image} && <div className={'suggestionList'}style={{margin:'10px'}}>
      <img src={image?image:''}  style={{float:'left'}}/><h5 style={{color:'white'}}>&nbsp;{title.length>30?title.slice(0,25)+"...":title}</h5>
    </div>
  )
}

SuggestionList.propTypes = {}

export default SuggestionList
