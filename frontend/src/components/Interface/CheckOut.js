// import logo from './logo.svg';
//import './assets/css/ui.modules.css';
//import './assets/css/all.min.css';
//import './assets/css/bootstrap.css';
//import './assets/css/responsive.css';
//import './assets/css/ui.modules.css';
import './LandingPage.css'
import { useNavigate } from 'react-router-dom'

export default function CheckOut(){
    return(
        <div>
            <h1>
                Check-out
            </h1>
            <h3>
                Choose your shipping method: 
                  <ul>
                      <li>Grab at Toddler's Warehose with your QR CODE </li>
                      <li>Devilery to your address </li>
                  </ul>
            </h3>

        </div>
    )
}