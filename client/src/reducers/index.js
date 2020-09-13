import { combineReducers } from "redux";

import items from "./itemsReducer";
import cart from "./cartReducer";
import product from "./ProductDetailReducer";
import productPurchase from "./ProductPurchaseReducer";

export default combineReducers({ items, cart, product, productPurchase });
