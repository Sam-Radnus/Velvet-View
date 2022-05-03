import React from 'react'
import PropTypes from 'prop-types'
import './Tertiary/Advanced.css'
import { useState,useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import MultiRangeSlider from './Tertiary/MultiRangeSlider';
import SeeAll from '../info/SeeAll';
function AdvancedSearch(props) {
const [media,setMedia]=useState('movie');
const [danger,setDanger]=useState(true);
const [showFilter,setShowfilter]=useState(true);
const [showResults,setShowResults]=useState(false);
const [startDate,setStartDate]=useState(1900);
const [endDate,setEndDate]=useState(new Date().getFullYear());
const [sortBy,setSortBy]=useState('popularity');
const [rule,setRule]=useState('asc');//asc or desc
const [URL1,setURL1]=useState(`https://api.themoviedb.org/3/discover/${media}?api_key=2023616ed87a6faf2ec9cd6de24b46ed&language=en-US&sort_by=${sortBy}.${rule}&include_adult=false&include_video=false&primary_release_date.gte=${startDate}-01-01&primary_release_date.lte=${endDate}-12-31&with_watch_monetization_types=flatrate`)
useEffect(()=>{
  fetchData();
},[danger,media,startDate,endDate,sortBy,rule,showResults]);
const fetchData=async()=>{
   setURL1(`https://api.themoviedb.org/3/discover/${media}?api_key=2023616ed87a6faf2ec9cd6de24b46ed&language=en-US&sort_by=${sortBy}.${rule}&include_adult=false&include_video=false&primary_release_date.gte=${startDate}-01-01&primary_release_date.lte=${endDate}-12-31&with_watch_monetization_types=flatrate`);
  console.log(URL1);
  }
  return (
    <div>
        <h1 style={{marginTop:'15vh',marginLeft:'40vw'}}>ADVANCED SEARCH</h1>
        <div className='Filter'>
         <div className={'button-group'}>
         <button type="button" id="button" onClick={()=>{setDanger(true);setMedia('movie')}} className={`btn btn-${danger?'danger':'light'}`}>Movies</button>
         <button type="button" id="button" onClick={()=>{setDanger(false);setMedia('tv')}} className={`btn btn-${danger?'light':'danger'}`}>TV Show</button>
         </div>
         <div className={'sort-group'}>
         <button type="button" id="button" onClick={()=>{setRule('asc')}} className={`btn btn-${rule==='asc'?'danger':'light'}`}>Increasing Order</button>
         <button type="button" id="button" onClick={()=>{setRule('desc')}} className={`btn btn-${rule==='desc'?'danger':'light'}`}>Decreasing Order</button>
         </div>
         <div className={'sort-by'}>
         <button type="button" id="button" onClick={()=>{setSortBy('popularity')}} className={`btn btn-${sortBy==='popularity'?'danger':'light'}`}>Popularity</button>
         <button type="button" id="button" onClick={()=>{setSortBy('release_date')}} className={`btn btn-${sortBy==='release_date'?'danger':'light'}`}>Release Date</button>
         <button type="button" id="button" onClick={()=>{setSortBy('revenue')}} className={`btn btn-${sortBy==='revenue'?'danger':'light'}`}>Revenue</button>
         <button type="button" id="button" onClick={()=>{setSortBy('original_title')}} className={`btn btn-${sortBy==='original_title'?'danger':'light'}`}>Original Title</button>
         <button type="button" id="button" onClick={()=>{setSortBy('vote_average')}} className={`btn btn-${sortBy==='vote_average'?'danger':'light'}`}>Vote Average</button>
    

         </div>
         <div className='Slider'>
         <MultiRangeSlider
            min={1900}
            max={new Date().getFullYear()}
            onChange={({ min, max }) => {setStartDate(min);setEndDate(max)}}
         />
        <button onClick={()=>{
          setShowResults(true);
        }}>Find</button>
         </div>
        </div>
       {showResults && <SeeAll title={"Results"} URL={URL1}/>}
    </div>
  )
}

AdvancedSearch.propTypes = {}

export default AdvancedSearch
