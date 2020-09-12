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
        currentProduct: {
          body_location: action.detail.itemDetails.body_location,
          category: action.detail.itemDetails.category,
          name: action.detail.itemDetails.name,
          imageSrc: action.detail.itemDetails.imageSrc,
          numInStock: action.detail.itemDetails.numInStock,
          price: action.detail.itemDetails.price,
        },
        currentCompany: {
          name: action.detail.company.name,
          country: action.detail.company.country,
          url: action.detail.company.url,
        },
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
