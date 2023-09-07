import React from 'react'

import { useEffect, useState } from 'react'
import './awsm.scss'
import '../../App.css';
import { AwesomeButton } from "react-awesome-button";
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import MovieCard from '../Features/components/MovieCard';
import Card from '../secondary/Card';

import InfiniteScroll from 'react-infinite-scroll-component';
import AwesomeButtonStyles from 'react-awesome-button/src/styles/styles.scss';
function SeeAll(props) {

    let { title, URL } = props;
    let[page,setPage]=useState(1);
    const [totalResults,setTotalResults]=useState(0);
 
    const [movie, setMovie] = useState([]);
    useEffect(() => {
        getMovies();
    }, [])
    const getMovies = async () => {
        const url=`${URL}&page=${page}`;
        
        const data = await fetch(url);
        const parsedData = await data.json();
        setMovie(movie.concat(parsedData.results));
     
        setTotalResults(parsedData.total_results);
        
        setPage(page+1);
        
        
    }
    return (
    
       
        <div style={{ width: '100vw', marginTop:'0vh',marginLeft: '0vw' }} >
            
           
   <div style={{ marginTop: '12vh', marginLeft: '0vw' }} >
                    <Outlet/>
                        <h1 style={{ fontSize: '65px', textAlign:'center' }}>{title}</h1>
                        <div style={{alignItems:"center",justifyContent:"center",width:"50vw !important"}} className='row row-cols-4'>
                    
                            {movie.map(element => (
                                  <div key={element.id}  style={{ height:"224px",width:"146px",backgroundColor: 'rgb(23,22,27)' ,margin:'20px 0px 20px 0px'}} className="card" >
                                <Link to={element.media_type?`Details/${element.media_type}/${element.id}`:`Details/${element.id}`} onClick={()=>{
                                    window.scrollTo(0,0)
                                }}>
                             
                                 
                               <img src={element.poster_path!=null?`https://image.tmdb.org/t/p/original/${element.poster_path}`:'https://www.annsentitledlife.com/wp-content/uploads/2019/04/error-404-not-found-vertical.jpg'} className="card-img-top" />
                               {/* <div className="card-body" >
                                  
                                   <Link   to={element.media_type?`Details/${element.media_type}/${element.id}`:`Details/${element.id}`} >
                                   <AwesomeButton onPress={() => window.scrollTo(0, 0)}  type="danger">View More</AwesomeButton>
                                   </Link>
                                 
                           
                               </div> */}
                       
                           </Link>
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

SeeAll.propTypes = {}

export default SeeAll
