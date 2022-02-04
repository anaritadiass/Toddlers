import { useEffect, useState } from "react";
//import { NameInput } from "../SingUp/NameInput";
import './Login.css'



export const Login = ({onSubmit,Errors}) =>{
    // Funcao para Receber dados da DataBase em Tempo Real
    const [campos, setCampos] = useState(
        {email : "",
        password :""
    });
    const [errors, setErrors] = useState("");
    const [ListDb, setListDb] = useState([]);
     // O user, vai receber o token 
    const [token, setToken] = useState("");

    useEffect(() =>{
        getData()
      },[])
    function getData() {
        fetch('/api/SingUp',{method:"GET"})
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
      // Colocar Todos Erros Recebidos em  um só Array
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
            <div className="teste"></div>
        <img src="/toddlersLogo.svg" width="300px" className="img" alt="Toddlers logo"/>
        </div>

     <div className="body">
        
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
            setCampo={setCampos}
        />
        </div>
        <div className="Pass">
         <label className="SPass">Password</label>
        <input //AQUI TEM DE SER NAMEINPUT
        className="passInput"
            label= "Please enter your password"
            name="password"
            campo={campos}
            errors = {errors}
            setCampo={setCampos}
        />
        <p className="forgotPass"><a href="Forgot my password">Forgot my password</a></p>
       </div>
       
           <button className="button-19" type="submit">Submit</button>
        </form>
      </div>

      <div>

      </div>
      </div>
    )
}