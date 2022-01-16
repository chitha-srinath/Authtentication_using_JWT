import React from 'react'
import { Link } from "react-router-dom";
// import Register from './Register';

function Login() {
    return (
        <div>
            <form action="">
                <label htmlFor="">User Id / Email : </label><br />
                <input type="text" name="" id="" /><br />
                <label htmlFor="">Password : </label><br />
                <input type="password" name="" id="" /><br />
            </form>
            <p>if u dont have an account, <Link to="/register">click here
            </Link> to signup.</p>
        </div>
    )
}

export default Login
