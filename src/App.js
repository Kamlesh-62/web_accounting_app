// all routing import
import React from 'react';
import { Route, Routes, Navigate} from 'react-router-dom';

// style inport here
import './App.scss';

// all component here
import Navbar from './component/NavbarSection';

// all page are import here
import Home from './pages/home/Home.js'
import BalanceSheet from './pages/home/BalanceSheet'
import Login from './pages/login/Login.js'
import Signup from './pages/signup/Signup.js'
import {useAuthContext} from './hooks/useAuthContext'

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
          element={<BalanceSheet />} />
        </Routes>
      </>
      )}
    </React.Fragment>
  );
}

export default App;
