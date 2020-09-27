import produce from "immer";

const initialState = {
  status: "idle",
  error: null,
};

export default function purchaseReducer(state = initialState, action) {
  switch (action.type) {
    case "PURCHASE_CART_ITEMS_REQUEST":
      return produce(state, (draftState) => {
        draftState.status = "loading";
      });

    case "PURCHASE_CART_ITEMS_RECEIVE":
      return produce(state, (draftState) => {
        draftState.status = action.status;
        draftState.status = "idle";
      });

    case "PURCHASE_CART_ITEMS_ERROR":
      return produce(state, (draftState) => {
        draftState.status = "error";
        draftState.error = action.error;
      });

    case "EMPTY_CART_ERROR":
      return produce(state, (draftState) => {
        draftState.status = "error";
        draftState.error = "Your cart is empty!";
      });

    case "CLEAR_ERROR":
      return produce(state, (draftState) => {
        draftState.status = "idle";
        draftState.error = null;
      });

    default:
      return state;
  }
}
