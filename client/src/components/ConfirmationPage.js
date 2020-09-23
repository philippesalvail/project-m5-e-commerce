import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const ConfirmationPage = () => {
  const allItems = useSelector((state) => state.items.allItems);
  const location = useLocation();
  const myCart = location.state.cart;
  let cartItems = [];
  let totalPrice = 0;
  if (allItems) {
    myCart.forEach(function (obj, index) {
      for (let key in obj) {
        for (let i = 0; i < allItems.length; i++) {
          if (allItems[i]._id == key) {
            let totalSubPrice = (
              allItems[i].price.substring(1) * obj[key]
            ).toFixed(2);
            totalPrice += parseFloat(totalSubPrice);
            totalSubPrice = "$" + totalSubPrice;
            let product = {
              id: allItems[i]._id,
              name: allItems[i].name,
              qty: obj[key],
              price: totalSubPrice,
            };
            cartItems.push(product);
          }
        }
      }
    });
  }

  myCart.forEach(function (obj, index) {
    for (var key in obj) {
      console.log(key, obj[key]);
    }
  });

  const key = uuidv4();

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
                <ProductName>{item.name}</ProductName>
                {item.qty > 1 && (
                  <ProductQuantity>x {item.qty}</ProductQuantity>
                )}
                <ProductPrice>{item.price}</ProductPrice>
              </CustomerItem>
            );
          })}
          <TotalPrice>
            <TotalPriceLbl>Total Price: </TotalPriceLbl>
            <TotalPriceQuote>${totalPrice} </TotalPriceQuote>
          </TotalPrice>
        </CustomerPurchases>
      </OrderDetails>
    </OrderSummary>
  );
};

const TotalPrice = styled.div`
  display: flex;
  padding: 2%;
  justify-content: space-between;
`;

const TotalPriceLbl = styled.h4``;

const TotalPriceQuote = styled.h4``;

const OrderTitle = styled.h2`
  padding: 2%;
`;

const CustomerItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2%;
`;

const ProductName = styled.div`
  width: 90%;
`;

const ProductPrice = styled.div``;

const ProductQuantity = styled.h4`
  text-align: left;
`;

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
