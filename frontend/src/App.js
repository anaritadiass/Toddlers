//import logo from './logo.svg';
// import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './components/Interface/LandingPage'
import LandingPage from './components/Interface/LandingPage'
import Baby from './components/Interface/Baby'
import NewBorn from './components/Interface/Categories pages/NewBorn'
import Child from './components/Interface/Child'
import { useState } from 'react'


function App() {
  //const[sideToggle, setSideToggle] = useState(false)
  return (
 
    <div className="App">
   <LandingPage />     
    <BrowserRouter>
        <Routes>
          <Route path="/" element={ LandingPage} />
          <Route path="/newborn" element={NewBorn} />
          <Route path="/baby" element={Baby} />
          <Route path="/child" element={Child} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
