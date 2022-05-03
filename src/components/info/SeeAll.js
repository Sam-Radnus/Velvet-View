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
function SeeAll(props) {

    let { title, URL } = props;
    let[page,setPage]=useState(1);
    const [totalResults,setTotalResults]=useState(0);
    let navigate = useNavigate();
    const [movie, setMovie] = useState([]);
    useEffect(() => {
        getMovies();
    }, [])
    const getMovies = async () => {
        const url=`${URL}&page=${page}`;
        console.log(url);
        const data = await fetch(url);
        const parsedData = await data.json();
        setMovie(movie.concat(parsedData.results));
        //console.log(movie);
        setTotalResults(parsedData.total_results);
        console.log(totalResults);
        setPage(page+1);
        
        //console.log(page);
    }
    return (
    
       
        <div style={{ width: '100vw', marginTop:'0vh',marginLeft: '5vw' }} >
            
           
   <div style={{ marginTop: '12vh', marginLeft: '5vw' }} >
                    <Outlet/>
                        <h1 style={{ fontSize: '65px', textAlign:'center' }}>{title}</h1>
                        <div style={{marginLeft:'7%'}}className='row row-cols-4'>
                    
                            {movie.map(element => (
                                <div style={{ backgroundColor: 'rgb(23,22,27)' ,margin:'20px 0px 20px 0px'}} className="card" >
                                 
                                    <img src={element.poster_path!=null?`https://image.tmdb.org/t/p/original/${element.poster_path}`:'https://www.annsentitledlife.com/wp-content/uploads/2019/04/error-404-not-found-vertical.jpg'} className="card-img-top" />
                                    <div className="card-body" >
                                        <h5 className="card-title">{element.title ? element.title : element.name}</h5>
                                        <Link className="btn btn-danger" onClick={window.scrollTo(0,0) } to={element.media_type?`Details/${element.media_type}/${element.id}`:`Details/${element.id}`} >
                                           View More
                                        </Link>
                                
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <InfiniteScroll
        dataLength={movie.length}
        next={getMovies}
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

SeeAll.propTypes = {}

export default SeeAll
