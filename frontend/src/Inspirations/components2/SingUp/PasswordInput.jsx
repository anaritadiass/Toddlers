import { useState } from "react"
import { NameInput } from "./NameInput"
import './Form.css'


export const PasswordInput = (props) => {
    // Vai ser o botao de ficar visivel ou n
    const [visible, setVisible] = useState(false);

    return (
        <div>
            <NameInput {...props}  
            // Se visible for true devolve "text", se n "password"
        type={visible ? "text" : "password"}/>
              {props.showStrength && (
                <PasswordStrengthIndicator
                      value={props.checkPasswordStrength(props.campo[props.name])} />
                )}  
                 <button type="button" onClick={() => setVisible(v => !v)}>
                {visible ? 'Hide' : 'Show'}
            </button>
        </div>
    )
}
function PasswordStrengthIndicator({value}) {
        
    return (
        <div className="passwordIndicator">
            <div className={["bar"]
                    .concat([strengthToClassName(value)])
                    .join(' ')} />
        </div>
    )
}
function strengthToClassName(strength) {
    const colors = [
        "zero",
        "one",
        "two",
        "three",
        "four"
    ]
    return colors[strength]
}
