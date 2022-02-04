import React, {useState, useEffect} from 'react';
//import { NameInput } from "../SingUp/NameInput";
import './Login.css'



// export const Login = ({onSubmit,Errors}) =>{
//     // Funcao para Receber dados da DataBase em Tempo Real
//     const [campos, setCampos] = useState(
//         {email : "",
//         password :""
//     });
//     const [errors, setErrors] = useState("");
//     const [ListDb, setListDb] = useState([]);
//      // User recebe token 
//     const [token, setToken] = useState("");

//     useEffect(() =>{
//         getData()
//       },[])
//     function getData() {
//         fetch('/api/signup',{method:"GET"})
//         .then(response => response.json())
//         .then(data => setListDb(data))
//       }
        
//         useEffect(()=>{
//             let Errors = undefined
//             const conta = ListDb.find((e)=> e.email === campos.email && e.password === campos.password)
            
//             if(conta) 
//             { 
//                setToken(conta._id);  
//             }else {
//                 Errors = "Email ou Password não coincidem!"
//             }
//             setErrors(err =>({
//                 error:Errors
//             }))
            
//         },[campos.email,campos.password,token])
    
//     const handleSubmit = (e) =>{
      
//       e.preventDefault();
//       const existingErrors = Object.keys(errors)
//           .map(key => errors[key])
//           .filter(v => v !== undefined);
//           if (existingErrors.length === 0) {
//         onSubmit(1)
//           }else {
//               onSubmit(2)
//               Errors(existingErrors)
//           }
//     }

export default function UserLogin(values, InfoId) {
  const [err, setErr] = useState({})
  const [email, setEmail] = useState('')
  // const [user, setUser] = useState('')
  const [pass, setPass] = useState('')
  let navigate = useNavigate();

  function HandleErr(values) {
      setErr( e => {
          let erros = {}
          if (!validateEmail(values.email)) {
              erros.errMessageMail = 'O email inserido não é válido.'
              console.log('erro em mail')
          }

          if(checkPasswordStrength(values.pass) < 3) {
              erros.errMessagePass = 'A password inserida não é válida.'
              console.log('erro em pass')
          }

          if (pass !== values.confirm) {
              erros.errMessageConfirm = 'As passwords não coincidem.'
              console.log('erro em confirm')
          }

          return erros;

      })
      
  }

  function HandleUserInfo(values, InfoId) {
      HandleErr(values)
      if (InfoId === 'email') return setEmail(values.email)
      if (InfoId === 'password') return setPass(values.pass)
  }


    return(
        <div className="total">
        <div className="navbar">
        <a href="/LandingPage.js" className="img">
        <img  src="/toddlersLogo.svg"  width="300px"  alt="Toddlers logo"/>
        </a>
        </div> 

        <div className="centro"> 
        
         <p className="title">Login</p>
    
         <form onSubmit={async e =>{
                  e.preventDefault();
                  //console.log('trying to log in')
                  const res = await fetch('/api/login', {
                      method: 'POST',
                      headers:{
                          'Content-Type': 'application/json'
                      },
                      body: JSON.stringify({ email, password:pass})
                  })
          
                  if(res.status===400){
                      const json = await res.json()
                
                  }
                  if(res.status===200){
                      navigate('/api/LandingPage')
                  }
              }}> 
         <div className="Email">
         <label className="SEmail">Email</label>
            <input //AQUI TEM DE SER NAMEINPUT
            type="email"
        className="emailInput"
            label= "Please enter your email"
            name="email"
            onChange={(e) => HandleUserInfo({email:e.target.value, pass: pass}, 'email')}
        />

        </div>
        <div className="Pass">
         <label className="SPass">Password</label>
        <input //AQUI TEM DE SER NAMEINPUT
        type="password"
        className="passInput"
            label= "Please enter your password"
            name="password"
            onChange={(e) => HandleUserInfo({email:email, pass: e.target.value}, 'password')}
        />
        <p className="forgotPass"><a href="Forgot my password">Forgot my password</a></p>
       </div>
            <div className="btn">
           <button className="button-19" type="submit">Submit</button>
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