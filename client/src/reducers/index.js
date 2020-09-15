import { combineReducers } from "redux";

import items from "./itemsReducer";
import cart from "./cartReducer";
import product from "./ProductDetailReducer";
import purchase from "./purchaseReducer";

export default combineReducers({ items, cart, product, purchase });
