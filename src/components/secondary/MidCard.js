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
            
                <div  className="card-body">
                <p id="title" style={{ position:'absolute',top:'75%',fontSize: '15px'}} className="card-title">{props.title}</p>
                    <div className='frost' style={{ position:'absolute',top:'71%',left:'0',borderRadius:'10px',height:'50px',width:'299px'}}></div>

                </div>
            </div>
        </div>

    )
}

MidCard.propTypes = {}

export default MidCard
