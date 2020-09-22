import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import AddToCarButton from "./AddToCartButton";
import SimilarItemsDisplay from "./SimilarItemsDisplay";
import LoadingSpinner from "./LoadingSpinner";
import { COLORS } from "../constants";

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
    <Wrapper>
      {productDetails && companyDetails && productPurchase ? (
        <DetailPage>
          <div
            style={{
              width: "100vw",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Product
              style={{
                margin: "80px",
              }}
            >
              <Img src={productDetails.imageSrc} />
              <Description>
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
                            Only {productDetails.numInStock} Remaining!
                          </QtyRemaining>
                        </QtyWrapper>
                      ) : (
                        <QtyWrapper>
                          <QtyRemaining></QtyRemaining>
                        </QtyWrapper>
                      )}

                      <QtyForm>
                        <QtySelection>
                          <QtyLbl>Qty: </QtyLbl>
                          <DecrementBtn
                            onClick={() => {
                              decreaseQtyPurchase();
                            }}
                          >
                            -
                          </DecrementBtn>
                          <QtySelected placeholder={quantity} />
                          <IncrementBtn
                            onClick={() => {
                              increaseQtyPurchase();
                            }}
                          >
                            +
                          </IncrementBtn>
                        </QtySelection>
                      </QtyForm>
                    </QtyAndBackGround>
                  )}
                </Item>
                <CompanyDetails>
                  <NameLbl>
                    Seller:{" "}
                    <WebSite href={companyDetails.url} target="_blank">
                      {companyDetails.name}
                    </WebSite>{" "}
                  </NameLbl>
                </CompanyDetails>
                {productDetails.numInStock < 1 ? (
                  <ButtonWrapper></ButtonWrapper>
                ) : (
                  <ButtonWrapper>
                    <AddToCarButton item={productDetails} quantity={quantity} />
                  </ButtonWrapper>
                )}
              </Description>
            </Product>
          </div>
          <SimilarItemsDisplay similarItems={similarItems} />
        </DetailPage>
      ) : (
        <LoadingSpinner />
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const OutOfStockLbl = styled.div`
  color: red;
  font-size: 1.25em;
  text-align: right;
`;

const DetailPage = styled.div`
  display: flex;
  flex-direction: column;
`;

const IncrementBtn = styled.button`
  background: ${COLORS.yellow};
  color: white;
  border: none;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  margin: 3px;
`;

const DecrementBtn = styled.button`
  background: ${COLORS.yellow};
  color: white;
  border: none;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  margin: 3px;
`;

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

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 20px;
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
  width: 250px;
  margin: 20px 30px 20px 20px;
`;

const Item = styled.div``;

const QtyLbl = styled.label`
  font-size: 20px;
`;
const NameLbl = styled.p`
  font-size: 20px;
`;

const QtyRemaining = styled.label`
  color: ${COLORS.red};
  font-size: 1.25em;
  margin-bottom: 3%;
`;

const QtyAndBackGround = styled.div``;

const QtySelection = styled.div``;

const Product = styled.div`
  display: flex;
  width: 70%;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
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
  color: gray;
`;

export default ProductDetails;
