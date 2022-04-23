// all routing import
import React from 'react';
import { Route, Routes, Navigate} from 'react-router-dom';

// style inport here
import './App.scss';

// all component here
import Navbar from './component/NavbarSection';
import {useAuthContext} from './hooks/useAuthContext';

// all page are import here
import Home from './pages/home/Home.js'
import Report from './pages/report/Report.js'
import Login from './pages/login/Login.js'
import Signup from './pages/signup/Signup.js';
import Footer from "./footer/Footer.js"

function App() {
  const { authIsReady, user} = useAuthContext();

  return (
    <React.Fragment>
      {authIsReady && (
      <>
        <Navbar />
        <Routes>
          <Route path="/" 
          element={ user ? <Home /> : < Navigate to="/login" />} />
          <Route path="/login" 
          element={ user ? <Navigate to="/" /> : <Login />} />
          <Route path="/signup" 
          element={ user ? <Navigate to="/" /> : <Signup />} />
          <Route path="/report" 
              element={user ? <Report /> : <Login /> } />
        </Routes>
      </>
      )}
      <Footer />
    </React.Fragment>
  );
}

export default App;
