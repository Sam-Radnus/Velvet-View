import React from 'react'
import PropTypes from 'prop-types'

function MidCard(props) {
    let { imageURL, title } = props;
    return (
        <div>
            <p style={{ position: 'relative' }}></p>
            <div style={{ height: '25vh', width: '22vw', borderRadius: '10px', backgroundImage: `url(${props.imageURL} ` }}>
                <div style={{ backgroundColor: 'rgba(0,0,0,0.11)', backdropFilter: 'blur(0px)' }} className="card-body">
                    <div style={{ position: 'absolute', top: '5vw' }} className="bottom"><p id="title" style={{ fontSize: '22px' }} className="card-title">{props.title}</p></div>

                </div>
            </div>
        </div>

    )
}

MidCard.propTypes = {}

export default MidCard
