import React, { useEffect,useState } from 'react'
import PropTypes from 'prop-types'
import Select from './Tertiary/Select';
import SeeAll from '../info/SeeAll';
import { LoginContext } from './Tertiary/LoginContext';
import { Outlet, useNavigate,useParams } from 'react-router-dom';
import SeeAllSuggestions from './SeeAllSuggestions';
function DateNight(props) {
  const [dimenisions,setDimensions]=useState({
    width:window.innerWidth,
    height:window.innerHeight
  })
  const [Film1, setFilm1] = useState("");
  const [Film2, setFilm2] = useState("");
  const [showMovie, setShowMovie] = useState(false);
  const [results,showResults]=useState(false);
  const navigate=useNavigate();
  const [URL1, setURL] = useState('');
  const [commonGenre, setCommon] = useState([]);
  const [movieName2, setMovieName2] = useState('28');

  useEffect(()=>{
   
     
    findCommon();
  
  },[Film1,Film2,results]);
  useEffect(()=>{
    window.addEventListener("resize",handleResize,false);
    handleResize();
  },[dimenisions.width]);
  const handleResize=()=>{
    setDimensions({
      width:window.innerWidth,
      height:window.innerHeight
    })
  }
  const findCommon = async () => {
    var data = [Film1, Film2];
    //var join=Film1.concat(Film2);
    //var sub=join.filter((item,pos)=>join.indexOf(item)===pos);

    let result = data.reduce((a, b) => Object.values(a).filter(c => b.includes(c)));
    let search = result.length>1?JSON.stringify(result):JSON.stringify(Film1);
   
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=2023616ed87a6faf2ec9cd6de24b46ed&sort_by=vote_count.desc&with_genres=${search.slice(1, search.length - 1)}`
    setURL(url);
    const common = await fetch(url);
    const parsedData = await common.json();
    setCommon(parsedData.results);
  }
  
  return (
    <div>
      <h1 className='date' style={{ marginTop: '10vh', marginLeft: '35.5vw' }}>Date Night</h1>
      <LoginContext.Provider value={{ Film1, Film2, setFilm1,setFilm2,setShowMovie,showResults }}>
        <div style={{ marginLeft: '25vw', width: '50vw' }} className='row row-cols-2' >
          <div className='col'> <Select key="1" id="1" /></div>
          <div className='col'> <Select key="2" id="2"/></div>
          <button style={{ margin: '2vw 0vw 0vw 17vw' }}  onClick={()=>{
           if(Film1!==""||Film2!==""){ 
            
            showResults(true);
            navigate('/DateNight')
           }
           else{
             window.alert('Please select both movies')
           }
            }}  className='match'>Find Match</button>
        </div>
      </LoginContext.Provider>
      
      {results && <SeeAllSuggestions  URL={URL1} medium={'movie'} title="Your Matches"></SeeAllSuggestions>}
      
    </div>
  )
}

DateNight.propTypes = {}

export default DateNight
