import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { COLORS } from "../../constants";

import AddToCartButton from "../AddToCartButton";

const ListItem = ({ item }) => {
  return (
    <Wrapper>
      <CardLink to={`/item/${item._id}`}>
        <ItemImage src={item.imageSrc} alt={item.name} />
        <ItemName>{item.name}</ItemName>
      </CardLink>
      {item.numInStock === 0 ? (
        <Error>Out of Stock</Error>
      ) : (
        <>
          <Price>{item.price}</Price>
          <AddToCartButton item={item} />
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  border: 1px solid gainsboro;
  /* border-radius: 10px; */
  /* box-shadow: 0px 14px 46px -9px rgba(0, 0, 0, 0.75); */
  background-color: white;
  padding: 5px;
`;

const CardLink = styled(Link)`
  text-decoration: none;
  transition: transform 250ms;
`;

const ItemName = styled.h3`
  color: grey;
  font-weight: 600;
  font-size: 12px;
  margin: 15px;
`;

const Price = styled.p`
  color: black;
  font-weight: 600;
  margin: 10px;
`;

const ItemImage = styled.img`
  object-fit: cover;
  width: 200px;
  height: 200px;
  border-radius: 10px;
  margin: 15px;
`;

const Error = styled.p`
  color: ${COLORS.warning};
  font-weight: 400;
`;

export default ListItem;
