import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import CartItem from "../Cart/CartItem";
import PurchaseButton from "./PurchaseButton";
import ButtonSpinner from "../ButtonSpinner";
import { getCartItemArray } from "../../reducers/cartReducer";

const Cart = () => {
  const cartItems = useSelector(getCartItemArray);
  const { status, error } = useSelector((state) => state.purchase);
  const dispatch = useDispatch();

  let totalItems = 0;

  const calculateTotalItems = (arr) => {
    arr.forEach((item) => {
      if (item.quantity) {
        totalItems += item.quantity;
      } else {
        totalItems++;
      }
    });
    return totalItems;
  };

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
    return <span>${totalPrice.toFixed(2) / 100}</span>;
  };

  return (
    <PageWrapper>
      <CartWrapper>
        <BagWrapper>
          <BagHeader>
            <h1>My cart</h1>

            <StyledP>
              {cartItems.length > 0 ? (
                <span>{calculateTotalItems(cartItems)} items</span>
              ) : (
                <span>0 items</span>
              )}
            </StyledP>
          </BagHeader>

          <BagBody>
            <CartItemContainer style={{ padding: 0 }}>
              {cartItems.length > 0 ? (
                cartItems.map((item) => {
                  return (
                    <ListItem key={item._id}>
                      <CartItem item={item} />
                    </ListItem>
                  );
                })
              ) : (
                <div style={{ fontStyle: "italic", marginTop: "100px" }}>
                  Your cart is empty.
                </div>
              )}
            </CartItemContainer>
          </BagBody>
        </BagWrapper>

        <BuyWrapper>
          <h2
            style={{ borderBottom: "1px solid gainsboro", paddingBottom: 15 }}
          >
            Total
          </h2>
          <BuyGrid>
            <h3>Sub-total</h3>
            <StyledP>
              {cartItems.length > 0 ? (
                <span>{calculateTotalPrice(cartItems)}</span>
              ) : (
                <span>$0</span>
              )}
            </StyledP>
            <h3>Delivery</h3>
            <StyledP>Free</StyledP>
          </BuyGrid>

          <ButtonWrapper>
            {status === "loading" ? (
              <ButtonSpinner />
            ) : (
              <PurchaseButton cartItems={cartItems} />
            )}
          </ButtonWrapper>
        </BuyWrapper>
      </CartWrapper>
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100vw;
  min-height: 100vh;
  background: gainsboro;
  color: #000;
  padding-top: 20px;
  margin: 0;
`;

const CartWrapper = styled.div`
  display: flex;
  width: 80vw;
  height: 70vh;
`;

const BagWrapper = styled.div`
  width: 60%;
  max-height: 100vh;
  overflow: hidden;
  overflow-y: scroll;
  background: #fff;
  margin: 0 15px 0 0;
`;

const BagHeader = styled.div`
  margin: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const BagBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CartItemContainer = styled.ul`
  padding: 0;
`;

const ListItem = styled.li`
  list-style-type: none;
`;

const BuyWrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  width: 40%;
  height: 300px;
  background: #fff;
  margin: 0 0 0 15px;
`;

const BuyGrid = styled.div`
  padding-top: 25px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 15px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 25px 0 0 0;
`;

const StyledP = styled.p`
  color: #b0a2b0;
`;

export default Cart;
