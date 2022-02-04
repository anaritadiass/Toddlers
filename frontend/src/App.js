//import logo from './logo.svg';
// import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './components/Interface/LandingPage'
import LandingPage from './components/Interface/LandingPage'
import Baby from './components/Interface/Categories pages baby/BabyProducts'
import Child from './components/Interface/Categories pages child/ChildProducts'
import  NewBorn from './components/Interface/Categories pages newborn/NewBornProducts'
import { useState } from 'react'



function App() {
  //const[sideToggle, setSideToggle] = useState(false)
  return (
 
    <div className="App">
   <LandingPage />     
    <BrowserRouter>
        <Routes>
          <Route path="/" element={ LandingPage} />
          <Route path="/Products/NewBorn" element={ NewBorn } />
          <Route path="/Products/Baby" element={Baby} />
          <Route path="/Products/Child" element={Child} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
