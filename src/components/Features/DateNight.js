import React, { useEffect,useState } from 'react'
import PropTypes from 'prop-types'
import Select from './Tertiary/Select'
import { LoginContext } from './Tertiary/LoginContext';
function DateNight(props) {
  const [Film1, setFilm1] = useState("");
  const [Film2, setFilm2] = useState("");
  const [showMovie, setShowMovie] = useState(false);
  useEffect(()=>{
     console.log(Film1);
     console.log(Film2);
  },[Film1,Film2]);
  return (
    <div>
      <h1 className='date' style={{ marginTop: '20vh', marginLeft: '40.5vw' }}>Date Night</h1>
      <LoginContext.Provider value={{ Film1, Film2, setShowMovie }}>
        <div style={{ marginLeft: '30vw', width: '50vw' }} className='row row-cols-2' >
          <div className='col'> <Select id="1" /></div>
          <div className='col'> <Select id="2"/></div>
          <button style={{ margin: '2vw 0vw 0vw 15vw' }} className='match'>Find Match</button>
        </div>
      </LoginContext.Provider>
    </div>
  )
}

DateNight.propTypes = {}

export default DateNight
