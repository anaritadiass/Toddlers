import React from 'react';
import './Checkout.css';
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { addToCart, removeFromCart } from "../redux/actions/cartActions";



export default function Checkout() {

    const cart = useSelector((state) => state.cart);
const { cartItems } = cart;
    
      const getCartSubTotal = () => {
        return cartItems
          .reduce((price, item) => price + item.price * item.qty, 0)
          .toFixed(2);
      };


  return (
      <div className="cartitemm">
    <div className="cartscreen__leftt">
        <div className="cartscreen__info2">
            <header>
                <Link to ="/cart"><button type="button" className="checkout__button" id="aa">Go back</button></Link>
                <img src="images/logo.png" alt="" />
            </header>

            <main>
                <form action="#" method="post">             
                  <fieldset class="signUp">             
                    <h2 className="headerr">Sign up and choose a payment method</h2>                
                    <p>Already have an account with us? <a href="#">Sign in</a>.</p>    

                    <div class="personalInfo">              
                      <p>
                        <label for="name">Full Name</label>
                        <input type="text" size="30" name="name" class="box" id="name" pattern="[A-Za-z' -]+" minlength="2" maxlength="50" required placeholder=" " />
                      </p>              
                      <p>
                        <label for="email">Email Adress</label>
                        <input type="email" name="email" class="box" id="email"  pattern="[A-Za-z0-9._-]+@[a-z]+\.[a-z]{2,4}$" required placeholder=" " />
                      </p>              
                      <p>
                       <label for="password">Choose a Password</label>
                        <input type="password" name="password" class="box" id="password" required pattern="(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" placeholder=" " />
                      </p>              
                    </div>              

                    <div class="choicesWrapper paymentType">                
                      <input type="radio" id="visa" name="payment" value="visa" required /> VISA
                      <label for="visa" ></label><br/><br/>             
                      <input type="radio" id="payPal" name="payment" value="payPal" /> PayPal
                      <label for="payPal" ></label><br/><br/>               
                      <input type="radio" id="amazon" name="payment" value="amazon" /> Amazon
                      <label for="amazon" ></label>             
                    </div>       

                    <div class="choicesWrapper paymentInfo">                
                      <p>
                        <label for="number">Card Number</label>
                        <input type="text" name="cardNumber" class="box" id="number" pattern="[0-9]{16}" required />
                      </p>              
                      <p>
                        <label for="date">Expiry Date</label>
                        <input type="date" name="expiryDate" class="box" id="date" required />
                      </p>              
                      <p>
                        <label for="code">Code</label>
                        <input type="text" name="code" class="box" id="code" pattern="[0-9]{3}" required />
                      </p>              
                    </div>              
                  </fieldset>               

                  <div class="summingWrapper">              
                    <input type="checkbox" name="agreement" value="agree" id="agreement" class="tandc" required />
                    <label for="agreement">I agree to the <a href="#">Terms &amp; Conditions</a></label> 
                    {/* <input type="submit" class="box" name="placeOrder" value="Print a quote" />   */}
                    <br/>   
                    <br/>                         
                    <button class="orderBtn" type="button">Place Order</button>                
                  </div>                
                </form>             
            </main>
        </div>
        <br/>
        <div className="cartscreen__right">
            <div className="cartscreen__info">
                <p>Total cost:</p> 
                <p>${getCartSubTotal()} </p>
            </div>
        </div>
    </div>
    </div>
  )
}