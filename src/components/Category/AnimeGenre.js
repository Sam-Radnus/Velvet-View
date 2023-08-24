import React from 'react'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Link, Outlet } from 'react-router-dom';
import { AwesomeButton } from "react-awesome-button";
import './../info/awsm.scss'
function AnimeGenre(props) {
    
    let { media, heading , genre}=useParams();
    let navigate = useNavigate();
    const [movie, setMovie] = useState([]);
    useEffect(() => {
       
        getMovies();
    }, [movie.length,genre])
    const getMovies = async () => {
        const url = `https://api.themoviedb.org/3/discover/${media}?api_key=2023616ed87a6faf2ec9cd6de24b46ed&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genre}&with_watch_monetization_types=flatrate&with_keywords=210024`;
        const data = await fetch(url);
        const parsedData = await data.json();
        setMovie(parsedData.results);
        
      
    }
  return (
    <div style={{ width: '100vw', marginTop:'10vh',marginLeft: '0vw' }} >
            
                    <div style={{ marginTop: '12vh', marginLeft: '0vw' }} >
                    <Outlet/>
                        <h1 style={{ fontSize: '65px', textAlign:'center' }}>{heading}</h1>
                        <div style={{marginLeft:'0%'}}className='row row-cols-4'>
                    
                            {movie.slice(0, 20).map(element => (
                                <div style={{ backgroundColor: 'rgb(23,22,27)' }} className="card" >
                                 
                                    <img src={element.poster_path!=null?`https://image.tmdb.org/t/p/original/${element.poster_path}`:'https://www.annsentitledlife.com/wp-content/uploads/2019/04/error-404-not-found-vertical.jpg'} className="card-img-top" />
                                    <div className="card-body">
                                        <h5 className="card-title">{element.title ? element.title : element.name}</h5>
                                        <Link onClick={window.scrollTo(0,0) } to={media==='tv'?`Details/Anime/tv/${element.id}`:`Details/Anime/${element.id}`} >
                                          <AwesomeButton  type="danger">View More</AwesomeButton>
                                         </Link>
                                
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                 
                </div>
            
  )
}

AnimeGenre.propTypes = {}

export default AnimeGenre
