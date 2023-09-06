import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Mid.css';
function MidCard(props) {
    let { Medium,media,Feature,id } = props;
    
    let navigate=useNavigate();
    return (
        <div id="movie_poster" style={{marginTop:'0vh',marginRight:"5px",cursor:'pointer',width:"fit-content"}}  onClick={()=>{media?navigate(`/${Medium}/${Feature}/Details/${media}/${id}`):navigate(`/${Medium}/${Feature}/Details/${id}`)}}>
           
            <div id="image_bg" style={{ height: '215px', width: '143px', position:'relative',overflow:'hidden',borderRadius: '10px', backgroundPosition:"center !important",backgroundSize:"contain !important",backgroundRepeat:"no-repeat",background:props.imageURL!==null?`url(${props.imageURL} `:`url(https://icon-library.com/images/netflix-icon-21_84051.jpg)` }}>
       
                
                  
        
       
            </div>
        </div>

    )
}

MidCard.propTypes = {}

export default MidCard