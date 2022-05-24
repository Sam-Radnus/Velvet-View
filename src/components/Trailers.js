import React, { useEffect } from 'react'
import { useState } from 'react';
import Card from './secondary/Card';
import PropTypes from 'prop-types';
import YouTube from 'react-youtube';

function Trailers() {
    
    const [movie,setMovie]=useState([]);
    const [selectedMovie,setSelectedMovie]=useState([]);
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
       
       getMovies();
   
    },[])
    useEffect(()=>{
      window.addEventListener("resize",handleResize,false);
      console.log(dimensions);
      dimensions.width>851?setMobile(true):setMobile(false);
    },[dimensions.width]);

    
    const getMovies=async()=>{
        // const url="https://api.themoviedb.org/3/movie/latest?api_key=2023616ed87a6faf2ec9cd6de24b46ed&language=en-US";
        const url="https://api.themoviedb.org/3/discover/movie?api_key=2023616ed87a6faf2ec9cd6de24b46ed&language=en-US&sort_by=popularity.desc&include_adult=false&page=1&append_to_response=videos";
        const data=await fetch(url);
        const parsedData=await data.json();
        setMovie(parsedData.results);
       
        
        const url2=`https://api.themoviedb.org/3/movie/${parsedData.results[0].id}?api_key=2023616ed87a6faf2ec9cd6de24b46ed&append_to_response=videos`;
        const data2=await fetch(url2);
        const parsedData2=await data2.json();
        
     }
     
  return (
    <>
     {mobile ? <div style={{borderBottomStyle:'solid' ,borderBottomColor:'rgb(27,26,31)'}}>
          {movie.slice(0,3).map(element=>(
              <Card key={element.id} play={element.id} imageURL={`https://image.tmdb.org/t/p/w500/${element.backdrop_path}`} title={element.title}/>
          ))}  </div>:<div style={{borderBottomStyle:'solid' ,borderBottomColor:'rgb(27,26,31)'}}>
          {movie.slice(0,3).map(element=>(
              // <Card key={element.id} play={element.id} imageURL={`https://image.tmdb.org/t/p/w500/${element.backdrop_path}`} title={element.title}/>
             <div> <a href={element.id}>{element.title}</a>
              <hr/>
              </div>
          ))}     
    </div>
    }
    </>
         
  )
}

export default Trailers