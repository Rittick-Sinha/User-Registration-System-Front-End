import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './profile.css';
// import pic from '../assests/user.png';
const Profile = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({});

    const callDashboard = async () => {
        try {
            const res = await fetch('http://localhost:5000/dashboard', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                credentials: "include"
            });

            if (!res.ok) {
                throw new Error('Request failed');
            }

            const data = await res.json();
            setUserData(data);
        } catch (err) {
            console.error(err);
            navigate("/login");
        }
    }

    useEffect(() => {
        callDashboard();
    }, []);

    return (
        <>
            <div className="box1">
                <div className="card3">
                    <div className="user_pic">
                        <div className="mask">
                            {/* <img src={pic} alt="" /> */}
                        </div>
                    </div>
                    <div className="info">
                        <div className="dash">
                            Dashboard
                        </div>
                        <form method='GET' className="details">
                            <div className='user_detail'><span>NAME</span>  : {userData.name}</div>

                            <div className='user_detail'><span>EMAIL</span>  : {userData.email}</div>

                            <div className='user_detail'><span>USERNAME</span> : {userData.username}</div>

                            <div className='user_detail'><span>PHONE</span>  : {userData.phone}</div>

                            <div className='user_detail'> <span>COLLEGE</span> : {userData.college}</div>


                        </form>
                        <div className="logout">
                            <NavLink to="/"><button className='btn_5'>Log out</button></NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile;
