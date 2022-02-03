import './Backdrop.css';
/**
 * @Description : Botão do burger Menu ser responsivo e voltar a Home   
 * 
 * 
 */ 
const Backdrop = ({show, click}) => {
    return show && <div className="backdrop" onClick={click}></div>
}

export default Backdrop

