import React from 'react'
function Comment(props) {

    return (
        <div className='my-3' style={{ height: '98px', width: '22.5vw',backgroundColor:'rgb(187,45,59)',borderRadius:'5px',padding:'7px',marginRight:'5px'}} >
            <h5>{props.userName} liked {props.MovieName}</h5>
            <p>{props.Review}...</p>
        </div>
    )
}

Comment.propTypes = {}

export default Comment
