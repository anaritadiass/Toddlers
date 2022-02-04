import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
//import { NameInput } from "../SingUp/NameInput";
import './Login.css'



export const Login = ({onSubmit,Errors}) =>{
    // Funcao para Receber dados da DataBase em Tempo Real
    let navigate= useNavigate()
    const [campos, setCampos] = useState(
        {email : "",
        password :""
    });
    const [errors, setErrors] = useState("");
    const [ListDb, setListDb] = useState([]);
     // User recebe token 
    const [token, setToken] = useState("");

    useEffect(() =>{
        getData()
      },[])
    function getData() {
        fetch('/api/SignUp',{method:"GET"})
        .then(response => response.json())
        .then(data => setListDb(data))
      }
        
        useEffect(()=>{
            let Errors = undefined
            const conta = ListDb.find((e)=> e.email === campos.email && e.password === campos.password)
            
            if(conta) 
            { 
               setToken(conta._id);  
            }else {
                Errors = "Email ou Password não coincidem!"
            }
            setErrors(err =>({
                error:Errors
            }))
            
        },[campos.email,campos.password,token])
    
    const handleSubmit = (e) =>{
      
      e.preventDefault();
      const existingErrors = Object.keys(errors)
          .map(key => errors[key])
          .filter(v => v !== undefined);
          if (existingErrors.length === 0) {
        onSubmit(1)
          }else {
              onSubmit(2)
              Errors(existingErrors)
          }
    }

    return(
        <div className="total">
        <div className="navbar">
        <img onClick={() => navigate(`/`)} className="img">
        <img  src="/toddlersLogo.svg"  width="300px"  alt="Toddlers logo"/>
        </a>
        </div> 

        <div className="centro">
        
         <p className="title">Login</p>
    
         <form onSubmit={handleSubmit}> 
         <div className="Email">
         <label className="SEmail">Email</label>
            <input //AQUI TEM DE SER NAMEINPUT
        className="emailInput"
            label= "Please enter your email"
            name="email"
            campo={campos}
            errors = {errors}
            onChange={setCampos}
        />
        </div>
        <div className="Pass">
         <label className="SPass">Password</label>
        <input //AQUI TEM DE SER NAMEINPUT
        type="password"
        className="passInput"
            label= "Please enter your password"
            name="password"
            campo={campos}
            errors = {errors}
            onChange={e => e.target.value = setCampos}
        />
        <p className="forgotPass"><a href="Forgot my password">Forgot my password</a></p>
       </div>
            <div className="btn">
           <button className="button-19" type="submit" onClick={() => navigate(`/Products/Baby`)}>Submit</button>
           </div>
        </form>
      </div>
<div>
<div className="footer">
 <div className="fim">  
   <div className="footerlogo"></div>
  <h2 class="legal">Legal</h2>
    <ul>
      <li><a href="#">Privacy Policy</a></li>
      <li><a href="#">Terms of Use</a></li>
     <li>About Us</li>
    </ul>  
<div className="footerbtn">
<a  href="mailto:toodlers@toodlers.com">Contact Us</a>
</div>
  <p>&copy; 2022 Toddlers. All rights reserved.</p>
  <p>A Bytes4Future project. Developed by Ana Rita Dias, Ângela Lopes and Leonardo Dantas.</p>
</div>
</div>
  </div>
  </div>
    )
}