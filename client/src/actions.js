export const requestItemList = () => ({
  type: "ITEM_LIST_REQUEST",
});

export const receiveItemList = (itemList) => ({
  type: "ITEM_LIST_RECEIVE",
  itemList,
});

export const receiveItemListError = (error) => ({
  type: "ITEM_LIST_FAILURE",
  error,
});

export const changeCategoryFilter = (filter) => ({
  type: "CHANGE_FILTER_CATEGORY",
  filter,
});

export const requestProductDetail = () => ({
  type: "REQUEST_PRODUCT_DETAIL",
});

export const receiveProductDetail = (detail) => ({
  type: "RECEIVE_PRODUCT_DETAIL",
  detail,
});
export const receiveProductError = (error) => ({
  type: "RECEIVE_PRODUCT_ERROR",
  error,
});

export const selectProduct = (productID) => ({
  type: "SELECT_PRODUCT",
  productID,
});
export const addQtyToPurchase = () => ({
  type: "ADD_QUANTITY_TO_PURCHASE",
});

export const decreaseQtyToPurchase = () => ({
  type: "DECREASE_QUANTITY_TO_PURCHASE",
});
