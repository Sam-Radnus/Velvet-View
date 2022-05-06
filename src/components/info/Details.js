import React from 'react'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Detail.css';
function Details(props) {
    let media_type={props};
    let {media, username } = useParams();
    const [movie, setMovie] = useState([]);
    let navigate=useNavigate();

    const getMovies = async () => {
        // const url="https://api.themoviedb.org/3/movie/latest?api_key=2023616ed87a6faf2ec9cd6de24b46ed&language=en-US";
        const url = `https://api.themoviedb.org/3/${media?media:'movie'}/${username}?api_key=2023616ed87a6faf2ec9cd6de24b46ed&language=en-US`;
        const data = await fetch(url);
      //  console.log(url);
        const parsedData = await data.json();
      //  console.log(parsedData);
        setMovie(parsedData);
      //  console.log(movie);
    }
    useEffect(() => {
        getMovies();
    },[ movie.id && username]);
    return (
        movie &&    <div style={{ height: '85vh',width: '120vw',backgroundRepeat:'no-repeat',backgroundSize:'100vw',backgroundImage: `${movie.backdrop_path!==null} `?`url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`:'https://lrmonline.com/wp-content/uploads/2020/08/disney-300-ppi.jpg?mrf-size=m' }}>
        {
           <div style={{backgroundColor:'rgba(0,0,50,0.5)',height:'85vh'}}>
              <div style={{position:'relative',float:'left'}} className='image'>
                <img style={{marginTop:'20%',marginLeft:'50%'}}  src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} />
                </div>
                <div style={{ paddingLeft:'15%',marginLeft:'15% ',paddingTop:'5%',width:'70vw'}}className='overview'>
                <h1 style={{textAlign:'center',fontSize:'75px',marginTop:'50px'}}> {movie.title?movie.title:movie.name}({movie.release_date?movie.release_date.slice(0,4):''})</h1>
                   <h2 style={{color:'white'}}>Overview</h2>
                    <h5 style={{ color: 'white' }}>{movie.overview}</h5>
                    <h5 style={{ color: 'white' }}>Popularity:<span style={{color:`${movie.popularity>60?'orange':'red'}`}}>{movie.popularity}</span></h5>
                    <h5 style={{ color: 'white' }}>Movie Runtime:{movie.runtime} minutes</h5>
                    <div className='genres'><h5>Genres:-</h5>{movie.genres?movie.genres.map(genre=><div className='genres'  style={{cursor:'pointer'}} id={genre.name} onClick={()=>{navigate(`/Genre/${media?media:'movie'}/${genre.name}/${genre.id}`)}}>{genre.name}</div>):''}</div>
                </div>
            </div>
    
    
        }
       </div>
      
    )
}

Details.propTypes = {}

export default Details
