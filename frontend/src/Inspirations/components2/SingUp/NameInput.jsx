import './Form.css';

export const NameInput = ( {campo,setCampo, name, label, errors,type = "text"}) =>{
    //   console.log(name)
    return (
        <div className='input'>
            <label htmlFor={name}>{label}</label>
            {/* Significa q o campo name vai ter o valor colocado no input */}
            <input
                id={name}
                type={type}
                value={campo[name]}
               
                onChange={(e) => setCampo(f => ({
                    ...f,
                    [name]: e.target.value
                }))} />
            {
                // Qualquer erro vai guardar o nome do Campo e seu erro 
                errors && errors[name] !== undefined && (
                    <span className="error">
                        {errors[name]}
                    </span>
                )
            }
        </div>
    )
}