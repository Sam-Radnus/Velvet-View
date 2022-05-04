import React from 'react'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import BiggerCard from '../secondary/BiggerCard';
import '../../App.css';
import Details from './Details';
import { Outlet, useNavigate,useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';
function SeeAllGenre(props) {

    let { media, heading , genre}=useParams();
    let[page,setPage]=useState(1);
    let [isLoaded,setLoaded]=useState(true);
    const [totalResults,setTotalResults]=useState(0);
    let navigate = useNavigate();
    const [movie, setMovie] = useState([]);
    useEffect(() => {
       //console.log(genre);
        getMovies();
    }, [genre,heading])
    const getMovies = async () => {
        const url = `https://api.themoviedb.org/3/discover/${media}?api_key=2023616ed87a6faf2ec9cd6de24b46ed&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genre}&with_watch_monetization_types=flatrate`;
        const data = await fetch(url);
        const parsedData = await data.json();
        console.log(isLoaded);
        setMovie(parsedData.results);
        //console.log(movie.length);
        setTotalResults(parsedData.total_results);
        setPage(page+1);
       // console.log(parsedData.results);
    }
    const updateMovies = async () => {
        const url = `https://api.themoviedb.org/3/discover/${media}?api_key=2023616ed87a6faf2ec9cd6de24b46ed&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genre}&with_watch_monetization_types=flatrate`;
        const data = await fetch(url);
        const parsedData = await data.json();
        console.log(isLoaded);
        setMovie(movie.concat(parsedData.results));
        setTotalResults(parsedData.total_results);
        setPage(page+1);
      
    }
    return (

       
        <div style={{ width: '100vw', marginTop:'0vh',marginLeft: '0vw' }} >
            
          
                    <div style={{ marginTop: '12vh', marginLeft: '0vw' }}>
                    <Outlet/>
                        <h1 style={{ fontSize: '65px', textAlign:'center' }}>{heading}</h1>
                        <div style={{marginLeft:'0%'}}className='row row-cols-4'>
                    
                            {movie.map(element => (
                                <div style={{ backgroundColor: 'rgb(23,22,27)' }} className="card" >
                                 
                                    <img src={element.poster_path!=null?`https://image.tmdb.org/t/p/original/${element.poster_path}`:'https://www.annsentitledlife.com/wp-content/uploads/2019/04/error-404-not-found-vertical.jpg'} className="card-img-top" />
                                    <div className="card-body">
                                        <h5 className="card-title">{element.title ? element.title : element.name}</h5>
                                        <Link className="btn btn-danger" onClick={window.scrollTo(0,0) } to={media==='tv'?`Details/tv/${element.id}`:`Details/${element.id}`} >
                                           View More
                                        </Link>
                                
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <InfiniteScroll
        dataLength={movie.length}
        next={updateMovies}
        hasMore={movie.length !== totalResults}
        endMessage={
            <p style={{ textAlign: 'center' }}>
              <h1>This is the End of the Line</h1>
            </p>
          }
          scrollThreshold={0.9}
          /> 
                </div>
            


        


    )
}

SeeAllGenre.propTypes = {}

export default SeeAllGenre
