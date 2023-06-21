import React from 'react'
import './Register.css'
import image1 from '../assets/arrow1.png'
const Register = () => {
    return (

        <div class="container">

            <div class="col-md-5 register-left">
                <img src={image1}></img>
                <h3> Join Us</h3>
                <p>Subscribe Easy Tutorials Youtube Channel to watch more
                    videos</p>
                <button type="button" class="btn btn-primary">About Us</button>
            </div>
            <div class="col-md-7 register-right">
                <form action="#">
                    <h2>Register Here</h2>
                    <div class="register-form">
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Name"></input>
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Username"></input>
                    </div>
                    <div class="form-group">
                        <input type="email" class="form-control" placeholder="Email"></input>
                    </div>
                    <div class="form-group">
                        <input type="password" class="form-control" placeholder="Password"></input>
                    </div>
                    <button type="button" class="btn btn-primary">Register</button>
                </form>

            </div>
        </div>


    )
}

export default Register