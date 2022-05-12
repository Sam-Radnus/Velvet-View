import React from 'react'

function SignUp() {
    return (
        <>
            <h1>Sign Up for an account</h1>
            <div className="form-floating mb-3">
                <input type="name" className="form-control" id="floatingInput" placeholder="your name"/>
                    <label for="floatingInput">Enter Your Name</label>
            </div>
            <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                <label for="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                <label for="floatingPassword">Password</label>
            </div>
            <button type="button" class="btn btn-danger">Sign-Up</button>
        </>
    )
}

export default SignUp