import React from 'react'
import PropTypes from 'prop-types'
import '../App.css'
import MidCard from './secondary/MidCard';
import { useState } from 'react'
import { useEffect } from 'react'
function MatchoftheDay(props) {
    
    const [movieName1,setMovieName1]=useState([]);
    const [movieName2,setMovieName2]=useState([]);
    useEffect(()=>{
       asyncData();
    },[])
    const asyncData=async()=>{
        const url1='https://api.themoviedb.org/3/movie/11/similar?api_key=2023616ed87a6faf2ec9cd6de24b46ed&language=en-US&page=1';
        const data1=await fetch(url1);
        if(data1.length!==0){
           const parsedData1=await data1.json();
           console.log(parsedData1.results);
        }
        else{
            console.log("Failure");
        }

        const url2='https://api.themoviedb.org/3/movie/11/similar?api_key=2023616ed87a6faf2ec9cd6de24b46ed&language=en-US&page=1';
        const data2=await fetch(url2);
        if(data2.length!==0){
           const parsedData2=await data2.json();
           console.log(parsedData2.results);
        }
        else{
            console.log("Failure");
        }
    }
    
  return (
    <div>
        <h1> Match of the Day</h1>
          
        </div>
  )
}

MatchoftheDay.propTypes = {}

export default MatchoftheDay
