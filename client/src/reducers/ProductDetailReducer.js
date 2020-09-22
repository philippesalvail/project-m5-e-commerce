const initialState = {
  status: "idle",
  currentProduct: null,
  currentCompany: null,
};

export default function ProductDetailReducer(state = initialState, action) {
  console.log("action ProductDetailReducer: ", action.detail);
  switch (action.type) {
    case "REQUEST_PRODUCT_DETAIL": {
      return {
        ...state,
        status: "loading",
      };
    }
    case "RECEIVE_PRODUCT_DETAIL": {
      return {
        status: "idle",
        currentProduct: action.detail.itemDetails,
        currentCompany: action.detail.company,
        similarItems: action.detail.similarItems,
      };
    }

    case "RECEIVE_PRODUCT_ERROR": {
      return {
        ...state,
        status: action.error,
      };
    }
    default: {
      return state;
    }
  }
}
