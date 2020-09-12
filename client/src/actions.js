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
