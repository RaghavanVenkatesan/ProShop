import { combineReducers } from "redux";
import { productReducer } from "./reducers/product/product.reducer";
import { productDetailsReducer } from "./reducers/product_details/product_details.reducer";
import { cartReducer } from "./reducers/cart/cart.reducer";
import { userLoginReducer } from "./reducers/user/user.reducer";
import { userRegisterLogin } from "./reducers/user_register/user_register.reducer";
import { userDetailsReducer } from "./reducers/user_details/user_details.reducer";
import { userUpdateProfileReducer } from "./reducers/user_profile/user_profile.reducer";
import { ShippingReducer } from "./reducers/shipping/shipping.reducer";
import { PaymentReducer } from "./reducers/payment/payment.reducer";

export const rootReducer = combineReducers({
    productList: productReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterLogin,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    shippingdetails: ShippingReducer,
    paymentmethod: PaymentReducer
  });


