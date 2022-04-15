import React from 'react'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import BiggerCard from '../secondary/BiggerCard';
import '../../App.css';
import Details from './Details';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

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



        <div style={{ width: '75vw', marginLeft: '15vw' }} >
            <div style={{ marginTop: '20vh', marginLeft: '10vw' }} className='container'>
                <h1 style={{ fontSize: '65px', textAlign: 'center' }}>{title}</h1>
                <div className='row row-cols-4'>

                    {movie.slice(0, 20).map(element => (
                        <div style={{ backgroundColor: 'rgb(23,22,27)' }} className="card" >

                            <img src={`https://image.tmdb.org/t/p/original/${element.poster_path}`} className="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title">{element.title ? element.title : element.name}</h5>
                                <Link className="btn btn-danger" to={`/${(element.title ? element.title : element.name).replace(/\s+/g, '')}`}>
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

SeeAll.propTypes = {}

export default SeeAll
