import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { COLORS } from "../../constants";
import { useHistory } from "react-router-dom";

import {
  purchaseCartItemsRequest,
  purchaseCartItemsReceive,
  purchaseCartItemsError,
  clearCart,
} from "../../actions";

const calculateTotalPrice = (arr) => {
  let totalPrice = 0;

  if (arr.length > 0) {
    arr.forEach((item) => {
      const itemPrice = Number(item.price.replace(/[^0-9.-]+/g, "")) * 100;

      if (item.quantity) {
        totalPrice += itemPrice * item.quantity;
      } else {
        totalPrice += itemPrice;
      }
    });
  }
  return totalPrice.toFixed(2) / 100;
};

const PurchaseButton = ({ cartItems }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handlePurchase = (event) => {
    event.preventDefault();

    dispatch(purchaseCartItemsRequest(calculateTotalPrice(cartItems)));

    let arr = [];
    cartItems.forEach((item) => {
      arr.push({ [item._id]: item.quantity });
    });

    fetch("/buy", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(arr),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        dispatch(purchaseCartItemsReceive());
        dispatch(clearCart());
        history.push("/confirmationPage", { cart: arr });
      })
      .catch((error) => {
        console.error("Error:", error);
        dispatch(purchaseCartItemsError(error));
      });
  };

  return <CartButton onClick={handlePurchase}>purchase</CartButton>;
};

const CartButton = styled.button`
  border-radius: 12px;
  background: ${COLORS.yellow};
  color: white;
  border: none;
  padding: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  width: 70%;
  min-height: 50px;
  text-transform: uppercase;
`;

export default PurchaseButton;
