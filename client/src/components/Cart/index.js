import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import CartItem from "../Cart/CartItem";
import CartButton from "../Cart/CartButton";
import { getCartItemArray } from "../../reducers/cartReducer";

const Cart = () => {
  const cartItems = useSelector(getCartItemArray);
  console.log("cart items array", cartItems);

  const calculateTotalItems = (arr) => {
    let totalItems = arr.length;

    arr.forEach((item) => {
      totalItems += item.quantity;
    });
    return totalItems;
  };

  const calculateTotalPrice = (arr) => {
    let totalPrice = 0;

    if (arr.length > 0) {
      arr.forEach((item) => {
        const price = Number(item.price.replace(/[^0-9.-]+/g, "")) * 100;
        totalPrice += price;
      });
    }

    return <span>${totalPrice / 100}</span>;
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
                <span style={{ fontStyle: "italic" }}>Your cart is empty.</span>
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
            <CartButton
              style={{
                width: "70%",
                height: "50px",
                textTransform: "uppercase",
              }}
            >
              Checkout
            </CartButton>
          </ButtonWrapper>
        </BuyWrapper>
      </CartWrapper>
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 98%;
  min-height: 380px;
  height: 100%;
  background: gainsboro;
  color: #000;
  padding-top: 20px;
  margin: 0;
`;

const CartWrapper = styled.div`
  display: flex;
  width: 80%;
  height: 100%;
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
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 25px 0 0 0;
`;

const StyledP = styled.p`
  color: #b0a2b0;
`;

export default Cart;
