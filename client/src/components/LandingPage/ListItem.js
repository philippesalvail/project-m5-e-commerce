import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ListItem = ({ item }) => {
  return (
    <CardLink to={`/item/:${item._id}`}>
      <Wrapper>
        <ItemName>{item.name}</ItemName>
        <ItemImage src={item.imageSrc} alt="item.name" />
        <Price>{item.price}</Price>
      </Wrapper>
    </CardLink>
  );
};

const Wrapper = styled.div`
  text-align: center;
  border-radius: 10px;
  box-shadow: 0px 14px 46px -9px rgba(0, 0, 0, 0.75);
  background-color: white;
`;

const CardLink = styled(Link)`
  text-decoration: none;
  transition: transform 250ms;
`;

const ItemName = styled.h3`
  color: black;
  font-weight: 400;
`;

const Price = styled.p`
  color: blue;
`;

const ItemImage = styled.img`
  border-radius: 12px;
  width: 65%;
  height: auto;
`;

export default ListItem;
