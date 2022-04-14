import React from 'react'
import PropTypes from 'prop-types'

function Details(props) {
    let{title,overview,imageURL}=props;
    return (
        <div>
            <div style={{ marginLeft: '40vw' }}>
                <div style={{ height: '350px', width: '75vw',backgroundColor: 'rgba(0,0,0,0.11)',backgroundImage: `url(${props.imageURL} ` }}>
                </div>

                <h1 id="title" style={{ textAlign:'center',fontSize: '75px' }} >{props.title}</h1>
                
                <p>{props.overview}</p>
            </div>
        </div>
    )
}

Details.propTypes = {}

export default Details
