import "./Navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

//

/**
 * @Description : NavBar do Site 
 * 
 * 
 */ 
const Navbar = ({ click }) => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo">
      <Link to="/" className="logo__link">Hard2Find.com</Link>
      </div>

      <ul className="navbar__links">
        <li>
          <Link to="/cart" className="cart__link">
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart <span className="cartlogo__badge">{getCartCount()}</span>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/SingUp" className="signup__link">Sign up</Link>
        </li>
        <li>
          <Link to="/login" className="login__link">Login</Link>
        </li>
      </ul>

      <div className="hamburger__menu" onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
    
  );
};

export default Navbar;