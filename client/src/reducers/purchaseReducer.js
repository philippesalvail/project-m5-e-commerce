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
        draftState.status = "idle";
      });

    case "PURCHASE_CART_ITEMS_ERROR":
      return produce(state, (draftState) => {
        draftState.status = "error";
        draftState.error = action.error;
      });

    default:
      return state;
  }
}