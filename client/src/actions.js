// ITEM LIST ACTIONS
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
export const receiveAllItems = (items) => ({
  type: "RECEIVE_ALL_ITEMS",
  items,
});

export const changeCategoryFilter = (filter, searchInput) => ({
  type: "CHANGE_FILTER_CATEGORY",
  filter,
  searchInput,
});
export const resetCategoryFilter = (filter) => ({
  type: "RESET_FILTER_CATEGORY",
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

export const updateCartItemQty = (id, input) => ({
  type: "UPDATE_CART_ITEM_QUANTITY",
  id,
  input,
});

export const clearCart = () => ({
  type: "CLEAR_CART",
});

// PURCHASE ACTIONS

export const purchaseCartItemsRequest = () => ({
  type: "PURCHASE_CART_ITEMS_REQUEST",
});

export const purchaseCartItemsReceive = (status) => ({
  type: "PURCHASE_CART_ITEMS_RECEIVE",
  status,
});

export const purchaseCartItemsError = (error) => ({
  type: "PURCHASE_CART_ITEMS_ERROR",
  error,
});

export const emptyCartError = () => ({
  type: "EMPTY_CART_ERROR",
});

export const clearEmptyCartError = () => ({
  type: "CLEAR_EMPTY_CART_ERROR",
});
