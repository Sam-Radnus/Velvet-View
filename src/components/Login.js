import React from 'react'
import PropTypes from 'prop-types'

function Login(props) {
    return (
        <div>
            <h1>Login</h1>
            <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                    <label for="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                    <label for="floatingPassword">Password</label>
            </div>
        </div>
    )
}

Login.propTypes = {}

export default Login
