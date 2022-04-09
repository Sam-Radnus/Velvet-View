import React from 'react'
import '../App.css';
function navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Movie-Array</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link active" href="#">Movies</a>
                            <a className="nav-link active" href="#">TV Shows</a>
                            <a className="nav-link active" href="#">Animations</a>
                            <a className="nav-link "       href="#">Plans</a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default navbar