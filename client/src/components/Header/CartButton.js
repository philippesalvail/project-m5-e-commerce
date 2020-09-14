import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { IconContext } from "react-icons";
import { GrCart } from "react-icons/gr";

const CartButton = () => {
  //here I need to connect to the cart state when it's up
  // const amountInCart = useSelector((state) => state.cart.numInCart
  //
  // )
  return (
    <Wrapper to={"/cart"}>
      <IconContext.Provider value={{ size: "35px" }}>
        <div>
          <CartIcon />
        </div>
      </IconContext.Provider>
    </Wrapper>
  );
};

const Wrapper = styled(Link)`
  background: white;
  position: relative;
  padding: 8px 10px 0;
  height: 45px;
  margin: 0;
  border-radius: 5px;
  border: 1px black solid;

  & :before {
    content: "1";
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
  }
`;

const CartIcon = styled(GrCart)``;

export default CartButton;
