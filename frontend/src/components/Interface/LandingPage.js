import "./LandingPage.css";
 import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { BrowserRouter } from "react-router-dom"
import { useRef } from 'react';


export default function LandingPage() {
  let navigate = useNavigate();

  return (
    <div>

      
        <div className="body1">
          <div>
        <img width="80%" className="navbar" src="./toddLaranja.svg" />
        <div />

        <div className="buttons">
          <button className="button-19" onClick={() => navigate(`/Products/NewBorn`)}>New Born</button>
          <button className="button-19" onClick={() => navigate(`/Products/Baby`)}>Baby</button>
          <button className="button-19" onClick={() => navigate(`/Products/Child`)}>Child</button>
        </div>
        <div className="login">
          <h3 onClick={() => navigate(`/Login`)}>Login</h3>
        </div>
        <div className="login">
          <h3 onClick={() => navigate(`/SignUp`)}>SignUp</h3>
        </div>
      </div>

      <div>
        <div className="footer">
          <div className="fim">
            <div className="footerlogo"></div><h2 className="legal">Legal</h2>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Use</a></li>
              <li>About Us</li>
            </ul>
            <div className="footerbtn">
              <a href="mailto:toodlers@toodlers.com">Contact Us</a>
            </div>
            <p>&copy; 2022 Toddlers. All rights reserved.</p>
            <p>A Bytes4Future project. Developed by Ana Rita Dias, Ângela Lopes and Leonardo Dantas.</p>
          </div>

        </div>
      </div> </div></div>
  );
}
