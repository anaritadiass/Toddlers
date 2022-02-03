// *** CSS ***
 import './SingUpActions.css';
//  *** Imports Form ***
import {NameInput} from './NameInput';
import {PasswordInput} from './PasswordInput';
import { CheckboxInput } from './CheckboxInput';
import { useEffect, useState } from "react";

// *** Import Css ***
import './SingUpActions.css'
// Colocar Functin Get se precisar 
function getData() {
  fetch('/api/SingUp',{method:"GET"})
  .then(response => response.json())
  .then(data => console.log(data))
}


function useSignupForm() {
  /** 
   *    *** UseState ***
  */
  function getData() {
    fetch('/api/SingUp',{method:"GET"})
    .then(response => response.json())
    .then(data => setListDb(data))
  }
    const [ListDb, setListDb] = useState([]);
   console.log(ListDb);
        // Guarda dados do Form 
    const [campo, setCampo] = useState({
        name: '',
        email:'',
        password: '',
        passwordConfirmation: '',
        acceptsTerms: false,
    })
  // vai guardar os erros
    const [errors, setErrors] = useState({})
  /** 
   *    *** UseEffect ***
  */
  
       useEffect(() => {
         // Guardar os Erros de Email 
        let emailError = undefined
   // Verificar Email 
          
        if (campo.email.length === 0) {
          emailError = "Por favor introduza o seu endereço de email."
        } else if (!validateEmail(campo.email)) {
          emailError = "Por favor introduza um endereço de email válido."
        }else if(ListDb.some((e) => e.email === campo.email)){
          emailError = "Email already in use , please choose another one !"
        }
  
        setErrors(err => ({
          ...err,
          email: emailError
        }))
      }, [campo.email])
      
      useEffect(() =>{
        getData()
      },[])
    
      useEffect(() => {
          // Validação da Password
          const passwordStrength = checkPasswordStrength(campo.password);
  
          let passwordError = undefined
          if (campo.password.length === 0) {
              passwordError = "Please enter your password"
          } else if (passwordStrength === 0) {
              passwordError = "A sua password deve ter no mínimo 8 caracteres."
          } else if (passwordStrength < 4) {
              passwordError = "A sua password deve ter pelo menos um número, uma mínuscula, uma maiúscula e um símbolo."
          }
  
          let passwordConfirmationError = undefined
          if (campo.passwordConfirmation.length === 0) {
              passwordConfirmationError = "Please enter your password again"
          } else if (campo.password !== campo.passwordConfirmation) {
              passwordConfirmationError = "Passwords do not match. Please try again"
          }
        //  Validação da Confirmação da Password
  
         setErrors(err => ({
              ...err,
              password: passwordError,
              passwordConfirmation: passwordConfirmationError
          }))
  
      }, [campo.password, campo.passwordConfirmation])
  
    useEffect(() => {
        // Validação da aceitação dos Termos
        let acceptsTermsError = undefined
        if (!campo.acceptsTerms) {
            acceptsTermsError = "You must accept the terms and conditions to create an account"
        }
  
        setErrors(err => ({
            ...err,
            acceptsTerms: acceptsTermsError
        }))
    }, [campo.acceptsTerms])
  
    return [campo, setCampo, errors]
  
  }
  /** 
   *    *** Funções de  Verificação ***
   */
  function checkPasswordStrength(password) {
    if (password.length < 8) return 0;
    const regexes = [
        /[a-z]/,
        /[A-Z]/,
        /[0-9]/,
        /[~!@#$%^&*)(+=._-]/
    ]
    return regexes
        .map(re => re.test(password))
        .reduce((score, t) => t ? score + 1 : score, 0)
  }
   function validateEmail(email) {
   
    const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return EMAIL_REGEX.test(email)
  }
  /** 
   *    *** Form ***
   */
   export const SingIn = ({onSubmit,Errors}) =>{
  
    const [HaveErrors, setHaveErrors] = useState("");
  
    const [campo, setCampo, errors] = useSignupForm()
    // vai receber os Errors e enviar para o App.js
  
    const handleSubmit = (e) =>{
      
      // Não precisar dx os campos vazios pois vai ter um redirect
      e.preventDefault();
      // Colocar Todos Erros Recebidos em  um só Array
      const existingErrors = Object.keys(errors)
          .map(key => errors[key])
          .filter(v => v !== undefined);
         console.log(existingErrors);
          
   
      if (existingErrors.length === 0) {
        // SE NAO TIVER ERROS VAI PRA APP.JS VAZIO
        setHaveErrors(1)
        onSubmit(1)
        console.log(campo);
          fetch('/api/SingUp/success',{method:"POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(campo)
          })
          .then(response => response.json())
          .then(data =>getData())
         
      // Criar um campo para receber estes erros
      } else {
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

         <form class="formsingup" onSubmit={handleSubmit}> 
        
          {/* Campo Name*/}
        <NameInput
          label="Please enter your full name"
          name="name"
          campo={campo}
          errors={errors}
          setCampo={setCampo} />
  
          {/* Campo Email*/}
        <NameInput
          label="Please enter your email"
          name="email"
          campo={campo}
          errors={errors}
          setCampo={setCampo} />
                
          {/* Campo Password*/}
        <PasswordInput
          label="Please enter your password"
          name="password"
          showStrength
          campo={campo}
          errors={errors}
          setCampo={setCampo}
          checkPasswordStrength = 
          {checkPasswordStrength}
           />
  
          {/* Verifica Password */}
        <PasswordInput
          label="Please check your password"
          name="passwordConfirmation"
          campo={campo}
          errors={errors}
          setCampo={setCampo}
          checkPasswordStrength = 
          {checkPasswordStrength}
           />
  
          {/* Checkbox =>Funciona*/}
        <CheckboxInput
          label="I agree to the terms of service"
          name="acceptsTerms"
          campo={campo}
          errors={errors}
          setCampo={setCampo} />
  
          {/* Para Submeter */}
  
           <button type="submit">Submit</button>
        </form>
        </div>
      </div>
    )
  }
  