import React from 'react'
import PropTypes from 'prop-types'
import Select from './Tertiary/Select'
function DateNight(props) {
  return (
    <div>
        <h1 style={{marginTop:'20vh',marginLeft:'46.5vw'}}>DATE NIGHT</h1>
        <div style={{marginLeft:'30vw',width:'50vw'}}className='row row-cols-2' >
         <div className='col'> <Select/></div>
         <div className='col'> <Select/></div>
        </div>
        
    </div>
  )
}

DateNight.propTypes = {}

export default DateNight
