import React from "react";
import styled, { keyframes } from "styled-components";
import { GrNodes } from "react-icons/gr";

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

const Rotate = styled(GrNodes)`
  animation: ${rotate} 2s linear infinite;
  font-size: 20px;
  color: white;
`;

const CartButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: #e1ad01;
  color: white;
  border: none;
  padding: 10px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  width: 70%;
  text-transform: uppercase;
`;

export default ButtonSpinner;
