import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ListItem = ({ item }) => {
  return (
    <CardLink to={`/item/${item._id}`}>
      <Wrapper>
        <ItemName>{item.name}</ItemName>
        <ItemImage src={item.imageSrc} alt="item.name" />
        {item.numInStock === 0 ? (
          <Error>Out of Stock</Error>
        ) : (
          <Price>{item.price}</Price>
        )}
      </Wrapper>
    </CardLink>
  );
};

const Wrapper = styled.div`
  text-align: center;
  border-radius: 10px;
  box-shadow: 0px 14px 46px -9px rgba(0, 0, 0, 0.75);
  background-color: white;
  padding: 5px;
`;

const CardLink = styled(Link)`
  text-decoration: none;
  transition: transform 250ms;
`;

const ItemName = styled.h3`
  color: black;
  font-weight: 400;
  font-size: 16px;
`;

const Price = styled.p`
  color: blue;
`;

const ItemImage = styled.img`
  object-fit: cover;
  width: 150px;
  height: 150px;
  border-radius: 10px;
`;

const Error = styled.p`
  color: red;
  font-weight: 400;
`;

export default ListItem;
