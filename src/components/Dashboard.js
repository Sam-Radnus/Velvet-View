import React, { useEffect , useState } from 'react'

function Dashboard() {
  const [token,setToken]=useState('');
  function parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    setToken(JSON.parse(jsonPayload));
  };
  useEffect(()=>{
    parseJwt(localStorage.getItem('token'));
  },[]);
  return (
    <div>
        <h1 style={{textAlign:'center'}}>Dashboard</h1>
        <div style={{display:'flex',position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)'}} className="info">
            <div style={{float:'left',backgroundColor:'red',borderRadius:'100%',padding:'55px',width:'fit-content'}}><i style={{color:'white',fontSize:'20vh',padding:'5px'}} className="fa-solid fa-user"></i></div>
           <div style={{marginTop:'10vh',marginLeft:'30px'}}> <h1>User:{token.name}</h1>
            <h1>Email:{token.email}</h1></div>
          
          
        </div>

    </div>
  )
}

Dashboard.propTypes = {}

export default Dashboard
