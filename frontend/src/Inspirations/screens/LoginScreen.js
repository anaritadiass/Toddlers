import { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom'
import {Login} from '../components/Login/LoginAction';const LoginScreen = ()=>{

    // Mostra os erros Acima 
    const [Errors, setErrors] = useState([]);
    // Verifica oque recebe e faz redirect 
    const [CheckSubmit, setCheckSubmit] = useState(0);
  // Controla oque vai mostrar
    const [RetornErrors, setRetornErrors] = useState([]);
    const navigate = useNavigate()
   
    useEffect(() =>{
        
        if(CheckSubmit === 0){
          setRetornErrors(["Introduzir Dados"])
        }
        else if (CheckSubmit === 2){
          setRetornErrors(Errors)
        }
        else if (CheckSubmit === 1){
          // Se não receber-mos erros , fazemos um redirect para o HomePagi 
          navigate("/")
        }
        // TA CORTANDO OK FLW TROPA VOU VER ROUTERS
      },[CheckSubmit,Errors])
      
    const ListRetornErrors = ({RetornErrors}) => {
    // Está dando Warning no console (Verificar)
    return (
        <div>
            <ul>
            {/* MSM SE ALTERAR DADOS ELE NAO MUDA */}
            {RetornErrors.map((e,i) =>(
                <li key={i}>{e}</li>
            ))}
            </ul>
        </div>
    )
    }

    return (
        <div className="App">
            <ListRetornErrors RetornErrors={RetornErrors} />
    
    <Login onSubmit={(data)=>
      {setCheckSubmit(data)}} 
      Errors = {(errors) => (
      setErrors(errors) 
    ) 
      } />
        </div>
    )
}
export default LoginScreen;