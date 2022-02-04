//import logo from './logo.svg';
// import './App.css';

<<<<<<< HEAD

import { Login } from './Login';
=======
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './components/LandingPage.css'
import LandingPage from './components/Interface/LandingPage'
import Baby from './components/Interface/Baby'
import NewBorn from './components/Interface/NewBorn'
import Child from './components/Interface/Child'
import styles from './components/Interface/LandingPage.css'
import { useState } from 'react'
>>>>>>> 6efa8aaa1d16515737584a2e5b0504bb2ba7f7c6


function App() {
  //const[sideToggle, setSideToggle] = useState(false)
  return (
 
    <div className="App">
<<<<<<< HEAD
     <Login/>
=======
   <LandingPage />
     
     <BrowserRouter>
        <Routes>
          <Route path="/" element={ LandingPage} />
          <Route path="/newborn" element={NewBorn} />
          <Route path="/baby" element={Baby} />
          <Route path="/child" element={Child} />
        </Routes>

      </BrowserRouter>
      
>>>>>>> 6efa8aaa1d16515737584a2e5b0504bb2ba7f7c6
    </div>
  );
}

export default App;
