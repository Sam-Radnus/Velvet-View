import React, { useState } from 'react'
import '../App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useEffect } from 'react';
import {useLocation} from "react-router-dom";

function Navbar() {
    let location=useLocation();
    const [loggedIn,setLoggedIn]=useState(false);
    useEffect(() => {
      let user=parseJwt(window.localStorage.getItem('token'));
      setLoggedIn(user.length>0);
      console.log(user.name);
      console.log(user.email);
      
    
    }, [])
    function kick(){
        window.localStorage.removeItem('token');
        window.location.href="/SignUp";
    }
    function parseJwt (token) {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
    
        return JSON.parse(jsonPayload);
    };
    return (
        <>
            <nav style={{position:'fixed',top:'0',zIndex:'6',width:'100%'}} className="navbar navbar-default navbar-fixed-top navbar-expand-lg navbar-dark ">
                <div className="container-fluid">
                    <Link   id="heading "style={{ fontSize:'xx-large',marginRight: '10vw' ,color:'rgb(255,0,77)'}} className="navbar-brand " to="/">Movie<span>-Array</span></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link style={{fontSize:'large',color:`${location.pathname.slice(0,6)==='/Movie'?'rgb(255,0,77)':'white'}`}}className={`nav-link ${location.pathname==='/'?'active':''} mx-2`} to="/">Movies</Link>
                            <Link style={{fontSize:'large',color:`${location.pathname.slice(0,3)==='/TV'?'rgb(255,0,77)':'white'}`}}className={`nav-link ${location.pathname==='/TVshows'?'active':''} mx-2`} to="/TVshows">TV Shows</Link>
                            <Link style={{fontSize:'large',color:`${location.pathname.slice(0,6)==='/Anime'?'rgb(255,0,77)':'white'}`}}className={`nav-link ${location.pathname==='/Anime'?'active':''} mx-2`} to="/Anime">Anime</Link>
                            <Link style={{fontSize:'large',color:`${location.pathname.slice(0,10)==='/DateNight'?'rgb(255,0,77)':'white'}`}}className={`nav-link ${location.pathname==='/DateNight'?'active':''} mx-2`} to="/DateNight">Date Night</Link>
                            <Link style={{fontSize:'large',color:`${location.pathname.slice(0,15)==='/AdvancedSearch'?'rgb(255,0,77)':'white'}`}}className={`nav-link ${location.pathname==='/AdvancedSearch'?'active':''} mx-2`} to="/AdvancedSearch">Advanced Search</Link>
                          
                        </div>
                    </div>
                    <div style={{display:'flex',marginRight:'2vw'}} className='white'>
                              
                      <li>  <i  onClick={()=>{window.location.reload(false)}}  style={{ color: 'white', fontSize:'large',cursor: 'pointer', marginLeft: '15px' }} className="fa-solid fa-arrows-rotate"></i></li>
                      <li >  <i style={{ color: 'white', fontSize:'large',cursor: 'pointer', marginLeft: '15px' }} className="fa-solid fa-hand-holding-dollar"></i></li>
                      <li> <Link to={`/SignUp`}> <i style={{ color: 'white', fontSize:'large',cursor: 'pointer', marginLeft: '15px' }} className="fa-solid fa-circle-user"></i></Link></li>
                      
                    </div>
                </div>
             
            </nav>
        </>
    )
}

export default Navbar