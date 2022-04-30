import React from 'react'
import PropTypes from 'prop-types'
import  { useEffect, useState } from 'react'
import './DateNight.css';
import SuggestionList from './SuggestionList';
function Select(props,{onSearch}) {
  const [searchField,setSearchField]=useState("");
  const [movie,setMovie]=useState([]);
  const [ref,setRef]=useState([]);
  const [suggestions,setSuggestions]=useState([]);
  const [skipSuggestionSearch,setSkipSuggestionSearch]=useState(false);
  const [img,setImg]=useState('');
  useEffect(()=>{
    if(searchField === "" || skipSuggestionSearch) return;
    getMovies(searchField).then((foundSuggestions)=>{
      setSuggestions(foundSuggestions);
    },[,searchField,skipSuggestionSearch,img])

  },[searchField,skipSuggestionSearch]);
  const hasSuggestions=movie.length > 0;
  const getMovies=async (searchField)=>{
    const url=`https://api.themoviedb.org/3/search/movie?api_key=2023616ed87a6faf2ec9cd6de24b46ed&language=en-US&query=${searchField}&page=1&include_adult=false`;
    const data=await fetch(url);
    const parsedData=await data.json();
    setMovie(parsedData.results);
    setRef(parsedData.results);
  }
  const searchFieldChanged=(e)=>{
    setSkipSuggestionSearch(false);
    const value=e.target.value;
    if(value === '')
    {
      setMovie([]);
    }
    setSearchField(value);
  }; 
  const suggestionClicked=async(suggestion)=>{
    setSkipSuggestionSearch(true);
    // console.log(suggestions.indexOf(suggestion.title));
    setMovie([]);
    setSearchField(suggestion);
  };
  return (
    <div>
      <div  style={{height:'25vh',width:'10vw',background:img.length===0?'#A53167':`url(https://image.tmdb.org/t/p/w154${img})`,paddingTop:'10%'}} backgroundImage={''}><h1 style={{textAlign:'center'}} ><span >Add</span><br/>Movie</h1></div>
        <input value={searchField} onChange={searchFieldChanged}/>
        <button  onClick={()=>{
          console.log(ref);
         console.log((ref.filter(function(vendor){ return vendor.title === searchField }))[0].poster_path);
         setImg((ref.filter(function(vendor){ return vendor.title === searchField }))[0].poster_path);
         console.log(img);
           }}>+</button>
        {hasSuggestions && (
          <div className='suggestions'>
            {movie.map((suggestion)=>(
              <div onClick={() => {suggestionClicked(suggestion.title)}}> <SuggestionList   title={suggestion.title} image={`https://image.tmdb.org/t/p/w45${suggestion.backdrop_path}`}/></div>
            ))}
            </div>
        )}
    </div>
  )
}

Select.propTypes = {}

export default Select
