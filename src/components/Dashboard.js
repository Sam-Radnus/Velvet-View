import React from 'react'
import PropTypes from 'prop-types'

function Dashboard(props) {
  return (
    <div>
        <h1 style={{textAlign:'center'}}>Dashboard</h1>
        <div style={{position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)'}} className="info">
            <h1>User:</h1>
        </div>

    </div>
  )
}

Dashboard.propTypes = {}

export default Dashboard
