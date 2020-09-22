const initialState = {};
export default function CustomerReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TO_PURCHASE_DATABASE": {
      return {
        ...state,
        [action.name]: {
          [action.orderNumber]: action.item,
        },
      };
    }
    default: {
      return state;
    }
  }
}
