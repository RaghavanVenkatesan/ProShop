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
import { orderCreateReducer } from "./reducers/order/order.reducer";
import { orderDetailsReducer } from "./reducers/order_details/order_details.reducer";
import { orderPayReducer } from "./reducers/order_pay/order_pay.reducer";
import { orderListMyReducer } from "./reducers/order_list/order_list.reducer";
import { orderDeliverReducer } from "./reducers/order_delivered/order_delivered.reducer";
import { orderListReducer } from "./reducers/all_order_list/all_order_list.reducer";
import { userListReducer } from "./reducers/user_lists/user_list.reducer";
import { userDeleteReducer } from "./reducers/user_delete/user_delete.reducer";
import { userUpdateReducer } from "./reducers/user_detail_update/user_detail_update.reducer";
import { productCreateReducer } from "./reducers/product_create/product_create.reducer";
import { productUpdateReducer } from "./reducers/product_update/product_update.reducer";
import { productDeleteReducer } from "./reducers/product_delete/product_delete.reducer";


export const rootReducer = combineReducers({
    productList: productReducer,
    productDetails: productDetailsReducer,
    productDelete: productDeleteReducer,
    productCreate: productCreateReducer,
    productUpdate: productUpdateReducer,
    cart: cartReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterLogin,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    userList: userListReducer,
    userDelete: userDeleteReducer,
    userUpdate: userUpdateReducer,
    shippingdetails: ShippingReducer,
    paymentmethod: PaymentReducer,
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderPay: orderPayReducer,
    orderListMy: orderListMyReducer,
    orderList: orderListReducer,
    orderDeliver: orderDeliverReducer,
  });


