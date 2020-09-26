import produce from "immer";

const initialState = {
  status: "loading",
  currentCategory: "fitness",
  itemList: null,
  error: null,
  searchInput: null,
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
        draftState.error = null;
      });

    case "ITEM_LIST_FAILURE":
      console.log(action.error);
      return produce(state, (draftState) => {
        draftState.status = "error";
        draftState.error = action.error;
      });
    case "CHANGE_FILTER_CATEGORY":
      if (action.filter === "reset") {
        return produce(state, (draftState) => {
          draftState.currentCategory = action.filter;
          draftState.status = "idle";
        });
      }
      return produce(state, (draftState) => {
        draftState.currentCategory = action.filter;
        draftState.status = "loading";
        draftState.searchInput =
          action.filter === "search" ? action.searchInput : null;
      });
    case "RECEIVE_ALL_ITEMS":
      return produce(state, (draftState) => {
        draftState.allItems = action.items;
      });
    case "RESET_FILTER_CATEGORY":
      return produce(state, (draftState) => {
        draftState.currentCategory = "";
        draftState.itemList = null;
        draftState.status = "loading";
      });

    default:
      return state;
  }
}

export const getStoreItemArray = (state) => Object.values(state);
