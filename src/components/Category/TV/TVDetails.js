import React from 'react'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../../../App.css';
function TVDetails(props) {
    let media_type={props};
    let {media, username } = useParams();
    const [movie, setMovie] = useState([]);


    const getMovies = async () => {
        // const url="https://api.themoviedb.org/3/movie/latest?api_key=2023616ed87a6faf2ec9cd6de24b46ed&language=en-US";
        const url = `https://api.themoviedb.org/3/tv/${username}?api_key=2023616ed87a6faf2ec9cd6de24b46ed&language=en-US`;
        const data = await fetch(url);
        console.log(url);
        const parsedData = await data.json();
        console.log(parsedData);
        setMovie(parsedData);
        console.log(movie.first_air_date.slice(0,4));
    }
    useEffect(() => {
        getMovies();
    },[ movie.id && username]);
  return (
    movie && <div style={{ height: '590px', width: '100vw',backgroundRepeat:'round',backgroundImage: `${movie.backdrop_path}`?`url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`:'https://www.devicetricks.com/wp-content/uploads/2019/12/This-video-is-unavailable-on-YouTube.png', backgroundColor: 'rgb(0,0,0,0.5)',backgroundBlendMode:'darken' }}>
    {

        <div style={{marginLeft:'10%'}}>
          <div style={{float:'left'}} className='image'>
            <img style={{position:'absolute',top:'20%',left:'5%'}} src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} />
            </div>
            <div style={{ paddingLeft:'15%',marginLeft:'5% ',paddingTop:'5%',width:'70vw'}}className='overview'>
            <h1 style={{textAlign:'center',fontSize:'75px',marginTop:'50px'}}> {movie.title?movie.title:movie.name}({movie.first_air_date?movie.first_air_date.slice(0,4):''})</h1>
               <h2 style={{color:'white'}}>Overview</h2>
                <h5 style={{ color: 'white' }}>{movie.overview}</h5>
                <h5 style={{ color: 'white' }}>Popularity:<span style={{color:`${movie.popularity>60?'orange':'red'}`}}>{movie.popularity}</span></h5>
                <h5 >Number of Seasons:<span style={{color:'orange'}}>{movie.number_of_seasons}</span></h5>
                <div><h5>Created By:-</h5>{movie.created_by?movie.created_by.map(creator_name=><h5 style={{color:'orange'}}>{creator_name.name}</h5>):''}</div>
            </div>
        </div>


    }
   </div>
  )
}

TVDetails.propTypes = {}

export default TVDetails
