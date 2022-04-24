import React from 'react'
import PropTypes from 'prop-types'

function Search(props) {
    return (
        <>
            <div style={{backgroundColor:'rgb(23,22,27)'}}className="input-group mb-3">
                <input style={{backgroundColor:'rgb(23,22,27)',color:'white'}} type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                    <button style={{backgroundColor:'rgb(23,22,27)',color:'white'}} className="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
            </div>
        </>
    )
}

Search.propTypes = {}

export default Search
