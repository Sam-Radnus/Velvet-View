import React from 'react'
import PropTypes from 'prop-types'
import '../App.css'
import MidCard from './secondary/MidCard';
import { useState, useCallback } from 'react'
import { useEffect } from 'react'
import Text from './secondary/Text';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
function MatchoftheDay(props) {
  const [movieName1, setMovieName1] = useState('');
  const [genreAR1, setGenre1] = useState([]);
  const [genreAR2, setGenre2] = useState([]);
  const [genreAR3, setGenre3] = useState([]);
  const [commonGenre, setCommon] = useState([]);
  const [movieName2, setMovieName2] = useState('28');
  useEffect(() => {
    fetchData1();
    fetchData2();
    findCommon();
  }, [genreAR1.length, genreAR2.length]);
  const fetchData1 = async () => {

    const url1 = 'https://api.themoviedb.org/3/discover/movie?api_key=2023616ed87a6faf2ec9cd6de24b46ed&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_date.gte=1990-01-01&primary_release_date.lte=2022-12-31&vote_average.gte=6&with_genres=53';
    const data1 = await fetch(url1);
    const parsedData1 = await data1.json();
    let x = parsedData1.results[0].genre_ids;
    setGenre1(x);
  
    setMovieName1(parsedData1.results[0].title);
  }
  const fetchData2 = async () => {

    const url2 = 'https://api.themoviedb.org/3/discover/movie?api_key=2023616ed87a6faf2ec9cd6de24b46ed&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_date.gte=1990-01-01&primary_release_date.lte=2022-12-31&vote_average.gte=6&with_genres=80';
    const data2 = await fetch(url2);
    const parsedData2 = await data2.json();

    let y = parsedData2.results[1].genre_ids;
   
    setGenre2(y);
   
    setMovieName2(parsedData2.results[1].title);
  }

  const findCommon = async () => {
    var data = [genreAR1, genreAR2];
    let result = data.reduce((a, b) => a.filter(c => b.includes(c)));
    let search = JSON.stringify(result);
   
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=2023616ed87a6faf2ec9cd6de24b46ed&with_genres=${search.slice(1, search.length - 1)}`
    const common = await fetch(url);
    const parsedData = await common.json();
  
    setCommon(parsedData.results);
  }
  const addOne = useCallback(() => {
   
    
  }, [genreAR1.length, genreAR2.length, JSON.stringify(commonGenre)]);

  //const sum = numbers.reduce((a, v) => a + v, 0);
  return (
    <div>
    
      <h1 style={{ textAlign: 'center' }}> Match of the Day</h1>
      <Text color={'red'}  title={movieName1} />
      <h1 style={{ textAlign: 'center' }} >+</h1>
      <Text color={'blue'}  title={movieName2} />
      <h1 style={{ textAlign: 'center' }} >=</h1>
      {commonGenre.length > 0 && (<Text color={'purple'}  title={commonGenre[4].title} />)}

      <Link to="/DateNight" ><button style={{marginTop:'25px',height:'70px',border:'none',width:'22.5vw',backgroundColor:'rgb(8,9,55)'}}>
        <h1>See How it works <i className="fa-solid fa-angle-right"></i>  </h1>
      </button>
      </Link>
    </div>
  )
}

MatchoftheDay.propTypes = {}

export default MatchoftheDay
