import React from 'react'
import PropTypes from 'prop-types'
import {useState,useEffect} from 'react';
import Featured from '../Featured';
function TVShows(props) {
  const [tv, setTV] = useState([]);

    const getShows = async () => {
        // const url="https://api.themoviedb.org/3/movie/latest?api_key=2023616ed87a6faf2ec9cd6de24b46ed&language=en-US";
        const url = "https://api.themoviedb.org/3/movie/now_playing?api_key=2023616ed87a6faf2ec9cd6de24b46ed&language=en-US&page=1";
        const data = await fetch(url);
        const parsedData = await data.json();
        setTV(parsedData.results);
    }
    useEffect(()=>{
        getShows();
    },[]);
  return (
    <div>
       <div className='top'  style={{position:'relative',top:'10vh',backgroundImage:'url(https://images.squarespace-cdn.com/content/v1/5ae0010b36099b11994c66e9/1557974885217-8Z2A37U56ZWDORJ07JNZ/game-of-thrones-season-08-episode-06-screenshot-preview-2.jpg?format=1500w)',height:'60vh',transform:'scale(1)',backgroundPosition:'55%'}} >

          <div style={{zIndex:'5',position:'absolute',top:'2vh',left:'5vw',width:'25vw'}}> <h1 style={{fontSize:'17vh'}}>Game of Thrones</h1> </div>
          <div className=''></div>
       </div>
    </div>
  )
}

TVShows.propTypes = {}

export default TVShows
