import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import { addItemToCart } from "../actions";

const AddToCartButton = ({ itemId, quantity = 1 }) => {
  const dispatch = useDispatch();

  return (
    <Wrapper
      onClick={(ev) => {
        ev.stopPropagation();
        dispatch(addItemToCart(itemId, quantity));
      }}
    >
      Add To Cart
    </Wrapper>
  );
};

const Wrapper = styled.button``;

export default AddToCartButton;
