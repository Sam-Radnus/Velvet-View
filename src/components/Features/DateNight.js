import React, { useEffect,useState } from 'react'
import PropTypes from 'prop-types'
import Select from './Tertiary/Select';
import SeeAll from '../info/SeeAll';
import { LoginContext } from './Tertiary/LoginContext';
import { Outlet, useNavigate,useParams } from 'react-router-dom';
import { AwesomeButton } from 'react-awesome-button';
import SeeAllSuggestions from './SeeAllSuggestions';
function DateNight(props) {
  const [dimenisions,setDimensions]=useState({
    width:window.innerWidth,
    height:window.innerHeight
  })
  const [Film1, setFilm1] = useState("");
  const [Film2, setFilm2] = useState("");
  const [Query,setQuery] =useState("");
  const [occassion,setOccasion]=useState("");
  const [genre,setGenre]=useState("");
  const [specification,setSpecification]=useState("");
  const [categories,setCategories]=useState("");
  const [showMovie, setShowMovie] = useState(false);
  const [type, setType] = useState("");
  const [results,showResults]=useState(false);
  const navigate=useNavigate();
  const [URL1, setURL] = useState('');
  const [commonGenre, setCommon] = useState([]);
  const [movieName2, setMovieName2] = useState('28');
  const [movieName1,setMovieName1]=useState('');
  async function findMatch() {
  
    if (!type) {
      // return json({ status: "error" });
    }
    generateQuery(type, categories, specification);
    const url = "https://api.openai.com/v1/completions";
    const payload = {
      model: "text-davinci-003",
      prompt: Query,
      temperature: 0.7,
      max_tokens: 2048,
      top_p: 1.0,
      frequency_penalty: 0.0,
      stream: false,
      presence_penalty: 0.0,
      n: 1,
    };
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPEN_AI_API_KEY}`,
      },
      method: "POST",
      body: JSON.stringify(payload),
    });
    var data = await response.json();
    var movies = data.choices[0]?.text?.split("\n").join("").split(",");
    movies = movies.map((m) => m.trim());
   // return json(movies);
  }
  
  const generateQuery = (type, categories, specification) => {
    var query = "Give a List of 5 ";
    if (type == "Both") {
      type = "Movie or TV Show";
    }
    query += type;
    if (categories) {
      query += ` that fits the following categories: ${categories} .`;
    }
    if (specification) {
      query += `Make sure it fits the following description as well: ${specification}.`;
    }
    if (categories || specification) {
      query+=`If you do not have 5 recommendations that fit these criteria perfectly, do your best to suggest other ${type} that I might like.`;
    }
    query += `Please return the names as a comma seperated list without numbering.`;
    setQuery(query);
  };
  useEffect(()=>{
   
    findMatch();
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
    let search = result.length>1?JSON.stringify(result):JSON.stringify([...Film1,...Film2]);
    console.log(data);
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=2023616ed87a6faf2ec9cd6de24b46ed&sort_by=vote_count.desc&with_genres=${search.slice(1, search.length - 1)}`
    setURL(url);
    const common = await fetch(url);
    const parsedData = await common.json();
    setCommon(parsedData.results);
  }
  
  return (
    <div className="dn-bg"  style={{marginTop:"0 !important",border:"solid"}}>
      <p className='date' style={{ marginTop: '15vh', textAlign:"center",fontSize:"50px",color:"white" }}>Date Night</p>
      <LoginContext.Provider value={{ Film1, Film2, setFilm1,setFilm2,setShowMovie,movieName1,setMovieName1,movieName2,setMovieName2,showResults }}>
        <div style={{ marginLeft: '24.5vw',justifyContent:"center !important",textAlign:"center !important" ,maxWidth: '50vw'}}  >
          <div style={{display:"flex",justifyContent:"center",gap:"100px"}}> 
          <div > <Select key="1" id="1" /></div>
          <div > <Select key="2" id="2"/></div>
        </div>
          <button style={{backgroundColor:"#A53167 !important", boxShadow:"0px 4px 6px rgba(0,0,0,0.1)" ,borderRadius:"5px",margin: '2vw 0vw 0vw 21.5vw' }}  onClick={()=>{
           if(Film1!==""||Film2!==""){ 
            console.log(movieName1);
            console.log(movieName2);
            showResults(true);
            navigate('/DateNight')
           }
           else{
             window.alert('Please select both movies')
           }
            }}  className='match'>Find Match</button>

        </div>
      </LoginContext.Provider>
      
      {results && <SeeAllSuggestions  URL={URL1} medium={'movie'} movies={[movieName1,movieName2]} title="Your Matches"></SeeAllSuggestions>}
      
    </div>
  )
}

DateNight.propTypes = {}

export default DateNight
