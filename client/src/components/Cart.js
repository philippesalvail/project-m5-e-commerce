import React from "react";
import styled from "styled-components";
import CartItem from "./CartItem";
import CartButton from "./CartButton";
import { useSelector } from "react-redux";

const Cart = () => {
  const state = useSelector((state) => state);
  const storeItems = [];

  const calculateTotalItems = (arr) => {
    let totalItems = 0;

    arr.forEach((item) => {
      totalItems += item.quantity;
    });
    return totalItems;
  };

  const calculateTotalPrice = (arr) => {
    let totalPrice = 0;

    arr.forEach((item) => {
      totalPrice += item.quantity * item.price;
    });
    return <span>${totalPrice / 100}</span>;
  };

  return (
    <StyledDiv>
      <div style={{ margin: "20px" }}>
        <StyledH1>Your cart</StyledH1>

        <StyledP>{calculateTotalItems(storeItems)} items</StyledP>
      </div>
      <ul
        style={{
          margin: "0",
          padding: "0",
          height: "60%",
          overflow: "hidden",
          overflowY: "scroll",
        }}
      >
        {storeItems.map((item) => {
          return (
            <li key={item.id} style={{ listStyleType: "none" }}>
              <CartItem item={item} />
            </li>
          );
        })}
      </ul>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          position: "absolute",
          bottom: "40px",
          width: "360px",
        }}
      >
        <StyledP>Total: {calculateTotalPrice(storeItems)}</StyledP>
        <CartButton style={{ width: "120px", height: "40px" }}>
          Purchase
        </CartButton>
      </div>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  height: 100%;
  width: 360px;
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  background-color: #401f43;
  overflow-x: hidden;
  padding-top: 20px;
`;

const StyledH1 = styled.h1`
  color: #fff;
`;

const StyledP = styled.p`
  color: #b0a2b0;
`;

export default Cart;
