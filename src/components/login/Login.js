import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './login.css';
import HomeIcon from '@mui/icons-material/Home';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
        setEmail('');
        setPassword('');

        const res = await fetch('http://localhost:5000/login', {
            method: "POST",
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-Type': 'application/json'
            },
            Credentials:"include"

        })
        // const data = await res.json();
        // console.log(data);
        // window.alert(JSON.stringify(data));
        navigate("/dashboard");
    };

    return (
        <>
            <div className="block_1">
                <div className="card1">
                    <div className="header1">
                        <div className="title1">
                            Login
                        </div>
                        <div className="home1" >
                            <NavLink to="/" className='link2'><HomeIcon fontSize="large" /></NavLink>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit} className='form'>
                        <div className="input-group1">
                            {/* <label htmlFor="email">Email</label> */}
                            <input className='input2'
                                type="text"
                                id="email"
                                placeholder='Email'
                                value={email}
                                onChange={handleEmailChange}
                                required
                                autoComplete='true'
                            />
                        </div>
                        <div className="input-group1">
                            {/* <label htmlFor="password">Password</label> */}
                            <input className='input2'
                                type="password"
                                id="password"
                                placeholder='Password'
                                value={password}
                                onChange={handlePasswordChange}
                                required
                                autoComplete='true'
                            />
                        </div>
                        <div className="input-group1">
                            <button className='btn_3' type="submit">Login</button>
                        </div>
                        <div className="input-group1">
                            <p className='p'>New user?   <NavLink to="/signup" className='link2'> Create an account</NavLink></p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Login;
