import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import ListItem from "./ListItem";

const ItemGrid = () => {
  const { itemList } = useSelector((state) => state.items);

  return (
    <Wrapper>
      <GridContainer>
        {itemList.map((item) => {
          return <ListItem key={item._id} item={item} />;
        })}
      </GridContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const GridContainer = styled.div`
  margin: 30px 0 0 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  column-gap: 30px;
  row-gap: 30px;
  width: 90%;
  justify-content: center;
`;

export default ItemGrid;
