//import logo from './logo.svg';
// import './App.css';


import { Login } from './Login';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import './components/LandingPage.css'
import LandingPage from './components/Interface/LandingPage'
import Baby from './components/Interface/Baby'
import NewBorn from './components/Interface/NewBorn'
import Child from './components/Interface/Child'
import styles from './components/Interface/LandingPage.css'
import { useState } from 'react'
import SignUp from './components/Interface/SignUp'




function App() {
  return (
    <div className="App">
     <Login/>
    </div>
  );
}

export default App;
