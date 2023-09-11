import React from 'react'
import PropTypes from 'prop-types'
import  { useEffect, useState ,useContext } from 'react'
import './DateNight.css';
import SuggestionList from './SuggestionList';
import { LoginContext } from './LoginContext';
function Select(props,{onSearch}) {
  let {id}=props;
  const {setFilm1,setFilm2,setShowMovie,showResults,setMovieName1,setMovieName2}=useContext(LoginContext);
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
    console.log(parsedData);
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
    showResults(false);
  }; 
  const suggestionClicked=async(suggestion)=>{
    setSkipSuggestionSearch(true);
    
    setMovie([]);
    setSearchField(suggestion);
  };
  return (
    <div>
     <div id="image_bg" style={{

  height: '215px',
  width: '143px',
  borderRadius:"10px",
  background: img.length === 0 ? '#A53167' : `url(https://www.themoviedb.org/t/p/w220_and_h330_face/${img})`,
  backgroundSize: "cover",  // Use 'cover' to fit the background image while maintaining its aspect ratio
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat ",
  boxShadow:"0px 4px 6px rgba(0,0,0,0.1)",
  paddingTop: '10%'
}}>
  {searchField.length === 0 ? (
    <h4 style={{ marginTop: '45%', textAlign: 'center' }}>
      <span>Add</span><br />Movie
    </h4>
  ) : ''}
</div>

        <input id="input-bar" style={{margin:'2vw 0vw 0vw 0vw', boxShadow:"0px 4px 6px rgba(0,0,0,0.1)",height:"32px",textAlign:"center",border:"none",borderRadius:"5px",width:"143px",backgroundColor:"#757575 !important",color:"#757575"}} placeholder="Enter Movie Name" value={searchField} onChange={searchFieldChanged}/>
        
        {hasSuggestions && movie && (
          <div style={{marginTop:"10px"}} className='suggestions'>
            { movie  && movie.length>1 && movie.slice(0,7).map((suggestion)=>(
             suggestion.backdrop_path &&  <div key={suggestion.id}  id={suggestion.id} onClick={() => {
              suggestionClicked(suggestion.title)
              if(props?.id==1){
                setMovieName1(suggestion.title);
              }
              else{
                setMovieName2(suggestion.title);
              }
              setImg(suggestion.poster_path);         
         
              id==='1'?setFilm1(suggestion.genre_ids
                ):setFilm2(suggestion.genre_ids
)
            }}> <SuggestionList  key={suggestion.id} title={suggestion.title} image={`https://image.tmdb.org/t/p/w45${suggestion.backdrop_path}`}/></div>
            ))}
            </div>
        )}
        
    </div>
  )
}

Select.propTypes = {}

export default Select
