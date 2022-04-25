import React from 'react'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react';
import BiggerCard from '../secondary/BiggerCard';
import { Link } from 'react-router-dom';
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
      <div style={{ position: 'absolute', top: '7%', left: '-15%'}}>

        {movie.slice(1,2).map(element => (
        
           <div className='top'  style={{position:'absolute',top:'3vh',left:'10vw',width:'100vw'}}>
          
            <img style={{height:'65vh',width:'100vw',marginLeft:'10vh'}} src ={`https://image.tmdb.org/t/p/w1280${element.backdrop_path}`}/>
            <div style={{position:'absolute',top:'10%',left:'10%',width:'25vw'}}><h1 style={{fontSize:'70px'}}>{element.title}</h1></div>
           </div>
        ))}
      </div>
      <div style={{ position:'absolute',top:'78vh', marginLeft: '0vw' }} className='container'>
      <div style={{marginLeft:'7%'}}className='row row-cols-4'>
      {movie.slice(0, 20).map(element => (
                                <div style={{ backgroundColor: 'rgb(23,22,27)' }} className="card" >
                                 
                                    <img src={element.poster_path!=null?`https://image.tmdb.org/t/p/original/${element.poster_path}`:'https://www.annsentitledlife.com/wp-content/uploads/2019/04/error-404-not-found-vertical.jpg'} className="card-img-top" />
                                    <div className="card-body">
                                        <h5 className="card-title">{element.title ? element.title : element.name}</h5>
                                        <Link className="btn btn-danger" to={element.media_type?`Details/${element.media_type}/${element.id}`:`Details/${element.id}`} >
                                           View More
                                        </Link>
                                
                                    </div>
                                </div>
                            ))}
                            </div>
                            </div>
    </div>
    
  )
}

Anime.propTypes = {}

export default Anime
