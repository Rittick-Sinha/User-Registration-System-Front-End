import React from 'react';
import { NavLink } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import './front.css';
import line from '../assests/Vector 1.png';

const Front = () => {



    return (
        <>
            <div className="block1">
                <div className="intro">
                    <div className="box">
                        <div className='title'>
                            <p >User Registration System</p>
                        </div>
                        <div className="type">
                            <TypeAnimation
                                sequence={[

                                    'Hi, my name is Rittick Sinha.',
                                    1000,
                                    'This project is being done by MERN.',
                                    1000,
                                    'USER Registration System project',
                                    1000,
                                    'Please give my repository a star.',
                                    1000,
                                    'Thank you!!',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={0.1}
                                deletionSpeed={90}
                                // speed={{type: 'keyStrokeDelayInMs', value: 250}}
                                style={{ fontSize: '3.2em', display: 'inline-block', color: '#fffff', 'text-wrap': 'wrap',wordBreak: 'break-all' }}
                                repeat={Infinity}
                                
                            />
                        </div>
                        <div className='line'>
                            <img src={line} alt="" />
                        </div>
                        <div className="links">
                            <NavLink to="/login"><button className='btn_1'>Login</button></NavLink>
                            <NavLink to="/signup"><button className='btn_2'>Sign up</button></NavLink>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Front;
