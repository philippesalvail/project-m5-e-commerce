import produce from "immer";

const initialState = {};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_CART_ITEM":
      return !state[action.cartItem._id]
        ? produce(state, (draftState) => {
            draftState[action.cartItem._id] = action.cartItem;
            draftState[action.cartItem._id].quantity = 1;
          })
        : produce(state, (draftState) => {
            draftState[action.cartItem._id].quantity++;
          });

    case "REMOVE_CART_ITEM":
      return produce(state, (draftState) => {
        delete draftState[action.id];
      });

    case "UPDATE_CART_ITEM_QUANTITY":
      return produce(state, (draftState) => {
        draftState[action.id].quantity = Number(action.input);
      });

    case "PURCHASE_CART_ITEMS_REQUEST":
      return state;

    case "PURCHASE_CART_ITEMS_RECEIVE":
      return state;

    case "PURCHASE_CART_ITEMS_ERROR":
      return state;

    default:
      return state;
  }
}

export const getCartItemArray = (state) => Object.values(state.cart);
