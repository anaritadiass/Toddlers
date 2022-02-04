
import * as actionTypes from "../constants/cartConstants";
import axios from "axios";

export const addToCart = (id) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/product/${id}`); // /api/products

  dispatch({
    type: actionTypes.ADD_TO_CART,
    payload: {
      product: data._id,
      name: data.name,
      imgUrl: data.imgUrl,
      size: data.size,
    },
  });

  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: actionTypes.REMOVE_FROM_CART,
    payload: id,
  });

  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};