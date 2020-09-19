import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { COLORS } from "../../constants";
import { FiWind } from "react-icons/fi";

import CartButton from "./CartButton";

const Header = () => {
  return (
    <Wrapper>
      <TitleLink to={"/"}>
        620sqm <FiWind />
      </TitleLink>

      <CartButton />
    </Wrapper>
  );
};

const Wrapper = styled.header`
  margin: 0;
  padding: 0 0 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${COLORS.primary};
`;

const TitleLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 800;
  font-size: 24px;
  grid-area: header;
  text-decoration: none;
  color: white;
`;

export default Header;
