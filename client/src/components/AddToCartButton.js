import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

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

const Wrapper = styled.button``;

export default AddToCartButton;
