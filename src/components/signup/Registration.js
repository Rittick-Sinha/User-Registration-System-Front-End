import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
// import HomeIcon from '@mui/icons-material/Home';
import './signup.css';

// ... (imports and other code)

const Registration = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    email: '',
    username: '',
    phone: '',
    college: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleForm = async (e) => {
    e.preventDefault();
    // Handle form submission logic here
    setForm({
      name: '',
      email: '',
      username: '',
      phone: '',
      college: '',
      password: ''
    });
    const res = await fetch('http://localhost:5000/register', {
      method: 'POST',
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        username: form.username,
        phone: form.phone,
        college: form.college,
        password: form.password
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await res.json();
    // console.log(data);
    window.alert(JSON.stringify(data));
    // navigate("/dashboard");
  };

  return (
    <>
      <div className="main">
        <div className="card2">
          <div className="header2">
            <div className="title2">
              Sign up
            </div>
            <div className="home2">
              <NavLink to="/" className='link2'><HomeIcon fontSize="large" /></NavLink>
            </div>
          </div>
          <form onSubmit={handleForm} className='login-form'>
            <div className="input-group">
              <input className='input1'
                type="text"
                id="name"
                placeholder='Name'
                value={form.name}
                onChange={handleInputChange}
                name="name"
                required
                autoComplete
              />
              <input className='input1'
                type="text"
                id="email"
                placeholder='Email'
                value={form.email}
                onChange={handleInputChange}
                name="email"
                required
                autoComplete
              />
            </div>
            <div className="input-group">
              <input className='input1'
                type="text"
                id="username"
                placeholder='Username'
                value={form.username}
                onChange={handleInputChange}
                name="username"
                required
                autoComplete
              />
              <input className='input1'
                type="text"
                id="phone"
                placeholder='Phone'
                value={form.phone}
                onChange={handleInputChange}
                name="phone"
                required
                autoComplete
              />
            </div>
            <div className="input-group">
              <input className='input1'
                type="text"
                id="college"
                placeholder='College'
                value={form.college}
                onChange={handleInputChange}
                name="college"
                required
                autoComplete
              />
              <input className='input1'
                type="password"
                id="password"
                placeholder='Password'
                value={form.password}
                onChange={handleInputChange}
                name="password"
                required
                autoComplete
              />
            </div>
            <div className="input-group">
              <button className='btn' type="submit">Login</button>
            </div>
            <div className="input-group4">
              <p className='p1'>Already register?<NavLink to="/login" className='link1'> Login</NavLink></p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}


export default Registration;
