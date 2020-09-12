import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import {
  requestProductDetail,
  receiveProductDetail,
  receiveProductError,
} from "../actions";

function ProductDetails() {
  const product = useSelector((state) => state.product.currentProduct);
  const company = useSelector((state) => state.product.currentCompany);
  const dispatch = useDispatch();

  // dispatch(receiveProductDetail(jsonObj))

  React.useEffect(() => {
    dispatch(requestProductDetail());
    let item = 6543;
    fetch(`/item/${item}`)
      .then((response) => response.json())
      .then((jsonObj) => dispatch(receiveProductDetail(jsonObj)))
      .catch((err) => dispatch(receiveProductError(err)));
  }, []);

  if (product && company) {
    console.log("product: ", product);
    console.log("company: ", company);
  }

  return (
    <>
      {/* {display ? (
        <div>
          <Product>
            <ProductImg>
              <Img src={display.itemDetails.imageSrc} />
            </ProductImg>
            <Description>
              <Category>{display.itemDetails.category}</Category>
              <NameAndPrice>
                <Name>{display.itemDetails.name}</Name>
                <Price>{display.itemDetails.price}</Price>
              </NameAndPrice>
              <ItemForm>
                <LblAndRemaining>
                  <QtyLabel>Quantity Remaining: </QtyLabel>
                  <QtyRemaining>{display.itemDetails.numInStock}</QtyRemaining>
                  <CompanyDetails>
                    <NameLbl>Designed by: {display.company.name}</NameLbl>
                    <CountryLbl>Made in: {display.company.country}</CountryLbl>
                  </CompanyDetails>
                </LblAndRemaining>
              </ItemForm>
              <Wrapper>
                <WornLbl>Worn on: {display.itemDetails.body_location}</WornLbl>
                <WebsiteWrapper>
                  <WebsiteLbl>To Visit Company Website: </WebsiteLbl>
                  <WebSite href={display.company.url} target="_blank">
                    Click Here
                  </WebSite>
                </WebsiteWrapper>
              </Wrapper>
            </Description>
          </Product>
        </div>
      ) : (
        <div>Loading</div>
      )} */}
    </>
  );
}

const WebsiteLbl = styled.span`
  font-size: 20px;
`;

const WebsiteWrapper = styled.div``;
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

const ProductImg = styled.div`
  text-align: center;
  flex: 1;
`;

const ItemForm = styled.form``;

const QtyLabel = styled.label`
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

const LblAndRemaining = styled.div``;

const QtySelection = styled.div``;

const Product = styled.div`
  display: flex;
  width: 70%;
  margin: 0 auto;
  border: 1px solid gray;
  padding: 2%;
  border-radius: 25px;
`;
const Img = styled.img``;

const Description = styled.div`
  diplay: flex;
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
