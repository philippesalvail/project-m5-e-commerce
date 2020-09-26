import React from "react";
import styled, { keyframes } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { COLORS } from "../../constants";
import { useHistory } from "react-router-dom";

import {
  purchaseCartItemsRequest,
  purchaseCartItemsReceive,
  purchaseCartItemsError,
  clearCart,
  emptyCartError,
  clearEmptyCartError,
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
  const cartError = useSelector((state) => state.purchase.error);

  const handlePurchase = (event) => {
    event.preventDefault();

    dispatch(purchaseCartItemsRequest());

    let arr = [];
    cartItems.forEach((item) => {
      arr.push({ [item._id]: item.quantity });
    });

    if (arr.length > 0) {
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
    } else {
      dispatch(emptyCartError());
      window.setTimeout(() => {
        dispatch(clearEmptyCartError());
      }, 4000);
    }
  };

  return (
    <Wrapper>
      <CartButton onClick={handlePurchase}>purchase</CartButton>
      {cartError ? <ErrorBanner>{cartError}</ErrorBanner> : <></>}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 30px;
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

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

const fadeInOut = keyframes`
  0%,100% {opacity: 0;};
  30%, 80% {opacity: 1;};
`;

const ErrorBanner = styled.div`
  animation: ${fadeInOut} 4s linear forwards;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  background: ${COLORS.warning};
  color: white;
  width: 150px;
  height: 40px;
  border-radius: 5px;
`;

export default PurchaseButton;
