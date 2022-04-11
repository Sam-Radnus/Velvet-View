import React from 'react'
import PropTypes from 'prop-types'

function Comment(props) {
    let { userName, MovieName, Review } = props
    return (
        <div className='my-3' style={{ height: '98px', width: '280px',backgroundColor:'rgb(187,45,59)',borderRadius:'5px',padding:'7px',marginRight:'5px'}} >
            <h5>{props.userName} liked {props.MovieName}</h5>
            <p>{props.Review}...</p>
        </div>
    )
}

Comment.propTypes = {}

export default Comment
