import { combineReducers } from "redux";
import { productReducer } from "./reducers/product/product.reducer";
import { productDetailsReducer } from "./reducers/product_details/product_details.reducer";
import { cartReducer } from "./reducers/cart/cart.reducer";
import { userLoginReducer } from "./reducers/user/user.reducer";
import { userRegisterLogin } from "./reducers/user_register/user_register.reducer";

export const rootReducer = combineReducers({
    productList: productReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterLogin
  });


