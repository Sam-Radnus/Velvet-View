import React from 'react'
import '../App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
function navbar() {
    return (
        <>
            <nav style={{position:'fixed',top:'0',zIndex:'6',width:'100%'}} className="navbar navbar-default navbar-fixed-top navbar-expand-lg navbar-dark ">
                <div className="container-fluid">
                    <Link   id="heading "style={{ fontSize:'xx-large',marginRight: '10vw' }} className="navbar-brand " to="/">Movie<span>-Array</span></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link style={{fontSize:'large'}}className="nav-link active mx-2" to="/">Movies</Link>
                            <Link style={{fontSize:'large'}}className="nav-link  mx-2"       to="/TVshows">TV Shows</Link>
                            <Link style={{fontSize:'large'}}className="nav-link  mx-2"       to="/Anime">Animations</Link>
                            <Link style={{fontSize:'large'}}className="nav-link  mx-2 "      to="/DateNight">Date Night</Link>
                            <Link style={{fontSize:'large'}}className="nav-link  mx-2 "      to="/AdvancedSearch">Advanced Search</Link>
                          
                        </div>
                    </div>
                    <div style={{display:'flex',marginRight:'2vw'}} className='white'>
                      
                      <li>  <i style={{ color: 'white', fontSize:'large',cursor: 'pointer', marginLeft: '15px' }} className="fa-solid fa-magnifying-glass"></i></li>
                      <li>  <i style={{ color: 'white', fontSize:'large',cursor: 'pointer', marginLeft: '15px' }} className="fa-solid fa-arrows-rotate"></i></li>
                      <li>  <i style={{ color: 'white', fontSize:'large',cursor: 'pointer', marginLeft: '15px' }} className="fa-brands fa-buffer"></i></li>
                      <li>  <i style={{ color: 'white', fontSize:'large',cursor: 'pointer', marginLeft: '15px' }} className="fa-solid fa-circle-user"></i></li>
                        
                    </div>
                </div>
             
            </nav>
        </>
    )
}

export default navbar