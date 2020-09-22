const initialState = {
  status: "idle",
  currentProduct: null,
  currentCompany: null,
};

export default function ProductDetailReducer(state = initialState, action) {
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
        currentCompany: {
          name: action.detail.company.name,
          country: action.detail.company.country,
          url: action.detail.company.url,
        },
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
