import { useEffect, useState } from 'react';
// import './SingUpScreen.css';
import {SingIn} from '../components/SingUp/SingUpActions'
import {useNavigate} from 'react-router-dom'
const SingupScreen = () =>{
  
    // SE ISSO FOR VAZIO DEVOLVE
    const [Errors, setErrors] = useState([]);
    const [CheckSubmit, setCheckSubmit] = useState(0);
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
          navigate("/")
          // aq nem vai chegar pois vai ser um redirect 
          // no backEnd
          setRetornErrors(["Bem VINDO "])
        }
        // TA CORTANDO OK FLW TROPA VOU VER ROUTERS
    
      },[CheckSubmit,Errors])
    
      useEffect(()=>{
      },[RetornErrors])
      
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
    
          <SingIn onSubmit={(data)=>
            {setCheckSubmit(data)}} 
            Errors = {(errors) => (
            setErrors(errors)
          )
            } />
        </div>
      );
} 
export default SingupScreen;