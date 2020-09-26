import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { COLORS } from "../../constants";
import { FiWind } from "react-icons/fi";

import { changeCategoryFilter } from "../../actions";
import CartButton from "./CartButton";
import NavBar from "./NavBar";

const Header = () => {
  const { currentCategory } = useSelector((state) => state.items);
  const location = useLocation();
  const dispatch = useDispatch();

  if (!currentCategory && location.pathname === "/") {
    dispatch(changeCategoryFilter("fitness"));
  }

  return (
    <Wrapper>
      <TopHeader>
        <TitleLink to={"/"}>
          620sqm <FiWind />
        </TitleLink>

        <CartButton />
      </TopHeader>
      <NavBar />
    </Wrapper>
  );
};

const Wrapper = styled.header``;

const TopHeader = styled.div`
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
