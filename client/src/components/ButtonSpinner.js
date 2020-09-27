import React from "react";
import styled, { keyframes } from "styled-components";
import { ImSpinner3 } from "react-icons/im";
import { COLORS } from "../constants";

const ButtonSpinner = () => {
  return (
    <CartButton>
      <Rotate />
    </CartButton>
  );
};

const rotate = keyframes`
from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
`;

const Rotate = styled(ImSpinner3)`
  animation: ${rotate} 2s linear infinite;
  font-size: 20px;
`;

const CartButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: ${COLORS.yellow};
  color: white;
  border: none;
  margin-top: 28px;
  padding: 4px;
  font-size: 10px;
  font-weight: 600;
  cursor: pointer;
  width: 50%;
  min-height: 45px;
  text-transform: uppercase;
`;

export default ButtonSpinner;
