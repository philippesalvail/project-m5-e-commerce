import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Wrapper>
      <Title>620 SQUARE MILES</Title>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  margin: 0;
  padding: 30px 20px 0;
`;

const Title = styled.h1`
  font-weight: 800;
  font-size: 32px;
  grid-area: header;
`;

export default Header;
