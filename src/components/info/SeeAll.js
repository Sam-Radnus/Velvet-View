import React from 'react'
import PropTypes from 'prop-types'
import {useEffect,useState} from 'react'
import BiggerCard from '../secondary/BiggerCard';
import '../../App.css';
function SeeAll(props) {

    let { title, URL } = props;
    const [movie, setMovie] = useState([]);
    useEffect(() => {

        getMovies();

    }, [movie.length])
    const getMovies = async () => {
        const url = `${URL}`;
        const data = await fetch(url);
        const parsedData = await data.json();
        setMovie(parsedData.results);
    }
    return (
        <>
            <h1>{title}</h1>
            
            <div style={{ marginTop: '0px' }} className='container'>
                <div className='row row-cols-4'>
                    
                    {movie.slice(2, 20).map(element => (
                        <div style={{backgroundColor:'rgb(23,22,27)'}} className="card" >
                        <img src={`https://image.tmdb.org/t/p/original/${element.poster_path}`} className="card-img-top" />
                        <div className="card-body">
                          <h5 className="card-title">{element.title}</h5>
                          <a href="#" className="btn btn-danger">View More</a>
                        </div>
                      </div>
                    ))}
                </div>
            </div>
        </>
    )
}

SeeAll.propTypes = {}

export default SeeAll
