import { combineReducers } from "redux";
import { productReducer } from "./reducers/product/product.reducer";

export const rootReducer = combineReducers({
    productList: productReducer
  });


