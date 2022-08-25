import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Mid.css';
function MidCard(props) {
    let { Medium,media,Feature,id } = props;
    
    let navigate=useNavigate();
    return (
        <div style={{marginTop:'0vh',cursor:'pointer'}}  onClick={()=>{media?navigate(`/${Medium}/${Feature}/Details/${media}/${id}`):navigate(`/${Medium}/${Feature}/Details/${id}`)}}>
           
            <div style={{ height: '170px', width: '299px', position:'relative',overflow:'hidden',borderRadius: '10px', background:props.imageURL!==null?`url(${props.imageURL} `:`url(https://icon-library.com/images/netflix-icon-21_84051.jpg)` }}>
            <p id="title" style={{ position:'absolute',zIndex:'5',top:'87.6%',textAlign:'center',width:'100%',fontSize: '15px'}} className="card-title">{props.title}</p>
                <div id="mid" style={{position:'absolute',borderRadius:'10px',background:props.imageURL!==null?`url(${props.imageURL} `:`url(https://icon-library.com/images/netflix-icon-21_84051.jpg)` ,overflow:'hidden',height:'7vh',width:'100%',left:'0%',right:'5%',top:'79%'}}  className="card-body">
                  
                
                </div>
            </div>
        </div>

    )
}

MidCard.propTypes = {}

export default MidCard