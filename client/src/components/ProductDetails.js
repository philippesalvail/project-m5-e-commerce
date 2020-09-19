import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import AddToCarButton from "./AddToCartButton";
import SimilarItemsDisplay from "./SimilarItemsDisplay";
import { NavLink } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";

import {
  requestProductDetail,
  receiveProductDetail,
  receiveProductError,
} from "../actions";

function ProductDetails() {
  const item = useParams().itemId;
  const productDetails = useSelector((state) => state.product.currentProduct);
  const companyDetails = useSelector((state) => state.product.currentCompany);
  const productPurchase = useSelector((state) => state.purchase);
  const similarItems = useSelector((state) => state.product.similarItems);
  const loadingState = useSelector((state) => state.status);
  const [quantity, setQuantity] = React.useState(1);
  const dispatch = useDispatch();

  const increaseQtyPurchase = () => {
    if (quantity < productDetails.numInStock) {
      setQuantity(quantity + 1);
    } else {
      return;
    }
  };
  const decreaseQtyPurchase = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    } else {
      return;
    }
  };

  React.useEffect(() => {
    dispatch(requestProductDetail());
    fetch(`/item/${item}`)
      .then((response) => response.json())
      .then((jsonObj) => dispatch(receiveProductDetail(jsonObj)))
      .catch((err) => dispatch(receiveProductError(err)));
  }, [item]);

  return (
    <>
      {productDetails && companyDetails && productPurchase ? (
        <DetailPage>
          <Product>
            <Img src={productDetails.imageSrc} />
            <Description>
              {/* <Category>{productDetails.category}</Category> */}
              <NameAndPrice>
                <Name>{productDetails.name}</Name>
                <Price>{productDetails.price}</Price>
              </NameAndPrice>
              <Item>
                {productDetails.numInStock === 0 ? (
                  <OutOfStockLbl>Out Of Stock</OutOfStockLbl>
                ) : (
                  <QtyAndBackGround>
                    {productDetails.numInStock <= 2 &&
                    productDetails.numInStock > 0 ? (
                      <QtyWrapper>
                        <QtyRemaining>
                          Only {productDetails.numInStock} Remaining!!
                        </QtyRemaining>
                      </QtyWrapper>
                    ) : (
                      <></>
                    )}

                    <QtyForm>
                      <QtySelection>
                        <QtyLbl>Desired Qty: </QtyLbl>
                        <DecrementBtn
                          onClick={() => {
                            decreaseQtyPurchase();
                          }}
                        >
                          -
                        </DecrementBtn>
                        <QtySelected placeholder={quantity} />
                        <IncrementBtn
                          onChange={() => {
                            increaseQtyPurchase();
                          }}
                        >
                          +
                        </IncrementBtn>
                      </QtySelection>
                      <ButtonWrapper>
                        <AddToCarButton
                          item={productDetails}
                          quantity={quantity}
                        />
                      </ButtonWrapper>
                    </QtyForm>
                  </QtyAndBackGround>
                )}
              </Item>
              <CompanyDetails>
                <NameLbl>
                  Designed by:{" "}
                  <WebSite href={companyDetails.url} target="_blank">
                    {companyDetails.name}
                  </WebSite>{" "}
                </NameLbl>
              </CompanyDetails>
              <Wrapper>
                <WornLbl>Worn on: {productDetails.body_location}</WornLbl>
                <CountryLbl>Made in: {companyDetails.country}</CountryLbl>
              </Wrapper>
            </Description>
          </Product>
          <SimilarItemsDisplay similarItems={similarItems} />
        </DetailPage>
      ) : (
        <LoadingSpinner />
      )}
    </>
  );
}

const OutOfStockLbl = styled.div`
  color: red;
  font-size: 1.25em;
  text-align: right;
`;

const BackContainer = styled.div`
  margin-top: 3%;
  text-align: center;
`;

const BackLink = styled(NavLink)`
  text-decoration: none;
  font-size: 1.5em;
  text-align: center;
  &:hover {
    background-color: lightgreen;
    padding: 2%;
    border-radius: 25px;
    color: #ff4500;
  }
`;

const DetailPage = styled.div`
  display: flex;
  flex-direction: column;
`;

const IncrementBtn = styled.button``;

const DecrementBtn = styled.button``;

const QtySelected = styled.input`
  text-align: center;
  width: 5%;
`;

const QtyWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const QtyForm = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ButtonWrapper = styled.div``;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0;
`;

const CompanyDetails = styled.div`
  display: flex;
  justify-content: space-between;
`;

const WebSite = styled.a`
  font-size: 20px;
  text-decoration: none;
`;

const Img = styled.img`
  box-shadow: 2px 2px 2px 2px #000;
  margin-right: 2%;
  flex: 1;
  text-align: center;
  padding: 2%;
  width: 100%;
  height: 100%;
`;

const Item = styled.div``;

const QtyLbl = styled.label`
  font-size: 20px;
`;
const NameLbl = styled.p`
  font-size: 20px;
`;
const WornLbl = styled.div`
  font-size: 20px;
  text-align: center;
`;
const CountryLbl = styled.div`
  font-size: 20px;
`;

const QtyRemaining = styled.label`
  color: red;
  font-size: 1.25em;
  margin-bottom: 3%;
`;

const QtyAndBackGround = styled.div``;

const QtySelection = styled.div``;

const Product = styled.div`
  position: relative;
  display: flex;
  width: 70%;
  margin: 0 auto;
  border: 1px solid gray;
  padding: 2%;
  border-radius: 25px;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3;
`;

const NameAndPrice = styled.div`
  display: flex;
`;
const Name = styled.h3`
  flex: 1;
  margin-top: 0;
`;
const Price = styled.h2`
  flex: 1;
  text-align: right;
  margin-top: 0;
`;

export default ProductDetails;
