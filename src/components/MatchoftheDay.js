import React from 'react'

import '../App.css'

import { useState, useCallback } from 'react'
import { useEffect } from 'react'
import Text from './secondary/Text';
import {  Link } from 'react-router-dom';
function MatchoftheDay() {
  const [dimenisions,setDimensions]=useState('');
  const [mobile,setMobile]=useState(851 > window.innerWidth);
  const [movieName1, setMovieName1] = useState('');
  const [genreAR1, setGenre1] = useState([]);
  const [genreAR2, setGenre2] = useState([]);
  const [URL1, setURL] = useState('');
  const [commonGenre, setCommon] = useState([]);
  const [movieName2, setMovieName2] = useState('28');
  useEffect(() => {
    fetchData1();
    fetchData2();
    findCommon();
  }, [commonGenre.length,genreAR1.length, genreAR2.length]);
  useEffect(()=>{
    window.addEventListener("resize",handleResize,false);
    handleResize();
    window.innerWidth>851?setMobile(true):setMobile(false);
  },[dimenisions.width]);
  const handleResize=()=>{
    setDimensions({
      width:window.innerWidth,
      height:window.innerHeight
    })
  }
  const fetchData1 = async () => {

    const url1 = 'https://api.themoviedb.org/3/discover/movie?api_key=2023616ed87a6faf2ec9cd6de24b46ed&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_date.gte=1990-01-01&primary_release_date.lte=2022-12-31&vote_average.gte=6&with_genres=27';
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

    let y = parsedData2.results[0].genre_ids;
   
    setGenre2(y);
   
    setMovieName2(parsedData2.results[0].title);
  }

  const findCommon = async () => {
    var data = [genreAR1, genreAR2];
    var join=genreAR1.concat(genreAR2);
    var sub=join.filter((item,pos)=>join.indexOf(item)===pos);

    let result = data.reduce((a, b) => a.filter(c => b.includes(c)));
    let search = result.length>1?JSON.stringify(result):JSON.stringify(genreAR1);
   
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=2023616ed87a6faf2ec9cd6de24b46ed&sort_by=vote_count.desc&with_genres=${search.slice(1, search.length - 1)}`
    setURL(url);
    const common = await fetch(url);
    const parsedData = await common.json();
    setCommon(parsedData.results);
   
  }
  const addOne = useCallback(() => {
   
    
  }, [genreAR1.length, genreAR2.length, JSON.stringify(commonGenre)]);

  //const sum = numbers.reduce((a, v) => a + v, 0);
  return (
    <>
    {mobile?<div>
      <h1 style={{ textAlign: 'center' }}> Match of the Day</h1>
      <Text color={'red'}  title={movieName1} />
      <h1 style={{ textAlign: 'center' }} >+</h1>
      <Text color={'blue'}  title={movieName2} />
      <h1 style={{ textAlign: 'center' }} >=</h1>
      {commonGenre.length > 0 && (<Text color={'purple'}  title={commonGenre[0].title} />)}
      <Link to="/DateNight" ><button style={{marginTop:'25px',height:'70px',border:'none',width:'21vw',backgroundColor:'rgb(8,9,55)'}}>
        <h1 >Try it Yourself <i className="fa-solid fa-angle-right"></i>  </h1>
      </button>
      </Link>
    </div>:<div><h3 style={{color:'rgb(255,0,70)'}}className='feature'>Go to Date Night</h3><Link style={{width:'50px'}} to="/DateNight" id="trailer"><i className="fa-solid fa-arrow-right"></i></Link></div>} 
    </>
  )
}

MatchoftheDay.propTypes = {}

export default MatchoftheDay
