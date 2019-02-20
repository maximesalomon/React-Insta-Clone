import React from 'react';
import './Login.css';
import instagram from './img/instagram.png';

const Login = (props) => {
        return (
            <div className="loginContainer">
                <div className="loginContentContainer">
                    <div className="login">
                        <div><img className="loginInstagram" src={instagram} alt="Instagram" height="50" width="160" /></div>
                        <div className="loginForm">
                            <div><input className="loginInput"></input></div>
                            <div><input className="loginInput"></input></div>
                            <div><button className="loginButton" onClick={props.isLoggingIn}>Login</button></div>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }

export default Login;