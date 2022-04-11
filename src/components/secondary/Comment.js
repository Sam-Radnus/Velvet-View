import React from 'react'
import PropTypes from 'prop-types'

function Comment(props) {
    let { userName, MovieName, Review } = props
    return (
        <div style={{ height: '98px', width: '298px' }} className='danger'>
            <h5>{props.userName} liked {props.MovieName}</h5>
            <p>{props.Review}</p>
        </div>
    )
}

Comment.propTypes = {}

export default Comment
