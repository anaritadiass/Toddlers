//import logo from './logo.svg';
// import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
<<<<<<< HEAD
import LandingPage from './components/LandingPage'
import './components/LandingPage.css'
=======
import LandingPage from './components/Interface/LandingPage'
import Baby from './components/Interface/Baby'
import NewBorn from './components/Interface/NewBorn'
import Child from './components/Interface/Child'
import styles from './components/Interface/LandingPage.css'
>>>>>>> 5d0cd25e8cb30da6fd65d80f731dd173e0003e3c
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
