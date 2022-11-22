import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
// import { composeWithDevTools } from '@reduxjs/toolkit/dist/devtoolsExtension';

import { rootReducer } from './root-reducer';

const cartItemsFromStorage = localStorage.getItem('cartItems') ?
JSON.parse(localStorage.getItem('cartItems')) : []

const userInfoFromStorage = localStorage.getItem('userInfo') ? 
JSON.parse(localStorage.getItem('userInfo')) : null

const shippingAddressFromStorage = localStorage.getItem('shippingAddress')
  ? JSON.parse(localStorage.getItem('shippingAddress'))
  : {}

const initialState = {
    cart: { cartItems: cartItemsFromStorage },
    userLogin: { userInfo: userInfoFromStorage},
    shippingdetails: { shippingAddress: shippingAddressFromStorage}
}

const middlewares = [process.env.NODE_ENV === "development" && logger, thunk].filter(Boolean);

const store = configureStore({
    reducer: rootReducer,
    middleware: middlewares,
    devTools: process.env.NODE_ENV !== 'production',
    preloadedState: initialState
})

export default store;