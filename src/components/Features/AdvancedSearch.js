import React from 'react'
import PropTypes from 'prop-types'
import './Tertiary/Advanced.css'
import { useState,useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import MultiRangeSlider from './Tertiary/MultiRangeSlider';
import SeeAll from '../info/SeeAll';
import SeeAllSuggestions from './SeeAllSuggestions';
function AdvancedSearch(props) {

const navigate=useNavigate();
const [media,setMedia]=useState('movie');
const [danger,setDanger]=useState(true);
const [showFilter,setShowfilter]=useState(true);
const [showResults,setShowResults]=useState(false);
const [startDate,setStartDate]=useState(1900);
const [endDate,setEndDate]=useState(new Date().getFullYear());
const [query,setQuery]=useState('batman');
const [sortBy,setSortBy]=useState('popularity');
const [rule,setRule]=useState('desc');//asc or desc
const [URL1,setURL1]=useState(`https://api.themoviedb.org/3/discover/${media}?api_key=2023616ed87a6faf2ec9cd6de24b46ed&language=en-US&sort_by=${sortBy}.${rule}&include_adult=false&include_video=false&primary_release_date.gte=${startDate}-01-01&primary_release_date.lte=${endDate}-12-31&with_watch_monetization_types=flatrate`)
useEffect(()=>{
  fetchData();
},[media,query,startDate,endDate,sortBy,rule]);
const fetchData=async()=>{
   setURL1(`https://api.themoviedb.org/3/discover/${media}?api_key=2023616ed87a6faf2ec9cd6de24b46ed&language=en-US&sort_by=${sortBy}.${rule}&include_adult=false&include_video=false&${media==='movie'?'primary_release_date':'first_air_date.'}.gte=${startDate}-01-01&${media==='movie'?'primary_release_date':'first_air_date'}.lte=${endDate}-12-31&with_watch_monetization_types=flatrate`);
  console.log(URL1);
  }
  const fetchData2=async()=>{
   
    console.log(query);
    setURL1(`https://api.themoviedb.org/3/search/${media}?api_key=2023616ed87a6faf2ec9cd6de24b46ed&language=en-US&query=${query}&page=1&include_adult=false`);
    setShowResults(true);
    setShowfilter(false);
    console.log(URL1);
   }
  return (
    <div>
        <h1 style={{marginTop:'15vh',marginLeft:'40vw'}}>ADVANCED SEARCH</h1>
        <button onClick={()=>{setShowfilter(true)}} style={{background:'transparent',color:'white',border:'none',marginLeft:'10vw'}}> <i  style={{ color: 'white',marginRight:'10px',fontSize:'large',cursor: 'pointer', marginLeft: '15px' }} className="fa-brands fa-buffer"></i>Filter</button>
        <div className={'button-group'}>
         <button type="button" id="button" onClick={()=>{setDanger(true);setMedia('movie')}} className={`btn btn-${danger?'danger':'light'}`}>Movies</button>
         <button type="button" id="button" onClick={()=>{setDanger(false);setMedia('tv')}} className={`btn btn-${danger?'light':'danger'}`}>TV Show</button>
         </div>
         <div className='search'>
      <input id="search" style={{backgroundColor:'white',color:'#BB2D3B'}} onChange={(e)=>{ setQuery(e.target.value)}} type='text' onFocus={()=>{setShowfilter(false)}} onBlur={()=>{setShowfilter(true)}} /><button style={{backgroundColor:'#BB2D3B',color:'white',borderRadius:'5px',marginLeft:'5px'}} onClick={fetchData2} >Search</button>
      </div>
      <div className='Filter'>
        {showFilter?
        <div>
        
         <div className={'sort-group'}>
         <button type="button" id="button" onClick={()=>{setRule('desc')}} className={`btn btn-${rule==='desc'?'danger':'light'}`}>Decreasing Order</button>
         <button type="button" id="button" onClick={()=>{setRule('asc')}} className={`btn btn-${rule==='asc'?'danger':'light'}`}>Increasing Order</button>
       
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
        <button style={{marginLeft:'45vw',color:'white',padding:'10px',width:'10vw',border:'none',borderRadius:'10px'}}onClick={()=>{
          setShowResults(true);
          navigate('/AdvancedSearch');
        }}>Search {media}</button>
          </div>
         </div>:''}
         
         </div>
            
       {showResults && <SeeAllSuggestions medium={media} title={"Results"} URL={URL1}/>}
    </div>
  )
}

AdvancedSearch.propTypes = {}

export default AdvancedSearch
