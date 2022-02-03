export const CheckboxInput = ({ campo, setCampo, name, label, errors }) =>{
    return(
        <div>
             <input
                id={name}
                type="checkbox"
                 checked={campo[name]}
                 onChange={(e) => setCampo(f => ({
                     ...f,
                     [name]: e.target.checked
                 }))} 
                /> 
                  <label htmlFor={name}>{label}</label>
                  {
                errors && errors[name] !== undefined && (
                    <span className="error">
                        {errors[name]}
                    </span>
                )
            } 
        </div>
    )
}