import React, { useEffect } from 'react'
import { useState } from 'react';
import Card from './secondary/Card';
import PropTypes from 'prop-types';
import YouTube from 'react-youtube';

function Trailers() {
    const [movie,setMovie]=useState([]);
    const [selectedMovie,setSelectedMovie]=useState([]);
   
    useEffect(()=>{
       
       getMovies();
   
    },[])
    const getMovies=async()=>{
        // const url="https://api.themoviedb.org/3/movie/latest?api_key=2023616ed87a6faf2ec9cd6de24b46ed&language=en-US";
        const url="https://api.themoviedb.org/3/discover/movie?api_key=2023616ed87a6faf2ec9cd6de24b46ed&language=en-US&sort_by=popularity.desc&include_adult=false&page=1&append_to_response=videos";
        const data=await fetch(url);
        const parsedData=await data.json();
        setMovie(parsedData.results);
        console.log(parsedData.results[0].id);  
        
        
        const url2=`https://api.themoviedb.org/3/movie/${parsedData.results[0].id}?api_key=2023616ed87a6faf2ec9cd6de24b46ed&append_to_response=videos`;
        const data2=await fetch(url2);
        const parsedData2=await data2.json();
        console.log(parsedData2.id);   
     }
     
  return (
    <div style={{borderBottomStyle:'solid' ,borderBottomColor:'rgb(27,26,31)'}}>
          {movie.slice(0,3).map(element=>(
              <Card key={element.id} play={element.id} imageURL={`https://image.tmdb.org/t/p/w500/${element.poster_path}`} title={element.title}/>
          ))}
    </div>
  )
}

export default Trailers