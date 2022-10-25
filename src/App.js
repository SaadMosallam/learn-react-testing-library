import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';
import NavBar from './components/NavBar/NavBar';
import SideNav from './components/NavBar/SideNav';
import ErrorPage from './components/ErrorPage/ErrorPage';

function App() {
  return (
    <>
      <header> 
        <NavBar />
        <SideNav />
      </header>
      
      <div className="container">
        <div className='row'>
          <div className="col-12">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile name="John Doe" title="Software Engineer" details="I love developing Apps using React" />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
