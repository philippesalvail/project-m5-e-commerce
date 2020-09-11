import produce from "immer";

const initialState = {};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return state;

    case "REMOVE_ITEM":
      return state;

    case "UPDATE_QUANTITY":
      return state;

    default:
      return state;
  }
}

export const getStoreItemArray = (state) => Object.values(state);
