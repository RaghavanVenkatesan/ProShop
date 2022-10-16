import { combineReducers } from "redux";
import { productReducer } from "./reducers/product/product.reducer";
import { productDetailsReducer } from "./reducers/product_details/product_details.reducer";

export const rootReducer = combineReducers({
    productList: productReducer,
    productDetails: productDetailsReducer
  });


