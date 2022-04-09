import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import  { useState } from "react";
import YouTube from 'react-youtube';
function Video1(props) {
    let {loc}=props;
    const [play,setPlay]=useState(props.loc);
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
    useEffect(()=>
    {
      setPlay(props.loc);
      console.log(play);
    },[props.play])  
  return ( 
      <>  
      <div style={{marginLeft:'27vw'}}> <YouTube videoId={play} opts={opts} /> </div>
     </>
  )
}

Video1.propTypes = {}

export default Video1
