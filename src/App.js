// all routing import
import React from 'react';
import { Route, Routes } from 'react-router-dom';

// style inport here
import './App.css';

// all component here
import Navbar from './component/NavbarSection';

// all page are import here
import Home from './pages/home/Home.js'
import Login from './pages/login/Login.js'
import Signup from './pages/signup/Signup.js'

function App() {

  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
