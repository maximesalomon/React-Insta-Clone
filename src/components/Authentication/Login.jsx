import React from 'react';
import instagram from './img/instagram.png';

import styled from 'styled-components';

const LoginContainer = styled.div `
    margin: 0 auto;
    width: 350px;
`

const LoginModal = styled.div `
    margin-top: 140px;
    width: 350px;
    height: 400px;
    background-color: white;
    border: 1px solid #e6e6e6;
    border-radius: 1px;
`
const LoginLogo = styled.div `
    margin-top: 30px;
    margin-bottom: 14px;
    margin-left: 100px;
    display:flex;
    justify-content: center;
`

const LoginForm = styled.div `
    margin-left: 40px;
`

const LoginInput = styled.input `
    width: 260px;
    margin-top: 5px;
    padding: 10px;
    background-color: #fafafa;
`
const Button = styled.button `
margin-top: 14px;
    width: 284px;
    text-align: center;
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    font-family: Helvetica, Arial, sans-serif;
    color: #fff;
    padding: 5px;
    border-radius: 2px;

    ${props => (props.type === 'primary' 
        ? ` background-color: #3897f0;
            border: 1px solid #3897f0;`
        : null)}
`

const Login = (props) => {
    return (
        <LoginContainer>
            <LoginModal>
                <LoginLogo><img src={instagram} alt="Instagram" height="50" width="160" /></LoginLogo>
                <LoginForm>
                    <div><LoginInput placeholder="Username" name="username"></LoginInput></div>
                    <div><LoginInput type="password" placeholder="Password" name="password"></LoginInput></div>
                    <Button type="primary" onClick={props.isLoggingIn}>Log in</Button>
                </LoginForm>
            </LoginModal>
        </LoginContainer>
        
    )
}

export default Login;