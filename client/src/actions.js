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

// CART ACTIONS
export const addCartItem = (cartItem) => ({
  type: "ADD_CART_ITEM",
  cartItem,
});

export const removeCartItem = (id) => ({
  type: "REMOVE_CART_ITEM",
  id,
});

export const updateCartItemQtv = (id, input) => ({
  type: "UPDATE_CART_ITEM_QUANTITY",
  id,
  input,
});

export const purchaseCartItemsRequest = (cartItems) => ({
  type: "PURCHASE_CART_ITEMS_REQUEST",
  cartItems,
});

export const purchaseCartItemsReceive = (cartItems) => ({
  type: "PURCHASE_CART_ITEMS_RECEIVE",
  cartItems,
});

export const purchaseCartItemsError = (cartItems) => ({
  type: "PURCHASE_CART_ITEMS_ERROR",
  cartItems,
});
