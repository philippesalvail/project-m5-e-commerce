import produce from "immer";

const initialState = {
  status: "idle",
  error: null,
};

export default function orderReducer(state = initialState, action) {
  switch (action.type) {
    case "ORDER_REQUEST":
      return produce(state, (draftState) => {
        draftState.status = "loading";
      });

    case "ORDER_RECEIVE":
      return produce(state, (draftState) => {
        draftState.status = action.status;
        draftState.status = "idle";
      });

    case "ORDER_ERROR":
      return produce(state, (draftState) => {
        draftState.status = "error";
        draftState.error = action.error;
      });

    default:
      return state;
  }
}
