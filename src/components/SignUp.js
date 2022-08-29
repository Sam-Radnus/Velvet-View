import React from 'react'
import {  Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
function SignUp() {
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const navigate=useNavigate();
    async function registerUser(e){
        e.preventDefault();
        const response=await fetch('https://moviedbjs1.herokuapp.com/api/SignUp',{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify({
                name,
                email,
                password,
            }),
        })
        const data=await response.json();
       // localStorage.setItem('token',data.user);
        
        if(data.status==='OK')
        {
            localStorage.setItem('token',data.User);
          
            navigate(-1);
            
        }
        
    }
    return (
        <>
            <div style={{height:'100vh',width:'100vw',background:'url(https://i.pinimg.com/736x/fa/09/1a/fa091ae6b75f9d03cfd2c848d4db53d7--propaganda-art-poe.jpg)'}}>
                <div style={{backgroundColor:'rgb(23,22,27)',padding:'50px',height:'100vh',position:'absolute',left:'40%',width:'60vw'}}>
                    <h1 style={{marginTop:'10%',textAlign:'center'}}>Sign Up for an account</h1>
                    <div><h5>Already a User?<Link to="/Login">Log-In</Link></h5></div>
                    <div className="form-floating mb-3">
                        <input onChange={(e)=>setName(e.target.value)}type="name" className="form-control" id="floatingInput" placeholder="your name" />
                        <label for="floatingInput">Enter Your Name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input onChange={(e)=>setEmail(e.target.value)} type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label for="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input onChange={(e)=>setPassword(e.target.value)} type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                        <label for="floatingPassword">Password</label>
                    </div>
                    <button
                    onClick={registerUser} 
                    type="button" 
                    class="btn btn-danger my-5">Sign-Up</button>

                </div>
            </div>
        </>
    )
}

export default SignUp