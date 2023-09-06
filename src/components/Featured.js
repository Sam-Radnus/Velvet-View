import React from 'react'

import {Link } from 'react-router-dom';
import MidCard from './secondary/MidCard';
import {useState,useEffect} from 'react';
import '../App.css';

function Featured(props) {
    let {medium,limit,location,FeatureURL}=props;
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
  
    <div  style={{marginTop:'5vh',marginLeft:'2vw'}}className='1'>
      
   <div className="tag" style={{display:'inline',width:'100%'}}><p > <h3 style={{color:'rgb(255,0,77)',fontSize:"35px"}}>{props.FeatureName}</h3><h3 style={{fontSize:"30px"}}><Link style={{position:'absolute',textDecoration:'none',color:'grey',cursor:'pointer',marginTop:'-40px',right:'3.5vw'}}  
   to={`${medium==="TVShows"?window.location.pathname:medium}/${location}`}>See All <i className="fa-solid fa-angle-right"></i> </Link></h3></p></div>
       <div style={{display:"flex",marginTop:'-25px'}}>
       {movie.slice(0,limit).map(element=>(
          <div key={element.id}   className="my-3">
          {movie.length > 0 && <MidCard Feature={location} key={element.id} Medium={medium} media={element.media_type?element.media_type:''} id={element.id} imageURL={element.poster_path!==null?`https://www.themoviedb.org/t/p/w220_and_h330_face/${element.poster_path}`:'https://www.thermaxglobal.com/wp-content/uploads/2020/05/image-not-found-300x169.jpg'} title={element.title?element.title:element.name}/> }
           </div>
       ))}
       </div>
        </div>

  )
}

Featured.propTypes = {}

export default Featured
