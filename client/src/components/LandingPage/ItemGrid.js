import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import ListItem from "./ListItem";

const ItemGrid = () => {
  const { itemList } = useSelector((state) => state.items);

  return (
    <Wrapper>
      {itemList.map((item) => {
        return <ListItem key={item._id} item={item} />;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
  column-gap: 30px;
  row-gap: 30px;
  width: 90%;
`;

export default ItemGrid;
