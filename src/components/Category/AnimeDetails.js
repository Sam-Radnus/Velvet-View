import React from 'react'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../info/Detail.css';
function AnimeDetails(props) {
    let media_type={props};
    let {media, username } = useParams();
    const [movie, setMovie] = useState([]);
    let navigate=useNavigate();

    const getMovies = async () => {
      
        const url = `https://api.themoviedb.org/3/${media?media:'movie'}/${username}?api_key=2023616ed87a6faf2ec9cd6de24b46ed&language=en-US`;
        const data = await fetch(url);
    
        const parsedData = await data.json();
   
        setMovie(parsedData);
     
    }
    useEffect(() => {
        getMovies();
    },[ movie.id && username && movie.poster_path]);

  return (
    movie && movie.poster_path  && <div style={{ height: 'fit-content',padding:'5vh',width: '100vw',backgroundRepeat:'round',backgroundImage: `${movie.backdrop_path}`?`url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`:'https://www.devicetricks.com/wp-content/uploads/2019/12/This-video-is-unavailable-on-YouTube.png', backgroundColor: 'rgb(0,0,0,0.5)',backgroundBlendMode:'darken' }}>
    {

        <div style={{marginLeft:'10%'}}>
          <div style={{float:'left'}} className='image'>
            <img style={{position:'absolute',top:'20%',left:'5%'}} alt="Image" src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} />
            </div>
            <div style={{ paddingLeft:'15%',marginLeft:'5% ',paddingTop:'5%',width:'70vw'}}className='overview'>
            <h1 style={{textAlign:'center',fontSize:'75px',marginTop:'50px'}}> {movie.title?movie.title:movie.name}({movie.release_date?movie.release_date.slice(0,4):''})</h1>
               <h2 style={{color:'white'}}>Overview</h2>
                <h5 style={{ color: 'white' }}>{movie.overview}</h5>
                <h5 style={{ color: 'white' }}>Popularity:<span style={{color:`${movie.popularity>60?'orange':'red'}`}}>{movie.popularity}</span></h5>
                <h5 style={{ color: 'white' }}>Movie Runtime:{movie.runtime} minutes</h5>
                <div className='genres'><h5>Genres:-</h5>{movie.genres?movie.genres.map(genre=><div className='genres'  key={genre.name} style={{cursor:'pointer'}} id={genre.name} onClick={()=>{navigate(`/Genre/Anime/${media?media:'movie'}/${genre.name}/${genre.id}`)}}>{genre.name}</div>):''}</div>
            </div>
        </div>


    }
   </div>
  )
}

AnimeDetails.propTypes = {}

export default AnimeDetails
