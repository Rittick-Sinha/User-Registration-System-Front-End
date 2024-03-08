import React, { useEffect, useState } from 'react';
import Login from './components/login/Login';
import SignUp from './components/signup/Registration';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Profile from './components/dashboard/profile';
import Front from './components/front page/front';
import ParticlesBackground from './components/ParticlesBackground';
import Preloader from './components/Preloader/Preloader';
const App = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <>
      {loading ? (
        <Preloader loading={loading} />
      ) : (
        <>
          <BrowserRouter>
            <Routes>
              <Route exact path='/' element={<Front />} />
              <Route exact path='/login' element={<Login />} />
              <Route exact path='/signup' element={<SignUp />} />
              <Route exact path='/dashboard' element={<Profile />} />
            </Routes>
          </BrowserRouter>
          <ParticlesBackground />
        </>
      )}

    </>
  );
}

export default App;
