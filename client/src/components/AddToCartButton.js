import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { COLORS } from "../constants";

import { addCartItem } from "../actions";

const AddToCartButton = ({ item, quantity = 1 }) => {
  const dispatch = useDispatch();

  return (
    <Wrapper
      onClick={(ev) => {
        ev.stopPropagation();
        dispatch(
          addCartItem({
            ...item,
            quantity: quantity,
          })
        );
      }}
    >
      Add To Cart
    </Wrapper>
  );
};

const Wrapper = styled.button`
  border-radius: 12px;
  margin: 15px;
  background: ${COLORS.yellow};
  color: white;
  border: none;
  padding: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  width: 70%;
  min-height: 50px;
  text-transform: uppercase;
`;

export default AddToCartButton;
