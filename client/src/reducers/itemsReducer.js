import produce from "immer";

const initialState = {
  status: "loading",
  itemList: null,
  error: null,
};

export default function itemsReducer(state = initialState, action) {
  //console.log(action);
  switch (action.type) {
    case "ITEM_LIST_REQUEST":
      return produce(state, (draftState) => {
        draftState.status = "loading";
      });

    case "ITEM_LIST_RECEIVE":
      return produce(state, (draftState) => {
        draftState.status = "idle";
        draftState.itemList = action.itemList;
      });

    case "ITEM_LIST_FAILURE":
      return produce(state, (draftState) => {
        draftState.status = "error";
        draftState.error = action.error;
      });

    default:
      return state;
  }
}

export const getStoreItemArray = (state) => Object.values(state);
