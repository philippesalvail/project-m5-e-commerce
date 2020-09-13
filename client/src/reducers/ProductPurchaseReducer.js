const initialState = {
  productID: null,
  quantity: 0,
};

export default function ProductPurchaseReducer(state = initialState, action) {
  switch (action.type) {
    case "SELECT_PRODUCT": {
      return {
        productID: action.productID,
        quantity: 1,
      };
    }

    case "ADD_QUANTITY_TO_PURCHASE": {
      return {
        ...state,
        quantity: parseInt((state.quantity += 1)),
      };
    }
    case "DECREASE_QUANTITY_TO_PURCHASE": {
      return {
        ...state,
        quantity: parseInt((state.quantity -= 1)),
      };
    }
    case "CANCEL_PURCHASE": {
      return {
        ...initialState,
      };
    }

    default: {
      return state;
    }
  }
}
