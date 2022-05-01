import React, { useEffect,useState } from 'react'
import PropTypes from 'prop-types'
import Select from './Tertiary/Select';
import SeeAll from '../info/SeeAll';
import { LoginContext } from './Tertiary/LoginContext';
import { Outlet, useNavigate,useParams } from 'react-router-dom';
function DateNight(props) {
  const [Film1, setFilm1] = useState("");
  const [Film2, setFilm2] = useState("");
  const [showMovie, setShowMovie] = useState(false);
  const [results,showResults]=useState(false);
   
  const [URL1, setURL] = useState('');
  const [commonGenre, setCommon] = useState([]);
  const [movieName2, setMovieName2] = useState('28');
  useEffect(()=>{
     console.log(Film1);
     console.log(Film2);
    findCommon();
    console.log(commonGenre);
  },[Film1,Film2]);
  
  const findCommon = async () => {
    var data = [Film1, Film2];
    var join=Film1.concat(Film2);
    var sub=join.filter((item,pos)=>join.indexOf(item)===pos);
    let result = data.reduce((a, b) => a.filter(c => b.includes(c)));
    let search = result.length!==0?JSON.stringify(result):JSON.stringify(sub);
    console.log(search);
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=2023616ed87a6faf2ec9cd6de24b46ed&with_genres=${search.slice(1, search.length - 1)}`
    setURL(url);
    const common = await fetch(url);
    const parsedData = await common.json();
    setCommon(parsedData.results);
  }
  
  return (
    <div>
      <h1 className='date' style={{ marginTop: '10vh', marginLeft: '40.5vw' }}>Date Night</h1>
      <LoginContext.Provider value={{ Film1, Film2, setFilm1,setFilm2,setShowMovie }}>
        <div style={{ marginLeft: '30vw', width: '50vw' }} className='row row-cols-2' >
          <div className='col'> <Select id="1" /></div>
          <div className='col'> <Select id="2"/></div>
          <button style={{ margin: '2vw 0vw 0vw 15vw' }}  onClick={()=>{console.log(URL1);showResults(true)}}  className='match'>Find Match</button>
        </div>
      </LoginContext.Provider>
      {console.log(URL1)}
    
      {results && <SeeAll URL={URL1} title="Your Matches"></SeeAll>}
      
    </div>
  )
}

DateNight.propTypes = {}

export default DateNight
