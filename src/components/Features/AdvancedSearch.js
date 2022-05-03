import React from 'react'
import PropTypes from 'prop-types'
import './Tertiary/Advanced.css'
import { useState,useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import MultiRangeSlider from './Tertiary/MultiRangeSlider';
function AdvancedSearch(props) {
const [media,setMedia]=useState('movie');
const [danger,setDanger]=useState(true);
const [showFilter,setShowfilter]=useState(true);
const [startDate,setStartDate]=useState(1900);
const [endDate,setEndDate]=useState(new Date().getFullYear());


useEffect(()=>{
  fetchData();
},[danger,media]);
const fetchData=async()=>{
   let URL=`https://api.themoviedb.org/3/discover/${media}?api_key=2023616ed87a6faf2ec9cd6de24b46ed&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_keywords=210024&with_watch_monetization_types=flatrate`
  console.log(URL);
  }
  return (
    <div>
        <h1 style={{marginTop:'15vh',marginLeft:'40vw'}}>ADVANCED SEARCH</h1>
        <div className='Filter'>
         <div className={'button-group'}>
         <button type="button" id="button" onClick={()=>{setDanger(true);setMedia('movie')}} className={`btn btn-${danger?'danger':'light'}`}>Movies</button>
         <button type="button" id="button" onClick={()=>{setDanger(false);setMedia('tv')}} className={`btn btn-${danger?'light':'danger'}`}>TV Show</button>
         </div>
         <div className='Slider'>
         <MultiRangeSlider
            min={0}
            max={1000}
            onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
         />
         </div>
        </div>
    </div>
  )
}

AdvancedSearch.propTypes = {}

export default AdvancedSearch
