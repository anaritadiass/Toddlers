//import logo from './logo.svg';
// import './App.css';


import { Login } from './Login';

//import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import './components/LandingPage.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './components/Interface/LandingPage'
import LandingPage from './components/Interface/LandingPage'
import Baby from './components/Interface/Categories/pages/baby/BabyProducts'
import Child from './components/Interface/Categories/pages/child/ChildProducts'
import  NewBorn from './components/Interface/Categories/pages/newborn/NewBornProducts'
import { useState } from 'react'
import SignUp from './components/Interface/SignUp'



function App() {
  return (
    <div className="App">
     <Login/>
   <LandingPage />     
    <BrowserRouter>
        <Routes>
          <Route path="/" element={ <LandingPage/>} />
          <Route path="/Products/NewBorn" element={ <NewBorn/> } />
          <Route path="/Products/Baby" element={ <Baby /> } />
          <Route path="/Products/Child" element={ <Child /> } />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
