import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import {
  requestProductDetail,
  receiveProductDetail,
  receiveProductError,
  selectProduct,
  addQtyToPurchase,
  decreaseQtyToPurchase,
} from "../actions";

function ProductDetails() {
  const productDetails = useSelector((state) => state.product.currentProduct);
  const companyDetails = useSelector((state) => state.product.currentCompany);
  const productPurchase = useSelector((state) => state.productPurchase);
  const dispatch = useDispatch();

  const increaseQtyPurchase = () => {
    if (productPurchase.quantity < productDetails.numInStock) {
      dispatch(addQtyToPurchase());
    } else {
      return;
    }
  };
  const decreaseQtyPurchase = () => {
    if (productPurchase.quantity > 1) {
      dispatch(decreaseQtyToPurchase());
    } else {
      return;
    }
  };

  const item = useParams().itemId;

  React.useEffect(() => {
    dispatch(requestProductDetail());
    // let item = 6543;
    fetch(`/item/${item}`)
      .then((response) => response.json())
      .then((jsonObj) => dispatch(receiveProductDetail(jsonObj)))
      .then((product) =>
        dispatch(selectProduct(product.detail.itemDetails._id))
      )
      .catch((err) => dispatch(receiveProductError(err)));
  }, []);

  return (
    <>
      {productDetails && companyDetails && productPurchase ? (
        <div>
          <Product>
            <Img src={productDetails.imageSrc} />
            <Description>
              <Category>{productDetails.category}</Category>
              <NameAndPrice>
                <Name>{productDetails.name}</Name>
                <Price>{productDetails.price}</Price>
              </NameAndPrice>
              <Item>
                <QtyAndBackGround>
                  <QtyWrapper>
                    <QtyLbl>Quantity Remaining: </QtyLbl>
                    <QtyRemaining>{productDetails.numInStock}</QtyRemaining>
                  </QtyWrapper>
                  <QtyForm>
                    <QtySelection>
                      <QtyLbl>Desired Qty: </QtyLbl>
                      <QtySelected value={productPurchase.quantity} />
                      <IncrementBtn
                        onClick={() => {
                          increaseQtyPurchase();
                        }}
                      >
                        +
                      </IncrementBtn>
                      <DecrementBtn
                        onClick={() => {
                          decreaseQtyPurchase();
                        }}
                      >
                        -
                      </DecrementBtn>
                    </QtySelection>
                    <ButtonWrapper>
                      <AddButton>Add to Cart</AddButton>
                    </ButtonWrapper>
                  </QtyForm>
                </QtyAndBackGround>
              </Item>
              <CompanyDetails>
                <NameLbl>Designed by: {companyDetails.name}</NameLbl>
                <CountryLbl>Made in: {companyDetails.country}</CountryLbl>
              </CompanyDetails>
              <Wrapper>
                <WornLbl>Worn on: {productDetails.body_location}</WornLbl>
                <WebsiteWrapper>
                  <WebsiteLbl>To Visit Company Website: </WebsiteLbl>
                  <WebSite href={companyDetails.url} target="_blank">
                    Click Here
                  </WebSite>
                </WebsiteWrapper>
              </Wrapper>
            </Description>
          </Product>
        </div>
      ) : (
        <div>Loading</div>
      )}
    </>
  );
}

const IncrementBtn = styled.button``;

const DecrementBtn = styled.button``;

const QtySelected = styled.input`
  text-align: center;
  width: 5%;
`;
const PurchaseWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const QtyWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const QtyForm = styled.div`
  margin-top: 1%;
  display: flex;
  justify-content: space-between;
`;

const ButtonWrapper = styled.div``;

const BackButton = styled.button``;

const AddButton = styled.button``;

const WebsiteLbl = styled.span`
  font-size: 20px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0;
`;

const CompanyDetails = styled.div`
  display: flex;
  justify-content: space-between;
`;

const WebsiteWrapper = styled.div``;

const WebSite = styled.a`
  font-size: 20px;
  text-decoration: none;
`;

const ProductImg = styled.div`
  position: relative;
  flex: 1;
  text-align: center;
  box-shadow: 2px 2px 2px 2px #000;
  margin-right: 2%;
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
const WornLbl = styled.p`
  font-size: 20px;
  text-align: center;
  margin: 0;
`;
const CountryLbl = styled.p`
  font-size: 20px;
`;

const QtyRemaining = styled.label`
  font-size: 20px;
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
`;
const Price = styled.h2`
  flex: 1;
  text-align: right;
`;

const Qty = styled.div``;

const Category = styled.h2`
  display: flex;
  flex-direction: column;
  margin-top: 0;
  margin-bottom: 0;
`;

export default ProductDetails;
