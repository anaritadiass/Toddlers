//import logo from './logo.svg';
// import './App.css';

//import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import './components/LandingPage.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './components/Interface/LandingPage'
import LandingPage from './components/Interface/LandingPage'
import Baby from './components/Interface/Baby'
import NewBorn from './components/Interface/Categories pages newborn/NewBorn'
import Child from './components/Interface/Child'
import { useState } from 'react'
import SignUp from './components/Interface/SignUp'
import Login from './components/Interface/Login'

function App() {
  return (
    <div className="App">
     <Login/>
   <LandingPage />     
    <BrowserRouter>
        <Routes>
          <Route path="/" element={ LandingPage} />
          <Route path="/newborn" element={NewBorn} />
          <Route path="/baby" element={Baby} />
          <Route path="/child" element={Child} />
          <Route path='/api/signup' element={<SignUp/>} />
          <Route path='/api/login' element={<Login />} />

        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
