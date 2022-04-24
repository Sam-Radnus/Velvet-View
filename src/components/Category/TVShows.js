import React from 'react'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Featured from '../Featured';
function TVShows(props) {
  const [tv, setTV] = useState([]);

    // const getShows = async () => {
    //     // const url="https://api.themoviedb.org/3/movie/latest?api_key=2023616ed87a6faf2ec9cd6de24b46ed&language=en-US";
    //     const url = "https://api.themoviedb.org/3/movie/now_playing?api_key=2023616ed87a6faf2ec9cd6de24b46ed&language=en-US&page=1";
    //     const data = await fetch(url);
    //     const parsedData = await data.json();
    //     setTV(parsedData.results);
    // }
    // useEffect(()=>{
    //     getShows();
    // },[]);
  return (
    <div>
       <div className='top'  style={{position:'relative',top:'10vh',backgroundImage:'url(https://images.squarespace-cdn.com/content/v1/5ae0010b36099b11994c66e9/1557974885217-8Z2A37U56ZWDORJ07JNZ/game-of-thrones-season-08-episode-06-screenshot-preview-2.jpg?format=1500w)',height:'60vh',transform:'scale(1)',backgroundPosition:'55%'}} >

          <div style={{zIndex:'5',position:'absolute',top:'2vh',left:'5vw',width:'25vw'}}> <h1 style={{fontSize:'17vh'}}>Game of Thrones</h1> </div>
          <div style={{position:'inherit',top:'100%'}}className='Featured'>
              <Featured limit={"7"} FeatureName={"Airing Now"} location={"OnAir"} FeatureURL="https://api.themoviedb.org/3/tv/on_the_air?api_key=2023616ed87a6faf2ec9cd6de24b46ed&language=en-US&page=2"/>
              <Featured limit={"6"} FeatureName={"Action & Adventure"} location={"Action"} FeatureURL="https://api.themoviedb.org/3/discover/tv?api_key=2023616ed87a6faf2ec9cd6de24b46ed&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=10759|10765&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0"/>
              <Featured limit={"6"} FeatureName={"Soap & Comedy"} location={"Soap"} FeatureURL="https://api.themoviedb.org/3/discover/tv?api_key=2023616ed87a6faf2ec9cd6de24b46ed&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=35|10766&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0"/>
              <Featured limit={"6"} FeatureName={"Crime & Drama "} location={"Crime"} FeatureURL="https://api.themoviedb.org/3/discover/tv?api_key=2023616ed87a6faf2ec9cd6de24b46ed&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=80|18&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0"/>
              <Featured limit={"6"} FeatureName={"Sci-Fi & Fantasy "} location={"Fantasy"} FeatureURL="https://api.themoviedb.org/3/discover/tv?api_key=2023616ed87a6faf2ec9cd6de24b46ed&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=10765&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0"/>
              <Featured limit={"6"} FeatureName={"Documentary "} location={"Documentary"} FeatureURL="https://api.themoviedb.org/3/discover/tv?api_key=2023616ed87a6faf2ec9cd6de24b46ed&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=99&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0"/>
           </div>
       </div>
    </div>
  )
}

TVShows.propTypes = {}

export default TVShows
