import React from 'react'

import { useEffect, useState } from "react";
import '../../App.css';

function Card(props) {
  let { title } = props;
 
  let [id, setLoc] = useState("");
  const [mobile,setMobile]=useState(window.innerWidth<850);
  const [dimensions,setDimensions]=useState({
    width:window.innerWidth,
    height:window.innerHeight
  })
  const handleResize=()=>{
    setDimensions({
      width:window.innerWidth,
    height:window.innerHeight
    })
  }
  useEffect(()=>{
     renderFunction();
  },[id.length])
  useEffect(()=>{
    window.addEventListener("resize",handleResize,false);
    window.innerWidth<850?setMobile(true):setMobile(false);
  },[dimensions.width])
  
  const renderFunction = async () => {
    
    // const trailer=props.play.videos.results.find(vid=>vid.name==='Official Trailer')
    const url2 = `https://api.themoviedb.org/3/movie/${props.play}?api_key=2023616ed87a6faf2ec9cd6de24b46ed&append_to_response=videos`;
    const data2 = await fetch(url2);
    const parsedData2 = await data2.json();
    
    const trailer = parsedData2.videos.results.find(vid => vid.name === 'Official Trailer')

    const loc = trailer.key;
    setLoc(loc);
    
  };
  return (
   <>
    {!mobile?<div style={{ backgroundImage: `url(${props.imageURL}`,backgroundPosition: '20% 40% ' }} className="card my-2">
      {/* <YouTube videoId={id} opts={opts} /> */}
      <div style={{ backgroundColor: 'rgba(0,0,0,0.11)', backdropFilter: 'blur(0px)' }} className="card-body">
        <p id="title" className="card-title">{props.title}</p>
        <a href={`https://www.youtube.com/watch?v=${id}`}  className="btn btn-danger"><span className='mx-2 my-2'>Play Trailer</span><i className="fa-solid fa-play"></i></a>
      </div>
    </div>:<a  href={`https://www.youtube.com/watch?v=${id}`} id="trailer">{title}</a>}
  </> )
}

export default Card