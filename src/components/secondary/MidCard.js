import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import './Mid.css';
function MidCard(props) {
    let { imageURL,media,Feature,id, title } = props;
    let navigate=useNavigate();
    return (
        <div style={{cursor:'pointer'}} onClick={()=>{media.length!==0?navigate(`${Feature}/Details/${media}/${id}`):navigate(`${Feature}/Details/${id}`)}}>
           
            <div style={{ height: '170px', width: '299px', position:'relative',borderRadius: '10px', backgroundImage: `url(${props.imageURL} ` }}>
            <p id="title" style={{ position:'absolute',zIndex:'5',top:'80%',left:'12%',fontSize: '15px'}} className="card-title">{props.title}</p>
                <div style={{position:'absolute',boxShadow:'none',borderRadius:'10px',background:`url(${props.imageURL}) no-repeat bottom center `,backgroundSize:'cover',backgroundColor:'rgb(255,255,255,0.5)',overflow:'hidden', filter: 'blur(5px)',height:'5vh',width:'100%',left:'0%',right:'5%',top:'79%'}}  className="card-body">
               
                  
                   
                </div>
            </div>
        </div>

    )
}

MidCard.propTypes = {}

export default MidCard
