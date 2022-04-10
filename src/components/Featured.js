import React from 'react'
import PropTypes from 'prop-types'
import MidCard from './secondary/MidCard';
import {useState,useEffect} from 'react';
import '../App.css';
function Featured(props) {
    let {FeatureName}=props;

    const [movie,setMovie]=useState([]);
   
    useEffect(()=>{
       
       getMovies();
   
    },[])
    const getMovies=async()=>{
        const url=`https://api.themoviedb.org/3/movie/${props.FeatureName}?api_key=2023616ed87a6faf2ec9cd6de24b46ed&language=en-US`;
        const data=await fetch(url);
        const parsedData=await data.json();
        setMovie(parsedData.results);  
     }
  return (

    <div  style={{marginTop:'5vh'}}className='container'>
   <div className="tag" style={{display:'inline',width:'100%'}}><p> <span style={{color:'white',fontSize:'30px'}}>{props.FeatureName.toUpperCase()}</span><span style={{position:'absolute',color:'grey',cursor:'pointer',marginTop:'12px',right:'2vw'}} >See All <i className="fa-solid fa-angle-right"></i> </span></p></div>
       <div className='row'>
       {movie.slice(3,6).map(element=>(
          <div className="col">
           <MidCard imageURL={`https://image.tmdb.org/t/p/w300/${element.backdrop_path}`} title={element.title}/> 
           </div>
       ))}
       </div>
        </div>

  )
}

Featured.propTypes = {}

export default Featured
