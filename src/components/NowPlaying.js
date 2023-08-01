import React from 'react'
import { useEffect ,useState } from 'react';
import BiggerCard from './secondary/BiggerCard';
import '../App.css'
function NowPlaying() {
    const [movie, setMovie] = useState([]);

    const getMovies = async () => {
        // const url="https://api.themoviedb.org/3/movie/latest?api_key=2023616ed87a6faf2ec9cd6de24b46ed&language=en-US";
        const url = "https://api.themoviedb.org/3/movie/now_playing?api_key=2023616ed87a6faf2ec9cd6de24b46ed&language=en-US&page=1";
        const data = await fetch(url);
        const parsedData = await data.json();
      
        setMovie(parsedData.results);
      
    }
    useEffect(()=>{
        getMovies();
    },[]);
    return (
        <div style={{top:'10%',left:'5%'}}>
            
             {movie.slice(2,3).map(element=>(
                   
                   <BiggerCard key="Movie" imageURL={`https://image.tmdb.org/t/p/w1280${element.backdrop_path}`} title={element.title}/>
    ))}
             
        </div>
    )
}

export default NowPlaying