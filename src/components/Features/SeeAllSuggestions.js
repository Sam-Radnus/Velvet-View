import React from 'react'

import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

import InfiniteScroll from 'react-infinite-scroll-component';
function SeeAllSuggestions(props) {
    let { title,medium, URL } = props;
    
    const [totalResults,setTotalResults]=useState(0);

    const [movie, setMovie] = useState([]);
    useEffect(() => {
        getMovies();
    }, [URL])
    const getMovies = async () => {
        const url=`${URL}`;
        
        const data = await fetch(url);
        const parsedData = await data.json();
        setMovie(parsedData.results);
        console.log(parsedData.results);
        setTotalResults(parsedData.total_results);
       
        
       
    }
  return (
    <div>
   <div style={{ marginTop: '12vh', marginLeft: '0vw' }} >
                  <div id="outlet">  <Outlet/></div>
                        <h1 style={{ fontSize: '65px', textAlign:'center' }}>{title}</h1>
                        <div style={{marginLeft:'0%'}}className='row row-cols-4'>
                    
                            {movie.map(element => (
                                <div style={{ backgroundColor: 'rgb(23,22,27)' ,margin:'20px 0px 20px 0px'}} key={element.id} className="card" >
                                 
                                    <img src={element.poster_path!=null?`https://image.tmdb.org/t/p/original/${element.poster_path}`:'https://www.annsentitledlife.com/wp-content/uploads/2019/04/error-404-not-found-vertical.jpg'} alt="error404" className="card-img-top" />
                                    <div className="card-body" >
                                        <h5 className="card-title">{element.title ? element.title : element.name}</h5>
                                        <Link className="btn btn-danger" onClick={document.getElementById('outlet').scrollIntoView(true)} to={`Details/${medium}/${element.id}`} >
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
              <span>This is the End of the Line</span>
            </p>
          }
          scrollThreshold={0.9}
             /> 
    </div>
  )
}

SeeAllSuggestions.propTypes = {}

export default SeeAllSuggestions
