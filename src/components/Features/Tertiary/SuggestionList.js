import React from 'react'
import PropTypes from 'prop-types'
import './DateNight.css';
function SuggestionList(props) {
    let{image,title}=props;
  return (
    <div className={'suggestionList'}style={{margin:'10px'}}>
           <img src={image} style={{float:'left'}}/><h5 style={{color:'white'}}>:{title}</h5>
    </div>
  )
}

SuggestionList.propTypes = {}

export default SuggestionList
