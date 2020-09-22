import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
// import { useAuth0 } from "@auth0/auth0-react";
import { v4 as uuidv4 } from "uuid";
const ConfirmationPage = () => {
  const state = useSelector((state) => state.cart);

  const cartItems = Object.values(state);
  const location = useLocation();
  const myCart = location.state.cart;

  console.log("myCart: ", myCart);

  const key = uuidv4();

  console.log("key: ", key);

  return (
    <OrderSummary>
      <OrderBanner>
        <OrderTitle>Thank you for your order</OrderTitle>
        <OrderConfirmation>
          <h3>ORDER CONFIRMATION</h3>
          <h4>{key}</h4>
        </OrderConfirmation>
        <CustomerInfo>
          <h4>Order by: </h4>
          <div>Name of Customer</div>
        </CustomerInfo>
      </OrderBanner>
      <OrderDetails>
        <CustomerPurchases>
          {cartItems.map((item) => {
            return (
              <CustomerItem>
                <Product>{item.name}</Product>
                <Price>{item.price}</Price>
              </CustomerItem>
            );
          })}
        </CustomerPurchases>
      </OrderDetails>
    </OrderSummary>
  );
};

const OrderTitle = styled.h2`
  padding: 2%;
`;

const CustomerItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2%;
`;

const Product = styled.div`
  width: 90%;
`;

const Price = styled.div``;

const Quantity = styled.div``;

const CustomerPurchases = styled.div`
  flex: 2;
`;

const CustomerImg = styled.img`
  flex: 1;
`;

const OrderDetails = styled.div`
  display: flex;
`;

const CustomerInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2%;
`;

const OrderConfirmation = styled.div`
  background-color: LightGreen;
  padding: 2%;
`;

const OrderBanner = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const OrderSummary = styled.div`
  margin-up: 2%;
  width: 90%;
  margin: 0 auto;
  border: 1px solid black;
  border-radius: 25px;
`;

export default ConfirmationPage;
