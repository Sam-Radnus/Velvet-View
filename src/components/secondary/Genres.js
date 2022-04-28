import React from 'react'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../App.css';
function Genres(props) {
  let[genres,setGenres]=useState([]);
  let[genres2,setGenres2]=useState([]);
  let navigate=useNavigate();
  useEffect(()=>{
    getGenres();
  },[genres.length,genres2.length]);
  async function getGenres()
  {
      let url="https://api.themoviedb.org/3/genre/movie/list?api_key=2023616ed87a6faf2ec9cd6de24b46ed&language=en-US";
      let data=await fetch(url);
      let parsedData=await data.json();
      setGenres(parsedData.genres);
      console.log(genres);

      let url2="https://api.themoviedb.org/3/genre/tv/list?api_key=2023616ed87a6faf2ec9cd6de24b46ed&language=en-US";
      let data2=await fetch(url2);
      let parsedData2=await data2.json();
      setGenres2(parsedData2.genres);
      console.log(genres2);
  }
  return (
    <div className='container'>
        <h1>Genres:-</h1>
        <h5 className='mt-3'>For Movies:-</h5>
         <div className='row row-cols-2'>
         
         {genres?genres.slice(0,20).map(genre=><div className='genres'  style={{cursor:'pointer'}} id={genre.name} onClick={()=>{navigate(`/Genre/movie/${genre.name}/${genre.id}`)}}>{genre.name}</div>):''}
         </div>
         <h5 className='mt-3'>For TV Shows:-</h5>
         <div className='row row-cols-2'>
         
         {genres2?genres2.slice(0,20).map(genre=><div className='genres'  style={{cursor:'pointer'}} id={genre.name} onClick={()=>{navigate(`/Genre/tv/${genre.name}/${genre.id}`)}}>{genre.name}</div>):''}
         </div>
    </div>

  )
}

Genres.propTypes = {}

export default Genres
