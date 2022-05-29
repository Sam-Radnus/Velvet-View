import React from 'react'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function List(props) {
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
    <>
    <div>list</div>
    <div >
        <h1 style={{color:'rgb(255,0,70)'}} >Genres:-</h1>
       
         <div style={{marginLeft:'1%'}} className='row row-cols-2'>
         {genres?genres.map(genre=><div className='genres'  style={{textAlign:'center',justifyContent:'center',display:'flex',alignItems:'center',width:'105px',cursor:'pointer'}} id={genre.name} onClick={()=>{navigate(`/Genre/movie/${genre.name}/${genre.id}`)}}>{genre.name}</div>):''}
         </div>
    </div>
    </>
  )
}

List.propTypes = {}

export default List
