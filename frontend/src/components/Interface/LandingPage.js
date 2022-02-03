import "./LandingPage.css"
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { BrowserRouter } from "react-router-dom"
import { useRef } from 'react';


export default function LandingPage() {
          //let navigate = useNavigate();
     
    return (
        <div className="navbar">  
        <button className="Menu">New Born</button>
       <button className="Menu">Baby</button>
       <button className="Menu">Child</button>
        <div className="imagem">
        <img  width="120" src="/toddlersLogo.svg" />
      </div>
      <div className="Login">
        <button>Login</button>
        <img width="20px" src="https://cdn-icons-png.flaticon.com/512/126/126510.png"></img>
     
  </div>
  </div>     

     );
    }