import "./LandingPage.css"
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { BrowserRouter } from "react-router-dom"
import { useRef } from 'react';


export default function LandingPage() {
          //let navigate = useNavigate();
     
    return (
        <div className="navbar">  
        <button className="button-19">New Born</button>
       <button className="button-19">Baby</button>
       <button className="button-19">Child</button>
        <div >
        <img  width="300px" src="/toddlersLogo.svg" />
      </div>
            <button className="button-19">Login</button>
        <div>
        <img width="30px" src="https://cdn-icons-png.flaticon.com/512/126/126510.png"></img>
     </div>
 
        <div className="happykids" >
        <img src="./public/landingPageBody.jpg" />
       
</div> 

 <div>
    
    
 <footer className="footer">
     <div className="footerlogo"></div>
     <p className='contacto'>Contact</p>
 
     <address>
     Visite-nos
     Casa da Juventude da Tapada das Mercês 2725-531
     </address>
 
       <h2 class="legal">Legal</h2>
       <ul>
         <li><a href="#">Privacy Policy</a></li>
         <li><a href="#">Terms of Use</a></li>
        <li>About Us</li>
       </ul>
 
   <a class="footerbtn" href="mailto:example@gmail.com">Email Us</a>
 
   <div class="fim">
     <p>&copy; 2022 Toddlers. All rights reserved.</p>
     <p>A Bytes4Future project</p>
   </div>
 </footer>
     </div>
     </div> 
     );
    }