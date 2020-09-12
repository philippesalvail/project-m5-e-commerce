import React from "react";
import styled from "styled-components";

const Header = () => {
  return <Wrapper>620 SQUARE MILES</Wrapper>;
};

const Wrapper = styled.header`
  padding: 50px 20px;
  font-weight: 800;
  font-size: 32px;
  grid-area: header;
`;

export default Header;
