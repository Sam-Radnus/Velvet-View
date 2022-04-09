import React from 'react'
import '../App.css';
function navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark ">
                <div className="container-fluid">
                    <a  id="heading "style={{ marginRight: '10vw' }} className="navbar-brand " href="#">Movie<span>-Array</span></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link active mx-2" href="#">Movies</a>
                            <a className="nav-link  mx-2" href="#">TV Shows</a>
                            <a className="nav-link  mx-2" href="#">Animations</a>
                            <a className="nav-link mx-2 " href="#">Plans</a>
                          
                        </div>
                    </div>
                    <div className='white'>
                
                        <i style={{ color: 'white', cursor: 'pointer', marginLeft: '15px' }} className="fa-solid fa-magnifying-glass"></i>
                        <i style={{ color: 'white', cursor: 'pointer', marginLeft: '15px' }} className="fa-solid fa-arrows-rotate"></i>
                        <i style={{ color: 'white', cursor: 'pointer', marginLeft: '15px' }} className="fa-brands fa-buffer"></i>
                        <i style={{ color: 'white', cursor: 'pointer', marginLeft: '15px' }} className="fa-solid fa-circle-user"></i>
                         
                        <a className=" dropdown-toggle mx-3" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            
                            </a>
                            <ul className="dropdown-menu bg-dark" aria-labelledby="navbarDropdownMenuLink">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        
                    </div>
                </div>
             
            </nav>
        </>
    )
}

export default navbar