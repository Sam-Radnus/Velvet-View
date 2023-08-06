import React from 'react'
import '../App.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import {useLocation} from "react-router-dom";

function Navbar() {
    let location=useLocation();
  
    useEffect(() => {
   
    }, [])
    function kick(){
        localStorage.removeItem('userInfo');
        window.location.href="/";
        console.log(localStorage.removeItem('userInfo'));
    }
   
    return (
        <>
           <nav style={{position:'fixed',top:'0',left:'0',zIndex:'6',width:'100%'}} className="navbar navbar-default navbar-fixed-top navbar-expand-lg navbar-dark ">
    <div style={{textAlign:'center'}} className="container-fluid">
        <Link id="heading" style={{ fontSize:'xx-large',marginRight: '10vw' ,color:'rgb(255,0,77)'}} className="navbar-brand " to="/">Velvet<span>-View</span></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav" style={{width:"75%",display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
                <Link style={{fontSize:'large',color:`${location.pathname.slice(0,6)==='/Movie'?'rgb(255,0,77)':'white'}`}}className={`nav-link ${location.pathname==='/'?'active':''} mx-2`} to="/">Movies</Link>
                <Link style={{fontSize:'large',color:`${location.pathname.slice(0,3)==='/TV'?'rgb(255,0,77)':'white'}`}}className={`nav-link ${location.pathname==='/TVshows'?'active':''} mx-2`} to="/TVshows">TV Shows</Link>
                <Link style={{fontSize:'large',color:`${location.pathname.slice(0,6)==='/Anime'?'rgb(255,0,77)':'white'}`}}className={`nav-link ${location.pathname==='/Anime'?'active':''} mx-2`} to="/Anime">Anime</Link>
                <Link style={{fontSize:'large',color:`${location.pathname.slice(0,10)==='/DateNight'?'rgb(255,0,77)':'white'}`}}className={`nav-link ${location.pathname==='/DateNight'?'active':''} mx-2`} to="/DateNight">Date Night</Link>
                <Link style={{fontSize:'large',color:`${location.pathname.slice(0,15)==='/AdvancedSearch'?'rgb(255,0,77)':'white'}`}}className={`nav-link ${location.pathname==='/AdvancedSearch'?'active':''} mx-2`} to="/AdvancedSearch">Advanced Search</Link>
                <Link style={{fontSize:'large',color:`${location.pathname.slice(0,15)==='/prompt'?'rgb(255,0,77)':'white'}`}}className={`nav-link ${location.pathname==='/prompt'?'active':''} mx-2`} to="/prompt">Plot Seeker</Link>
            </div>
            
            <div style={{marginLeft:'10.6vw',display:'flex'}} className='white'>
                              
                              <li>  <i  onClick={()=>{window.location.href="https://github.com/Sam-Radnus"}}  style={{ color: 'white', fontSize:'large',cursor: 'pointer', marginLeft: '15px' }} className="fa-brands fa-github"></i></li>
                              <li >  <i onClick={()=>{ window.location.href="https://www.buymeacoffee.com/samradnus2o"}} style={{ color: 'white', fontSize:'large',cursor: 'pointer', marginLeft: '15px' }} className="fa-solid fa-money-bill"></i></li>
                              { !window.localStorage.getItem('userInfo')?<li> <Link to={`/SignUp`}> <i style={{ color: 'white', fontSize:'large',cursor: 'pointer', marginLeft: '15px' }} className="fa-solid fa-circle-user"></i></Link></li>
                             :<>
                               <li><Link to="/Dashboard"><i style={{ color: 'white', fontSize:'large',cursor: 'pointer', marginLeft: '15px' }} className="fa-solid fa-circle-info"></i></Link> </li>
                              </>
                             }
                              
                            </div>
        </div>
    </div>
</nav>
        </>
    )
}

export default Navbar