import { useEffect, useState } from "react";
// Chama essa funcao do SingUp
import { NameInput } from "../SingUp/NameInput";
import './LoginAction.css'

export const Login = ({onSubmit,Errors}) =>{
    // Funcao para Receber dados da DataBase em Tempo Real
    const [campos, setCampos] = useState(
        {email : "",
        password :""
    });
    const [errors, setErrors] = useState("");
    const [ListDb, setListDb] = useState([]);
     // Se existir um user, vai receber o token 
    const [token, setToken] = useState("");

    useEffect(() =>{
        getData()
      },[])
    function getData() {
        fetch('/api/SingUp',{method:"GET"})
        .then(response => response.json())
        .then(data => setListDb(data))
      }
        
        
        // Verificar e Guardar Errors
        useEffect(()=>{
            let Errors = undefined
            // Verica em tds os users se algum tem essa dados
            const conta = ListDb.find((e)=> e.email === campos.email && e.password === campos.password)
            
            if(conta) 
            { 
               setToken(conta._id);  
            }else {
                Errors = "Email ou Password não coincidem !"
            }
            setErrors(err =>({
                error:Errors
            }))
            
        },[campos.email,campos.password,token])
        
    // Recebe os Campos do Form  
    
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

    return (
      <div className="container">
        <div className='frame'>
          {/* Vai ser Links para SingUp e Login */}
        <div class="nav">
          <ul class="links">
              <li
              class="signin-active"><a class="btn">Existing User</a></li>
              <li
              class="signin-inactive"><a class="btn">Existing User</a></li>
          </ul>
          </div>

         <form className="formsingup" class="formsingup" onSubmit={handleSubmit}> 
          {/* Campo Email*/}
        <NameInput 
            label= "Please enter your email"
            name="email"
            campo={campos}
            errors = {errors}
            setCampo={setCampos}
        />
          {/* Campo Password*/}
        <NameInput 
            label= "Please enter your password"
            name="password"
            campo={campos}
            errors = {errors}
            setCampo={setCampos}
        />
          {/* Para Submeter */}
           <button className="submit" type="submit">Login</button>
        </form>
        </div>
      </div>
    )
}