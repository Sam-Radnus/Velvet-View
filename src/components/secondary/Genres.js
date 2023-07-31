import React from 'react'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../../App.css';
function Genres(props) {

  const [mobile,setMobile]=useState(window.innerWidth>851);
  let[genres,setGenres]=useState([]);
  let[genres2,setGenres2]=useState([]);
  let navigate=useNavigate();
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
    window.addEventListener("resize",handleResize,false);
    dimensions.width>851?setMobile(false):setMobile(true);
  },[dimensions.width]);

  useEffect(()=>{
    getGenres();
  },[genres.length,genres2.length]);
  async function getGenres()
  {
      let url="https://api.themoviedb.org/3/genre/movie/list?api_key=2023616ed87a6faf2ec9cd6de24b46ed&language=en-US";
      let data=await fetch(url);
      let parsedData=await data.json();
      setGenres(parsedData.genres);

      let url2="https://api.themoviedb.org/3/genre/tv/list?api_key=2023616ed87a6faf2ec9cd6de24b46ed&language=en-US";
      let data2=await fetch(url2);
      let parsedData2=await data2.json();
      setGenres2(parsedData2.genres);
     
  }
  return (
    <div >

       { !mobile?
       <div><h3 style={{color:'rgb(255,0,70)'}} >Genres:-</h3>
       
         <div style={{marginLeft:'1%'}} className='row row-cols-2'>
         {genres?genres.slice(0,15).map(genre=><div className='genres' key={genre.name}  style={{textAlign:'center',justifyContent:'center',display:'flex',alignItems:'center',cursor:'pointer'}} id={genre.name} onClick={()=>{navigate(`/Genre/movie/${genre.name}/${genre.id}`)}}>{genre.name}</div>):''}
         </div>
         </div>:<div><h3 style={{color:'rgb(255,0,70)'}}className='feature'>Search through Genres</h3><Link style={{width:'50px'}} to="/Genres" id="trailer"><i className="fa-solid fa-arrow-right"></i></Link></div>
         }
      
    </div>

  )
}

Genres.propTypes = {}

export default Genres
