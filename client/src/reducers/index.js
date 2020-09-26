import { combineReducers } from "redux";

import items from "./itemsReducer";
import cart from "./cartReducer";
import product from "./ProductDetailReducer";
import purchase from "./purchaseReducer";
import order from "./orderReducer";

export default combineReducers({ items, cart, product, purchase, order });
