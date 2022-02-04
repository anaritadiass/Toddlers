//import "./Child.css";
import './assets/css';
import { Link } from "react-router-dom";

/**
 * @Description : Formato dos produtos na LandingPage   
 * 
 * 
 */ 
const Child = ({ imgUrl, description, price, name, productId }) => {
  return (
    <div className="product">
      <img src={imgUrl} alt={name} />

      <div className="product__info">
        <p className="info__name">{name}</p>

        <p className="info__description">{description.substring(0, 100)}...</p>

        <p className="info__price">${price}</p>

        <Link to={`/product/${productId}`} className="info__button">
          View
        </Link>
      </div>
    </div>
  );
};

export default Child;