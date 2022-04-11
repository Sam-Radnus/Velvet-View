import React from 'react'
import PropTypes from 'prop-types'
import '../App.css'
import MidCard from './secondary/MidCard';
import { useState } from 'react'
import { useEffect } from 'react'
import Text from './secondary/Text';
function MatchoftheDay(props) {
    
    const [movieName1,setMovieName1]=useState('');
    const [movieName2,setMovieName2]=useState('');
    useEffect(()=>{
       asyncData();
    },[])
    const asyncData=async()=>{
        const url1='https://api.themoviedb.org/3/discover/movie?api_key=2023616ed87a6faf2ec9cd6de24b46ed&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_date.gte=1990-01-01&primary_release_date.lte=2022-12-31&vote_average.gte=6&with_genres=53';
        const data1=await fetch(url1);
        if(data1.length!==0){
           const parsedData1=await data1.json();
            console.log(parsedData1.results);
            setMovieName1(parsedData1.results[0].title);
        }
        else{
            console.log("Failure");
        }

        const url2='https://api.themoviedb.org/3/discover/movie?api_key=2023616ed87a6faf2ec9cd6de24b46ed&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_date.gte=1990-01-01&primary_release_date.lte=2022-12-31&vote_average.gte=6&with_genres=80';
        const data2=await fetch(url2);
        if(data2.length!==0){
           const parsedData2=await data2.json();
            console.log(parsedData2.results);
            setMovieName2(parsedData2.results[6].title);
        }
        else{
            console.log("Failure");
        }

    }
    
  return (
    <div>
        <h1 style={{textAlign:'center'}}> Match of the Day</h1>
          <Text color={'red'} title={movieName1}/>
          <h1 style={{textAlign:'center'}} >+</h1>
          <Text color={'blue'} title={movieName2}/>
          <h1 style={{textAlign:'center'}} >=</h1>
          <Text color={'purple'} title={movieName1}/>
        </div>
  )
}

MatchoftheDay.propTypes = {}

export default MatchoftheDay
