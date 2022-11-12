import axios from 'axios'
import { CART_ACTION_TYPES } from './cart.types';
import  createAction  from "../../utils/action";

const addCartItem = (cartItems, productToAdd, qty) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.product === productToAdd.product
)

if (existingCartItem) {
    return cartItems.map((cartItem) => 
      cartItem.product === productToAdd.product
      ? productToAdd : cartItem
    );
}

return [...cartItems, productToAdd];
}

const removeCartItem = (cartItems, cartItemToRemove) => {
    // find the cart item to remove
    const existingCartItem = cartItems.find(
      (cartItem) => cartItem.product === cartItemToRemove.product
    );
  
    // check if quantity is equal to 1, if it is remove that item from the cart
    if (existingCartItem) {
      return cartItems.filter((cartItem) => cartItem.product !== cartItemToRemove.product);
    }
  
  };

  const cart_add = (newCartItems) => createAction(CART_ACTION_TYPES.ADD_PRODUCT_CART, newCartItems);


  export const addItemToCart =  (cartItems, id, qty) => {
      return  async (dispatch, getState) => {                          
   const { data } = await axios.get(`/api/products/${id}`);

   let productToAdd = {
    product: data._id,
    name: data.name,
    image: data.image,
    price: data.price,
    countInStock: data.countInStock,
    qty
   }
    const newCartItems = addCartItem(cartItems, productToAdd);
      
    dispatch(cart_add(newCartItems));

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
  }
  };
  
  export const removeItemFromCart = (cartItems, id) => {
    return async (dispatch, getState) => {
      removed_item = cartItems.filter((cartitem) => cartitem.product === id);

      const newCartItems = removeCartItem(cartItems, removed_item);

      dispatch(createAction(CART_ACTION_TYPES.REMOVE_PRODUCT_CART, newCartItems));

      localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
    }
  };

  // in the async thunk function
  // async (dispatch, getState)
  // getState -> we can get all the reducers values
  // getState().cart.cartItems