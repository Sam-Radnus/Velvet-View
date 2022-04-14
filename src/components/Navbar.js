import React from 'react'
import '../App.css';
function navbar() {
    return (
        <>
            <nav style={{position:'fixed',top:'0',zIndex:'6',width:'100%'}} className="navbar navbar-default navbar-fixed-top navbar-expand-lg navbar-dark ">
                <div className="container-fluid">
                    <a   id="heading "style={{ fontSize:'xx-large',marginRight: '10vw' }} className="navbar-brand " href="#">Movie<span>-Array</span></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a style={{fontSize:'large'}}className="nav-link active mx-2" href="#">Movies</a>
                            <a style={{fontSize:'large'}}className="nav-link  mx-2" href="#">TV Shows</a>
                            <a style={{fontSize:'large'}}className="nav-link  mx-2" href="#">Animations</a>
                            <a style={{fontSize:'large'}}className="nav-link  mx-2 " href="#">Date Night</a>
                            <a style={{fontSize:'large'}}className="nav-link  mx-2 " href="#">Advanced Search</a>
                          
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