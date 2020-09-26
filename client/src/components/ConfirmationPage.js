import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { IoIosCheckmarkCircle } from "react-icons/io";
import Error from "./Error";

import {
  requestItemList,
  receiveItemList,
  receiveItemListError,
  receiveOrderError,
  receiveOrderId,
  requestOrderId,
} from "../actions";

import LoadingSpinner from "./LoadingSpinner";

const ConfirmationPage = () => {
  const dispatch = useDispatch();
  const { status, error, itemList } = useSelector((state) => state.items);
  const orderStatus = useSelector((state) => state.order.status);
  const orderError = useSelector((state) => state.order.error);

  let numTotalPrice = 0;

  const orderId = useParams().orderId;

  //console.log(orderId);
  React.useEffect(() => {
    let itemIds = "";
    dispatch(requestOrderId());
    fetch(`/order/${orderId}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.status !== "error") {
          let itemId = Object.keys(data.order);
          let itemQty = Object.values(data.order);
          itemId.forEach((itemId, index) => {
            itemIds += `${itemId}-${itemQty[index]},`;
          });
          dispatch(receiveOrderId());
          console.log(itemIds);
        } else {
          dispatch(receiveOrderError(data.error));
          return;
        }
      })
      .then(() => {
        dispatch(requestItemList());
        console.log(error);
        if (status !== "error") {
          fetch(`/items/list/${itemIds}`)
            .then((res) => res.json())
            .then((itemList) => {
              if (!itemList.Error) {
                dispatch(receiveItemList(itemList));
              } else {
                dispatch(receiveItemListError(error));
              }
            })
            .catch((error) => dispatch(receiveItemListError(error)));
        }
      });

    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, []);

  if (orderStatus === "error") {
    return <Error>{`${orderError}`}</Error>;
  }

  if (status === "loading") {
    return <LoadingSpinner />;
  }

  if (status === "idle") {
    itemList.forEach((item) => {
      let numPrice = Number(item.price.split("$")[1]);
      numTotalPrice += numPrice * item.qty;
    });
  }

  return (
    <OrderSummary>
      <OrderBanner>
        <OrderTitle>
          <Checkmark />
          ORDER CONFIRMED{" "}
        </OrderTitle>
        <OrderConfirmation>
          <h4>Thank you for your order</h4>
        </OrderConfirmation>
        <OrderId>Order #: {`${orderId}`}</OrderId>
        <CustomerInfo>
          <h4> Summary: </h4>
        </CustomerInfo>
      </OrderBanner>

      <CustomerInfo>
        <h4>Order Summary: </h4>
      </CustomerInfo>

      {status === "idle" && (
        <OrderDetails>
          <CustomerPurchases>
            {itemList.map((item) => {
              return (
                <CustomerItem key={item.name}>
                  <ProductName>{item.name}</ProductName>

                  <ProductPrice>{item.price}</ProductPrice>
                  <ProductQuantity>x {item.qty}</ProductQuantity>
                </CustomerItem>
              );
            })}
            <Divider />
            <TotalPrice>
              <TotalPriceLbl>Total Price: </TotalPriceLbl>
              <TotalPriceQuote>${numTotalPrice.toFixed(2)} </TotalPriceQuote>
            </TotalPrice>
          </CustomerPurchases>
        </OrderDetails>
      )}
    </OrderSummary>
  );
};

const TotalPrice = styled.div`
  display: flex;
  padding: 2%;
  justify-content: space-between;
  align-items: center;

  width: 90%;
`;

const TotalPriceLbl = styled.h4``;

const TotalPriceQuote = styled.h4`
  padding-right: 12px;
`;

const OrderTitle = styled.h2`
  padding: 2%;
`;

const OrderId = styled.p`
  font-weight: 200;
  margin-top: 10px;
`;

const Divider = styled.div`
  height: 0;
  width: 95%;
  border-top: 1px dashed #666;
  margin: 0 auto;
`;

const CustomerItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2%;
`;

const ProductName = styled.div`
  width: 80%;
`;

const ProductPrice = styled.div``;

const ProductQuantity = styled.h4`
  text-align: left;
`;

const CustomerPurchases = styled.div`
  flex: 2;
`;

const OrderDetails = styled.div`
  display: flex;
`;

const CustomerInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2%;
  margin-top: 15px;
`;

const OrderConfirmation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Checkmark = styled(IoIosCheckmarkCircle)`
  color: #93bd21;
  font-size: 18px;
  margin-right: 10px;
`;

const OrderBanner = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const OrderSummary = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 50vw;
  height: 75vh;
  margin: 0 auto;
  margin-top: 20px;
  border: 1px solid gainsboro;
  border-radius: 5px;
  padding: 20px;
`;

export default ConfirmationPage;
