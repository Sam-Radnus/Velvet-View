import React from 'react'

import { useEffect, useState } from 'react';
import {  useNavigate, useParams } from 'react-router-dom';

import './Detail.css';
function Details(props) {
    
    let {media, username } = useParams();
    const [movie, setMovie] = useState([]);
    let navigate=useNavigate();

    const getMovies = async () => {
    
        const url = `https://api.themoviedb.org/3/${media?media:'movie'}/${username}?api_key=2023616ed87a6faf2ec9cd6de24b46ed&language=en-US`;
        const data = await fetch(url);
     
        const parsedData = await data.json();
       
        setMovie(parsedData);
        console.log(parsedData);
     
    }
    useEffect(() => {
        
        getMovies();
    },[ movie.id && username]);
    return (
       
        movie && movie.poster_path &&  <div style={{ height: '85vh',width: '120vw',backgroundRepeat:'no-repeat',backgroundSize:'100vw',backgroundImage: `${movie.backdrop_path!==null} `?`url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`:'https://lrmonline.com/wp-content/uploads/2020/08/disney-300-ppi.jpg?mrf-size=m' }}>
        {
           
           <div style={{position:'absolute',backgroundColor:'rgba(0,0,50,0.5)',border:'solid',height:'85vh',width:'100vw',paddingBottom:'5vh'}}>
         
           <div ><img  style={{height:'60%',width:'20%',marginTop:'5%',marginLeft:'5%'}} src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} /></div>
           <div style={{position:'absolute',top:'25%',left:'35%',width:"50%",textAlign:"justify"}}> <h2 style={{textAlign:'center',fontSize:'5vh',lineHeight:'none'}}>{movie.title?movie.title:movie.name}({movie.release_date?movie.release_date.slice(0,4):''})</h2>
           <h2 style={{color:'white',textAlign:'center'}}>Overview</h2>
                      <span style={{ color: 'white' }}>{movie.overview}</span>
                      <br/>
                      <span style={{ color: 'white' }}>Popularity:<span style={{color:`${movie.popularity>60?'orange':'red'}`}}>{movie.popularity}</span></span>
                      <br/>
                      <span style={{ color: 'white' }}>{window.location.pathname.slice(24,29)==='tv'?`Episode Length:${movie.episode_run_time[0]} minutes`:`Runtime:${movie.runtime}Minutes`}</span>
                      <br/>
                      <div className='genres'><h5>Genres:-</h5>{movie.genres?movie.genres.map(genre=><div className='genres'  style={{cursor:'pointer'}} key={genre.name} id={genre.name} onClick={()=>{navigate(`/Genre/${media?media:'movie'}/${genre.name}/${genre.id}`)}}>{genre.name}</div>):''}</div></div>
             </div>
    
    
        }
       </div>
      
    )
}

Details.propTypes = {}

export default Details
