import React from 'react'
import './Tertiary/Advanced.css'
import { useState,useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import MultiRangeSlider from './Tertiary/MultiRangeSlider';
import SeeAllSuggestions from './SeeAllSuggestions';
import './../../App.css'
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
   setURL1(`https://api.themoviedb.org/3/discover/${media}?api_key=2023616ed87a6faf2ec9cd6de24b46ed&language=en-US&sort_by=${sortBy}.${rule}&include_video=false&include_adult=false&${media==='movie'?'primary_release_date':'first_air_date.'}.gte=${startDate}-01-01&${media==='movie'?'primary_release_date':'first_air_date'}.lte=${endDate}-12-31&with_watch_monetization_types=flatrate`);
 
  }
  const fetchData2=async()=>{
   
 
    setURL1(`https://api.themoviedb.org/3/search/${media}?api_key=2023616ed87a6faf2ec9cd6de24b46ed&language=en-US&query=${query}&page=1`);
    setShowResults(true);
    setShowfilter(false);
   
   }
  return (
    <div className="adv-bg" >
      <h1 style={{textAlign:"center",marginTop:"85px"}}>Advanced Search</h1>
        <button onClick={()=>{setShowfilter(true)}} style={{background:'none',color:'white',border:'none',marginLeft:'10vw'}}> <i  style={{ color: 'white',marginRight:'10px',fontSize:'large',cursor: 'pointer', marginLeft: '15px' }} className="fa-brands fa-buffer"></i>Filter</button>
        <div style={{display:"flex",gap:"10px"}} className={'button-group'}>
         <button  onClick={()=>{setDanger(true);setMedia('movie')}} className='btn btn' style={{color:!danger?'#757575':'white',backgroundColor:danger?'#757575':'transparent',borderColor:'#757575'}}>Movies</button>
         <button  onClick={()=>{setDanger(false);setMedia('tv')}}   className='btn btn' style={{color:danger?'#757575':'white',backgroundColor:!danger?'#757575':'transparent',borderColor:'#757575'}}>TV Show</button>
         </div>
         <div className='search'>
      <input id="search" style={{color:'white',textAlign:"center"}} placeholder={`enter ${media} name`} onChange={(e)=>{ setQuery(e.target.value)}} type='text' onFocus={()=>{setShowfilter(false)}} onBlur={()=>{setShowfilter(true)}} />
      <button style={{backgroundColor:"transparent",borderColor:"#757575",color:'#757575',border:"solid",borderRadius:'10px',borderWidth:'2px',marginLeft:'5px'}} onClick={fetchData2} >Search</button>
      </div>
      <div className='Filter'>
        
        <div style={{display:!showFilter?"none":""}}>
        
         <div style={{display:"flex",gap:"10px"}} className={'sort-group'}>
         <button onClick={()=>{setRule('desc')}} className="btn btn" style={{color:rule!=='desc'?'#757575':'white',backgroundColor:rule==='desc'?'#757575':'transparent',borderColor:'#757575'}}>Decreasing Order</button>
         <button onClick={()=>{setRule('asc')}} className="btn btn" style={{color:rule!=='asc'?'#757575':'white',backgroundColor:rule==='asc'?'#757575':'transparent',borderColor:'#757575'}}>Increasing Order</button>
       
         </div>
         <div style={{display:"flex",gap:"10px"}} className={'sort-by'}>
         <button  onClick={()=>{setSortBy('popularity')}} className="btn btn" style={{color:sortBy!=='popularity'?'#757575':'white',backgroundColor:sortBy==='popularity'?'#757575':'transparent',borderColor:'#757575'}}>Popularity</button>
         <button  onClick={()=>{setSortBy('release_date')}} className="btn btn" style={{color:sortBy!=='release_date'?'#757575':'white',backgroundColor:sortBy==='release_date'?'#757575':'transparent',borderColor:'#757575'}}>Release Date</button>
         <button  onClick={()=>{setSortBy('revenue')}} className="btn btn" style={{color:sortBy!=='revenue'?'#757575':'white',backgroundColor:sortBy==='revenue'?'#757575':'transparent',borderColor:'#757575'}}>Revenue</button>
         <button  onClick={()=>{setSortBy('original_title')}} className="btn btn" style={{color:sortBy!=='original_title'?'#757575':'white',backgroundColor:sortBy==='original_title'?'#757575':'transparent',borderColor:'#757575'}}>Original Title</button>
         <button  onClick={()=>{setSortBy('vote_average')}} className="btn btn" style={{color:sortBy!=='vote_average'?'#757575':'white',backgroundColor:sortBy==='vote_average'?'#757575':'transparent',borderColor:'#757575'}}>Vote Average</button>
    

         </div>
         <div style={{paddingBottom:'50px'}} className='Slider'>
         <MultiRangeSlider
            min={1900}
            max={new Date().getFullYear()}
          
            onChange={({ min, max }) => {setStartDate(min);setEndDate(max)}}
         />
        <button className="btn btn"style={{backgroundColor:"#757575",color:"white",marginLeft:'47vw',padding:"5px",border:'none',borderRadius:'10px'}}onClick={()=>{
          setShowResults(true);
          navigate('/AdvancedSearch');
          //document.getElementById('see_movie').scrollIntoView(true)
        }}>Search {media}</button>
          </div>
         </div>
         
         </div>
        
       {showResults && <SeeAllSuggestions medium={media} title={"Results"} URL={URL1}/>}
     
    </div>
  )
}

AdvancedSearch.propTypes = {}

export default AdvancedSearch
