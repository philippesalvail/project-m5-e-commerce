import produce from "immer";

const initialState = {};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_CART_ITEM":
      return !state[action.cartItem._id]
        ? produce(state, (draftState) => {
            draftState[action.cartItem._id] = action.cartItem;
            draftState[action.cartItem._id].quantity = action.cartItem.quantity;
          })
        : produce(state, (draftState) => {
            draftState[action.cartItem._id].quantity +=
              action.cartItem.quantity;
          });

    case "REMOVE_CART_ITEM":
      return produce(state, (draftState) => {
        delete draftState[action.id];
      });

    case "UPDATE_CART_ITEM_QUANTITY":
      return produce(state, (draftState) => {
        draftState[action.id].quantity = Number(action.input);
      });

    case "CLEAR_CART":
      return produce(state, (draftState) => {
        draftState = {};
      });

    default:
      return state;
  }
}

export const getCartItemArray = (state) => Object.values(state.cart);
