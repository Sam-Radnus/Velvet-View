import React from 'react'
import { Link } from 'react-router-dom';
import {useState} from 'react'
function Login() {

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    async function loginUser(e)
    {
        e.preventDefault();
        const response=await fetch("https://velvet-view-backend.onrender.com/auth/login",{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify({
                email,
                password
            })
        })
        const data=await response.json();
        
        if(data)
        {
            localStorage.setItem('userInfo',JSON.stringify(data.user));
            alert('login successful');
            window.location.href="/";
        }
        else{

            alert('login unsuccessful');
        }
      
    }
    return (
        <div>
             <div style={{height:'100vh',width:'100vw',background:'url(https://i.pinimg.com/736x/a4/e4/56/a4e456567e1fc1ce708fbc30fe6467b4--canvas-prints-canvas-art.jpg)'}}>
                <div style={{backgroundColor:'rgb(23,22,27)',padding:'50px',height:'100vh',position:'absolute',left:'50%',width:'50vw'}}>
                <h1 style={{marginTop:'10%',textAlign:'center'}}>Login to your account</h1>
                    <div className="form-floating mb-3">
                        <input onChange={(e)=>setEmail(e.target.value)} type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label for="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input onChange={(e)=>setPassword(e.target.value)} type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                        <label for="floatingPassword">Password</label>
                    </div>
                    <div className='my-2'>
                        <h5>Want to signup?<Link style={{color:'white'}} to="/signup">Click Here</Link></h5>
                    </div>
                    <button
                    onClick={loginUser} 
                    type="button" 
                    class="btn btn-danger my-5">Log-In</button>


                </div>
            </div>
        </div>
    )
}

Login.propTypes = {}

export default Login
