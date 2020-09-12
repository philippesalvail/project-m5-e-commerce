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
