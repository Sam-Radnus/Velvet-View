import React, { useEffect } from 'react'
import { useState } from 'react';
import Card from './secondary/Card';


function Trailers() {
    
    const [movie,setMovie]=useState([]);
    const [mobile,setMobile]=useState(window.innerWidth<851);
    const [dimensions,setDimensions]=useState({
      width:window.innerWidth,
      height:window.innerHeight
    })
    const handleResize=()=>{
         setDimensions({
          width:window.innerWidth,
          height:window.innerHeight
         }) ;
    }
    useEffect(()=>{
      // const url="https://api.themoviedb.org/3/discover/movie?api_key=2023616ed87a6faf2ec9cd6de24b46ed&language=en-US&sort_by=popularity.desc&include_adult=false&page=1&append_to_response=videos";
      // const data=await fetch(url);
      // const parsedData=await data.json();
      // setMovie(parsedData.results);
      fetch("https://api.themoviedb.org/3/discover/movie?api_key=2023616ed87a6faf2ec9cd6de24b46ed&language=en-US&sort_by=popularity.desc&include_adult=false&page=1&append_to_response=videos").
      then((response)=>response.json()).
      then((data)=>setMovie(data.results))
       
    },[movie.length])
    useEffect(()=>{
      window.addEventListener("resize",handleResize,false);
      dimensions.width>851?setMobile(true):setMobile(false);
    },[dimensions.width]);

    
  
     
  return (
    <>
     { movie&&<div>
        {movie.slice(0,3).map(element=>(
              <Card key={element.id} play={element.id} imageURL={`https://image.tmdb.org/t/p/w500/${element.backdrop_path}`} title={element.title}/>
          ))}  
       
          </div>
          }
    </>
         
  )
}

export default Trailers