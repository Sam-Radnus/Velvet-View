import React from 'react'
import PropTypes from 'prop-types'

function Login(props) {
    return (
        <div>
             <div style={{height:'100vh',width:'100vw',background:'url(https://i.pinimg.com/736x/a4/e4/56/a4e456567e1fc1ce708fbc30fe6467b4--canvas-prints-canvas-art.jpg)'}}>
                <div style={{backgroundColor:'rgb(23,22,27)',padding:'50px',height:'100vh',position:'absolute',left:'50%',width:'50vw'}}>
                    <h1 style={{marginTop:'10%',textAlign:'center'}}>LogIn</h1>
                    
                    
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label for="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                        <label for="floatingPassword">Password</label>
                    </div>
                    <button type="button" class="btn btn-danger my-5">Sign-Up</button>

                </div>
            </div>
        </div>
    )
}

Login.propTypes = {}

export default Login
