import React from 'react'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../../../App.css';
function TVDetails(props) {
    
    let { username } = useParams();
    const [movie, setMovie] = useState([]);
    let navigate=useNavigate();

    const getMovies = async () => {
       
        const url = `https://api.themoviedb.org/3/tv/${username}?api_key=2023616ed87a6faf2ec9cd6de24b46ed&language=en-US`;
        const data = await fetch(url);
       
        const parsedData = await data.json();
      
        setMovie(parsedData);
        console.log(parsedData);
    }
    useEffect(() => {
        getMovies();
    },[ movie.id && username]);
  return (
    movie && movie.poster_path &&
    <div style={{ height: 'fit-content',width: '120vw',backgroundPosition:"center",backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundImage: `${movie.backdrop_path!==null} `?`url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`:'https://lrmonline.com/wp-content/uploads/2020/08/disney-300-ppi.jpg?mrf-size=m' }}>
    {

        <div style={{backgroundColor:'rgba(0,0,100,0.5)',minHeight:"52vw",height:'fit-content'}}>
          <div style={{position:'relative',float:'left'}} className='image'>
            <img style={{margin:'20% 0% 0% 50%'}} src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} />
            </div>
            <div style={{ paddingLeft:'15%',marginLeft:'15% ',paddingTop:'5%',width:'70vw'}}className='overview'>
            <h1 style={{textAlign:'center',fontSize:'75px',marginTop:'50px'}}> {movie.title?movie.title:movie.name}({movie.first_air_date?movie.first_air_date.slice(0,4):''})</h1>
             { movie.overview && <div><h2 style={{color:'white'}}>Overview</h2>
               <h5 style={{ color: 'white' }}>{movie.overview}</h5> </div> }
             { movie.popularity &&    <h5 style={{ color: 'white' }}>Popularity:<span style={{color:`${movie.popularity>60?'orange':'red'}`}}>{movie.popularity}</span></h5>} 
             { movie.number_of_seasons&&     <h5 >Number of Seasons:<span style={{color:'orange'}}>{movie.number_of_seasons}</span></h5>}
             {   <span style={{ color: 'white' }}>Episode Runtime:{movie.episode_run_time} Minutes</span>} 
             { movie.created_by?movie.created_by.length!==0:false &&     <div style={{margin:'0px'}}><h5>Created By:-</h5>{movie.created_by?movie.created_by.map(creator_name=><h5 style={{color:'orange'}}>{creator_name.name}</h5>):''}</div>}
             <div className='genres'><h5>Genres:-</h5>{movie.genres?movie.genres.map(genre=><div className='genres'  style={{cursor:'pointer'}} id={genre.name} key={genre.name} onClick={()=>{navigate(`/Genre/tv/${genre.name}/${genre.id}`)}}>{genre.name}</div>):''}</div>
            </div>
        </div>
    }



   </div>
  )
}

TVDetails.propTypes = {}

export default TVDetails
