import React from "react";
import styled from "styled-components";

import CartButton from "./CartButton";

const Header = () => {
  return (
    <Wrapper>
      <Title>620 SQUARE MILES</Title>
      <CartButton />
    </Wrapper>
  );
};

const Wrapper = styled.header`
  margin: 0;
  margin-bottom: 20px;
  padding: 30px 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid black;
`;

const Title = styled.h1`
  font-weight: 800;
  font-size: 32px;
  grid-area: header;
`;

export default Header;
