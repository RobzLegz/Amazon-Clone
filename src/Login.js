import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Login.css";

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = (e) => {
        e.preventDefault();
    }

    const register = (e) => {
        e.preventDefault();
    }

    return (
        <div className="login">
            <Link to="/">
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" className="login-logo" alt="login logo"/>
            </Link>
            <div className="login-container">
                <h1>Sign In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} required/>
                    <h5>Password</h5>
                    <input type="password" onChange={e => setPassword(e.target.value)} value={password} required/>
                    <button type="submit" onClick={signIn} className="signin-btn">Sign In</button>
                </form>
                <p>By continuing, you agree to FAKE AMAZON'S Conditions of Use and Privacy Notice.</p>
                <button onClick={register} className="register-btn">Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login;