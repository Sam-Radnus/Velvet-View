import React from 'react'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react';
import BiggerCard from '../secondary/BiggerCard';
import { Link, Outlet } from 'react-router-dom';
function Anime(props) {
  const [movie, setMovie] = useState([]);

  const getMovies = async () => {
    // const url="https://api.themoviedb.org/3/movie/latest?api_key=2023616ed87a6faf2ec9cd6de24b46ed&language=en-US";
    const url = "https://api.themoviedb.org/3/discover/movie?api_key=2023616ed87a6faf2ec9cd6de24b46ed&language=en-US&sort_by=popularity.desc&page=1&with_keywords=210024";
    const data = await fetch(url);
    const parsedData = await data.json();
  
    setMovie(parsedData.results);
    console.log(parsedData.results);

  }
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
    
      <div style={{ width: '100vw', marginTop:'10vh',marginLeft: '0vw' }} >
            
            <div style={{ marginTop: '12vh', marginLeft: '0vw' }} className='container'>
            <Outlet/>
                <h1 style={{ fontSize: '65px', textAlign:'center' }}>Anime</h1>
                <div style={{marginLeft:'7%'}}className='row row-cols-4'>
            
                    {movie.slice(0, 20).map(element => (
                        <div style={{ backgroundColor: 'rgb(23,22,27)' }} className="card" >
                         
                            <img src={element.poster_path!=null?`https://image.tmdb.org/t/p/original/${element.poster_path}`:'https://www.annsentitledlife.com/wp-content/uploads/2019/04/error-404-not-found-vertical.jpg'} className="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title">{element.title ? element.title : element.name}</h5>
                                <Link className="btn btn-danger" to={`Details/Anime/${element.id}`} >
                                   View More
                                </Link>
                        
                            </div>
                        </div>
                    ))}
                </div>
            </div>
         
        </div>
    </div>
    
  )
}

Anime.propTypes = {}

export default Anime
