import React, {useState, useEffect} from 'react';
import './SignUp.css'
import { useNavigate } from 'react-router-dom';

// let navigate = useNavigate();
function checkPasswordStrength(password) {
    if (password.length < 8) return 0;
    const regexes = [
        /[a-z]/,
        /[A-Z]/,
        /[0-9]/,
        /[~!@#$%^&*)(+=._-]/
    ]
    console.log(regexes
        .map(re => re.test(password))
        )
    return regexes
    .map(re => re.test(password))
    .reduce((score, t) => t ? score + 1 : score, 0) 
}

function validateEmail(email) {
    const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return EMAIL_REGEX.test(email)
}

//const SingupScreen = () => {

    export default function UserCreation() {
      

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
            if (InfoId === 'confirm') return setConfirm(values.confirm)
    
            if (validateEmail && checkPasswordStrength >= 3) {
                setUser()
            }
        }
    
        const [err, setErr] = useState({})
        const [email, setEmail] = useState('')
        
        const [pass, setPass] = useState('')
        const [confirm , setConfirm] = useState('')
        let navigate = useNavigate();
        const [user, setUser] = useState({email: email, pass:pass})
        console.log(email, pass, confirm, user)
    
        return  (
        <div className="total">
            <div className="navbar">
                <a href="/LandingPage.js" className="img">
                    <img src="/toddlersLogo.svg" width="300px" alt="Toddlers logo" />
                </a>
            </div>

            <div className="centro">

                <p className="title">Sign Up</p>

                <form onSubmit={async e =>  {
            e.preventDefault();

            console.log(user)

            localStorage.setItem('user', 'user')
            const res = await fetch('/api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password: pass, passwordConfirmation: confirm })
            })
            if(res.status===400){
                const json = await res.json()
            }
            if (res.status === 200) {
                navigate("/api/LandingPage")
            } 
        }}>
                    <div className="Name">
                        <label className="SName">Email</label>
                        <input
                            className="nomeInput"
                            label="Please introduce your name"
                            name="name"
                            />
                    </div>
                    <div className="Email">
                        <label className="SEmail">Email</label>
                        <input 
                            type="email"
                            className="emailInput"
                            label="Please enter your email"
                            name="email"
                            onChange={(e) => HandleUserInfo({email:e.target.value, pass:pass, confirm:confirm}, 'email')}/>
                             {err.errMessageMail ? <p className="PassInvalida" >Wrong Password</p> : <p></p>}
                    
                    </div>
                    <div className="Pass">
                        <label className="SPass">Password</label>
                        <input 
                            type="password"
                            className="passInput"
                            label="Please enter your password"
                            name="password"
                            onChange={(e) => HandleUserInfo({email:email, pass: e.target.value, confirm: confirm}, 'password')}/>
                      {err.errMessagePass ? <p className="PassInvalida">PASSWORD INVALIDA</p> : <p></p>}
                  
                       
                    </div>
                    <div className="ConfirmPass">
                        <label className="SPass">Confirm your Password</label>
                        <input 
                            type="password"
                            className="passInput"
                            label="Please renter your password"
                            name="password"
                            onChange={(e) => HandleUserInfo({email: email, pass: pass, confirm: e.target.value}, 'confirm')}/>
                     
        
                    </div>
                    <div className="Code">
                        <label className="SCode">Toodlers Code</label>
                        <input 
                            type="code"
                            className="codeInput"
                            label="Please enter your Toodlers Code"
                            name="code"
                        />
                    </div>
                    <div className="address">
                        <label className="SAddress">Toodlers Code</label>
                        <input //AQUI TEM DE SER NAMEINPUT ???
                            type="address"
                            className="addressInput"
                            label="Please enter your address"
                            name="address"
                        />
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
                            <a href="mailto:toodlers@toodlers.com">Contact Us</a>
                        </div>
                        <p>&copy; 2022 Toddlers. All rights reserved.</p>
                        <p>A Bytes4Future project. Developed by Ana Rita Dias, Ângela Lopes and Leonardo Dantas.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

