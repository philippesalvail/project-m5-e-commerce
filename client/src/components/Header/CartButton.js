import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { IconContext } from "react-icons";
import { FiShoppingCart } from "react-icons/fi";

import { COLORS } from "../../constants";

import ScaleIn from "./ScaleIn";

import { getCartItemArray } from "../../reducers/cartReducer";

const CartButton = () => {
  const cartItemArray = useSelector(getCartItemArray);

  let badgeContent = "";
  if (cartItemArray.length !== 0) {
    let numItems = 0;
    cartItemArray.forEach((item) => {
      numItems += item.quantity;
    });
    badgeContent = String(numItems);
  }

  // console.log(badgeContent);
  return (
    <Wrapper to={"/cart"}>
      <IconContext.Provider value={{ size: "35px" }}>
        <div>
          <CartIcon></CartIcon>
        </div>
      </IconContext.Provider>
      {cartItemArray.length !== 0 && (
        <ScaleIn>
          <CartBadge>{badgeContent}</CartBadge>
        </ScaleIn>
      )}
    </Wrapper>
  );
};

const Wrapper = styled(Link)`
  position: relative;
  padding: 8px 10px 0;
  height: 45px;
  margin: 0;
  color: white;

  /* & :before {
    content: "";
    position: absolute;
    top: -12px;
    right: -12px;
    height: 25px;
    width: 25px;
    font-size: 18px;
    text-align: center;
    border-radius: 50%;
    background-color: red;
    color: white;
  } */
`;

const CartIcon = styled(FiShoppingCart)`
  color: white;
  padding: 0 20px 0 0;
`;

const CartBadge = styled.div`
  position: absolute;
  top: 5px;
  right: 17px;
  height: 20px;
  width: 20px;
  font-size: 15px;
  text-align: center;
  border-radius: 50%;
  background-color: ${COLORS.yellow};
  color: white;
`;

export default CartButton;
