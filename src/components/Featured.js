import React from 'react'
import PropTypes from 'prop-types'
import MidCard from './secondary/MidCard';
import {useState,useEffect} from 'react';
import '../App.css';
function Featured(props) {
    let {FeatureName,FeatureURL}=props;

    const [movie,setMovie]=useState([]);
   
    useEffect(()=>{
       
       getMovies();
   
    },[movie.length])
    const getMovies=async()=>{
        const url=`${FeatureURL}`;
        const data=await fetch(url);
        const parsedData=await data.json();
     
        setMovie(parsedData.results); 
       

       
     }
  return (

    <div  style={{marginTop:'5vh'}}className='container'>
   <div className="tag" style={{display:'inline',width:'100%'}}><p> <span style={{color:'white',fontSize:'30px'}}>{props.FeatureName}</span><span style={{position:'absolute',color:'grey',cursor:'pointer',marginTop:'12px',right:'2vw'}} >See All <i className="fa-solid fa-angle-right"></i> </span></p></div>
       <div className='row'>
       {movie.slice(6,9).map(element=>(
          <div className="col">
          {movie.length > 0 && <MidCard imageURL={`https://image.tmdb.org/t/p/w300/${element.backdrop_path}`} title={element.title}/> }
           </div>
       ))}
       </div>
        </div>

  )
}

Featured.propTypes = {}

export default Featured
