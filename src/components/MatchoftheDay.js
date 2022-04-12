import React from 'react'
import PropTypes from 'prop-types'
import '../App.css'
import MidCard from './secondary/MidCard';
import { useState } from 'react'
import { useEffect } from 'react'
import Text from './secondary/Text';
function MatchoftheDay(props) {
    
    const [movieName1,setMovieName1]=useState('');
    const [genreAR1,setGenre1]=useState([]);
    const [genreAR2,setGenre2]=useState([]); 
    const [commonGenre,setCommon]=useState([]);
    const [movieName2,setMovieName2]=useState('');
   //let x=[];
    useEffect( ()=>{
        asyncData();       
    },[])
    useEffect(()=>{
        
        console.log(genreAR1);
        console.log(genreAR2);
        findCommon();
    },[genreAR1],[genreAR2])
    const asyncData=async()=>{
        
        const url1='https://api.themoviedb.org/3/discover/movie?api_key=2023616ed87a6faf2ec9cd6de24b46ed&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_date.gte=1990-01-01&primary_release_date.lte=2022-12-31&vote_average.gte=6&with_genres=53';
        const data1=await fetch(url1);
        if(data1.length!==0){
              const parsedData1=await data1.json();
               
              let x=parsedData1.results[0].genre_ids;
         
              setGenre1({
                genreAR1:x,
              });
              console.log(genreAR1);
              setMovieName1(parsedData1.results[0].title);
        }
        else{
            console.log("Failure");
        }

        const url2='https://api.themoviedb.org/3/discover/movie?api_key=2023616ed87a6faf2ec9cd6de24b46ed&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_date.gte=1990-01-01&primary_release_date.lte=2022-12-31&vote_average.gte=6&with_genres=80';
        const data2=await fetch(url2);
        if(data2.length!==0){
            const parsedData2=await data2.json();
          
            let y=parsedData2.results[1].genre_ids;
            console.log(y);
            setGenre2({
              genreAR2:y
            });
            console.log(genreAR2);
            setMovieName2(parsedData2.results[1].title);
        }
        else{
            console.log("Failure");
        }
        findCommon();
        console.log(commonGenre);
    }

    const findCommon=async()=>{
      var data=[genreAR1,genreAR2];
      let result=data.reduce((a,b)=>a.filter(c=>b.includes(c)));
      let search=JSON.stringify(result);
      console.log(search);
      console.log(search.slice(1,search.length-1));
      const url=`https://api.themoviedb.org/3/discover/movie?api_key=2023616ed87a6faf2ec9cd6de24b46ed&with_genres=${search.slice(1,search.length-1)}`
      const common=await fetch(url);
        if(common.length!==0){
           const parsedData=await common.json();
            console.log(parsedData.results);
            setCommon(parsedData.results);
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
