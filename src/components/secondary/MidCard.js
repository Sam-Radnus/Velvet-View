import React from 'react'
import PropTypes from 'prop-types'

function MidCard(props) {
    let { imageURL, title } = props;
    return (
        <div>
           
            <div style={{ height: '170px', width: '299px', borderRadius: '10px', backgroundImage: `url(${props.imageURL} ` }}>
                <div  className="card-body">
                    <div style={{ marginTop: '20%' }} className="bottom"><p id="title" style={{ fontSize: '22px' }} className="card-title">{props.title}</p></div>

                </div>
            </div>
        </div>

    )
}

MidCard.propTypes = {}

export default MidCard
