import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import CartButton from "./CartButton";

const Header = () => {
  return (
    <Wrapper>
      <TitleLink to={"/"}>620 SQUARE MILES</TitleLink>
      <CartButton />
    </Wrapper>
  );
};

const Wrapper = styled.header`
  margin: 0;
  margin-bottom: 20px;
  padding: 30px 20px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid black;
`;

const TitleLink = styled(Link)`
  font-weight: 800;
  font-size: 32px;
  grid-area: header;
  text-decoration: none;
  color: black;
`;

export default Header;
