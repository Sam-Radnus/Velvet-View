import React from 'react'
import PropTypes from 'prop-types';
import YouTube from 'react-youtube';
import { Navigate, useNavigate } from "react-router-dom";
import  { useEffect, useState } from "react";
import Video1 from './Video1';
function Card(props) {
  let {play,imageURL,title}=props;
 
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  let [id,setLoc]=useState("");
  const renderFunction=async()=>{
    console.log(props.play);
   // const trailer=props.play.videos.results.find(vid=>vid.name==='Official Trailer')
   // console.log(trailer);
    
    const url2=`https://api.themoviedb.org/3/movie/${props.play}?api_key=2023616ed87a6faf2ec9cd6de24b46ed&append_to_response=videos`;
    const data2=await fetch(url2);
    const parsedData2=await data2.json();
    const trailer=parsedData2.videos.results.find(vid=>vid.name==='Official Trailer')
    console.log(trailer.key); 
    const loc=trailer.key;
    setLoc(loc);
    console.log(id);
    return loc;
  };
  
  return (
    <div style={{backgroundImage:`url(${props.imageURL}`,backgroundPosition:'left center '}} className="card my-2">
    {/* <YouTube videoId={id} opts={opts} /> */}
   <div style={{backgroundColor:'rgba(0,0,0,0.11)',backdropFilter:'blur(0px)'}} className="card-body">
    <p id="title" className="card-title">{props.title}</p>
    <a  href={id.length===0?"#":`https://www.youtube.com/watch?v=${id}`} onClick={renderFunction} className="btn btn-danger"><span className='mx-2 my-2'>Play Trailer</span><i className="fa-solid fa-play"></i></a>
  </div> 
   </div>
  )
}

export default Card